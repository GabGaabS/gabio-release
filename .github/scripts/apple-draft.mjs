// Generic public CI machinery. No application sources or plaintext logs uploaded.
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile, stat, mkdir, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';

const ipaName = 'Gabio-iOS-0.1.0-unsigned.ipa';
const macNames = ['Gabio-macOS-0.1.0-arm64.zip', 'Gabio-macOS-0.1.0-x64.zip'];
const diagnosticName = 'apple-diagnostic.enc';
const sumsName = 'SHA256SUMS-Apple.txt';
export function destination(env) {
  assert.equal(env.GITHUB_REPOSITORY, 'GabGaabS/gabio-release');
  assert.equal(env.GITHUB_EVENT_NAME, 'workflow_dispatch');
  assert.equal(env.GITHUB_REF, 'refs/heads/main');
  assert.equal(env.GITHUB_ACTOR, 'GabGaabS');
  assert.match(env.SOURCE_SHA, /^[0-9a-f]{40}$/);
  assert.match(env.GITHUB_RUN_ID, /^[1-9][0-9]{0,19}$/);
  return `apple-internal-${env.GITHUB_RUN_ID}`;
}
export function sealDiagnostic(data, publicKey) {
  assert.ok(Buffer.isBuffer(data) && data.length <= 192 * 1024 * 1024);
  const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(Buffer.from('gabio-apple-diagnostic-v1'));
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const wrapped = crypto.publicEncrypt({ key: publicKey, oaepHash: 'sha256' }, key);
  key.fill(0);
  return Buffer.from(JSON.stringify({ version: 1, wrapped: wrapped.toString('base64'), iv: iv.toString('base64'), tag: cipher.getAuthTag().toString('base64'), data: encrypted.toString('base64') }));
}
export function openDiagnostic(envelope, privateKey) {
  const e = JSON.parse(envelope); assert.equal(e.version, 1);
  const key = crypto.privateDecrypt({ key: privateKey, oaepHash: 'sha256' }, Buffer.from(e.wrapped, 'base64'));
  try {
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(e.iv, 'base64'));
    decipher.setAAD(Buffer.from('gabio-apple-diagnostic-v1'));
    decipher.setAuthTag(Buffer.from(e.tag, 'base64'));
    return Buffer.concat([decipher.update(Buffer.from(e.data, 'base64')), decipher.final()]);
  } finally { key.fill(0); }
}
export function validateAssets(assets, hasIPA, hasMac = false) {
  assert.ok(!(hasIPA && hasMac));
  const binaries = hasIPA ? [ipaName] : hasMac ? macNames : [];
  assert.deepEqual(assets.map(a => a.name).sort(), [diagnosticName, ...binaries, ...(binaries.length ? [sumsName] : [])].sort());
  for (const a of assets) assert.ok(Number.isSafeInteger(a.size) && a.size > 0 && a.size <= 536_870_912);
}
async function exists(file) { try { await access(file); return true; } catch { return false; } }
let phase = 'checks';
async function main() {
  const env = process.env, tag = destination(env);
  assert.ok(env.GH_TOKEN && env.DIAGNOSTIC_PUBLIC_KEY && env.RUNNER_TEMP);
  const gh = args => execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  const repo = 'GabGaabS/gabio-release';
  const api = suffix => JSON.parse(gh(['api', `repos/${repo}/${suffix}`]));
  const out = path.join(env.RUNNER_TEMP, 'gabio-delivery'); await mkdir(out, { recursive: true });
  const log = path.join(env.RUNNER_TEMP, 'gabio-private-build.log');
  const diagnostic = path.join(out, diagnosticName);
  await writeFile(diagnostic, sealDiagnostic(await exists(log) ? await readFile(log) : Buffer.from('Preparation did not start.'), env.DIAGNOSTIC_PUBLIC_KEY));
  const validation = path.join(env.RUNNER_TEMP, 'gabio-validation');
  const marker = path.join(validation, 'ipa-verified.json'), hasIPA = await exists(marker);
  const macMarker = path.join(validation, 'mac-verified.json'), hasMac = await exists(macMarker);
  assert.ok(!(hasIPA && hasMac));
  const files = [diagnostic];
  if (hasIPA) {
    const verified = JSON.parse(await readFile(marker, 'utf8'));
    assert.equal(verified.name, ipaName); assert.match(verified.sha256, /^[0-9a-f]{64}$/);
    const ipa = path.join(env.RUNNER_TEMP, 'gabio-source', 'gabio-apple', 'dist', ipaName);
    assert.equal((await stat(ipa)).size, verified.size);
    assert.equal(crypto.createHash('sha256').update(await readFile(ipa)).digest('hex'), verified.sha256);
    const sums = path.join(out, sumsName); await writeFile(sums, `${verified.sha256}  ${ipaName}\n`);
    files.push(ipa, sums);
  }
  if (hasMac) {
    assert.ok(await exists(path.join(validation, 'mac-passed')));
    const manifest = JSON.parse(await readFile(macMarker, 'utf8'));
    assert.deepEqual(manifest.map(item => item.name).sort(), [...macNames].sort());
    const sums = path.join(out, sumsName), lines = [];
    for (const verified of manifest) {
      assert.ok(Number.isSafeInteger(verified.size) && verified.size > 0 && verified.size <= 536_870_912);
      assert.match(verified.sha256, /^[0-9a-f]{64}$/);
      const file = path.join(env.RUNNER_TEMP, 'gabio-source', 'gabio-apple', 'dist', verified.name);
      assert.equal((await stat(file)).size, verified.size);
      assert.equal(crypto.createHash('sha256').update(await readFile(file)).digest('hex'), verified.sha256);
      files.push(file); lines.push(`${verified.sha256}  ${verified.name}\n`);
    }
    await writeFile(sums, lines.join('')); files.push(sums);
  }
  const passed = await exists(path.join(validation, 'ui-passed'));
  const macPassed = await exists(path.join(validation, 'mac-passed'));
  const body = `INTERNAL DRAFT — DO NOT PUBLISH.\n\nBuild for personal device testing only. Universal iPhone/iPad IPA: ${hasIPA ? 'compiled and archive verified' : 'not available'}. Simulator UI checks: ${passed ? 'passed' : 'not passed'}. Isolated macOS validation: ${macPassed ? 'passed' : 'not passed'}. Mac packages: ${hasMac ? 'compiled, tested and archive verified' : 'not transferred'}. No physical device test yet. Parity incomplete.\n\nDiagnostics are authenticated ciphertext readable only with the locally retained key. No application source archive or plaintext build log. This workflow never publishes this draft or changes Latest.\n`;
  const notes = path.join(out, 'notes.md'); await writeFile(notes, body);
  // Use release/asset IDs throughout: an unpublished draft has no Git tag.
  phase = 'create-draft';
  const input = path.join(out, 'draft-input.json');
  // The public default-branch ref avoids extra workflow permissions when that
  // branch advances during a long build. This draft never publishes a tag.
  await writeFile(input, JSON.stringify({tag_name:tag,target_commitish:'main',draft:true,prerelease:true,make_latest:'false',name:'INTERNAL Apple test — DO NOT PUBLISH',body}));
  let draft = JSON.parse(gh(['api',`repos/${repo}/releases`,'--method','POST','--input',input]));
  assert.ok(Number.isSafeInteger(draft.id));
  assert.equal(draft.draft, true); assert.equal(draft.prerelease, true); assert.equal(draft.assets.length, 0);
  assert.equal(draft.body.replaceAll('\r\n','\n').trim(), body.trim());
  phase = 'upload-assets';
  for (const file of files) gh(['api',`https://uploads.github.com/repos/${repo}/releases/${draft.id}/assets?name=${encodeURIComponent(path.basename(file))}`,'--method','POST','--header','Content-Type: application/octet-stream','--input',file]);
  phase = 'verify-draft';
  draft = api(`releases/${draft.id}`); assert.equal(draft.draft, true); assert.equal(draft.prerelease, true); validateAssets(draft.assets, hasIPA, hasMac);
  const inspection = path.join(out, 'inspection'); await mkdir(inspection);
  for (const file of files) {
    const asset = draft.assets.find(a => a.name === path.basename(file)); assert.ok(Number.isSafeInteger(asset?.id));
    const downloaded = execFileSync('gh',['api',`repos/${repo}/releases/assets/${asset.id}`,'--header','Accept: application/octet-stream'],{maxBuffer:536_870_912,stdio:['ignore','pipe','pipe']});
    await writeFile(path.join(inspection,path.basename(file)),downloaded); assert.deepEqual(downloaded,await readFile(file));
  }
  console.log(`Unpublished internal draft retained; IPA verified: ${hasIPA}; simulator checks passed: ${passed}.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { await main(); } catch (error) {
    const stderr = String(error.stderr ?? '');
    const reason = /secondary rate limit/i.test(stderr) ? 'secondary rate limit' : /API rate limit/i.test(stderr) ? 'API rate limit' : /Resource not accessible by integration/i.test(stderr) ? 'token permission' : /abuse/i.test(stderr) ? 'content creation limit' : 'unspecified';
    console.error(`Internal draft transfer failed during ${phase} (${error.name}; HTTP ${stderr.match(/HTTP (\d{3})/)?.[1] ?? 'unknown'}; ${reason}). No release was published.`); process.exitCode = 1;
  }
}
