# Gabio — downloads and installation

[Guide d’installation en français](README.md)

Gabio is available for Windows, Android, iPhone, iPad and Mac. Apple and Android
builds are prereleases. Application source code remains private.

## Contents

- [Latest iPhone/iPad IPA and all downloads](#latest-iphone--ipad-version)
- [Choose French or English](#choose-french-or-english)
- [Install and update on Windows](#install-on-windows)
- [Install and update on Android](#install-on-android)
- [First Android launch: name, addons and sync](#first-launch-on-android)
- [Install and update on iPhone/iPad with AltStore](#install-on-iphone-or-ipad)
- [Install and update on Mac](#install-on-mac)
- [Security alerts and troubleshooting](#security-alerts-and-troubleshooting)
- [Apple beta checks and limitations](#apple-beta-checks-and-limitations)

## Latest iPhone / iPad version

**Gabio 0.1.0 — build 3**:
[download the latest universal IPA, Gabio-iOS-0.1.0-unsigned.ipa](https://github.com/GabGaabS/gabio-release/releases/download/apple-v0.1.0/Gabio-iOS-0.1.0-unsigned.ipa).
The same IPA supports both iPhone and iPad, starting with iOS/iPadOS 17.0.

[Add Gabio to AltStore Classic](https://altstore.io/source/raw.githubusercontent.com/GabGaabS/gabio-release/main/altstore/gabio.json?app=io.gabio.apple) ·
[Apple beta release notes](https://github.com/GabGaabS/gabio-release/releases/tag/apple-v0.1.0) ·
[SHA-256 checksums](https://github.com/GabGaabS/gabio-release/releases/download/apple-v0.1.0/SHA256SUMS-Apple.txt)

| Platform | Download | Installation |
| --- | --- | --- |
| Windows | [Latest stable release](https://github.com/GabGaabS/gabio-release/releases/latest): `Gabio-Setup-…exe` | Run the installer. Install updates over your existing app. The installer is currently unsigned. |
| Android | **2.1.0 (code 32)**: [ARM64 APK](https://github.com/GabGaabS/gabio-release/releases/download/android-v2.1.0/Gabio-Android-2.1.0-arm64-v8a.apk) · [Universal APK](https://github.com/GabGaabS/gabio-release/releases/download/android-v2.1.0/Gabio-Android-2.1.0-universal.apk) | Allow installation from your chosen browser, then install over Gabio. The existing signing certificate is retained. |
| iPhone / iPad | [IPA 0.1.0, build 3](https://github.com/GabGaabS/gabio-release/releases/download/apple-v0.1.0/Gabio-iOS-0.1.0-unsigned.ipa) | [AltStore guide](#install-on-iphone-or-ipad); personal signing is required. |
| Apple Silicon Mac | [1.1.0 ARM64 ZIP](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/Gabio-macOS-1.1.0-arm64.zip) | [Mac guide](#install-on-mac), macOS 13 or later. |
| Intel Mac | [1.1.0 Intel/x64 ZIP](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/Gabio-macOS-1.1.0-x64.zip) | [Mac guide](#install-on-mac), macOS 13 or later. |

## Choose French or English

**Windows 4.1.0** supports both languages. Open **Paramètres → Langue de
l’interface → Français / English** and select English. Once changed, the path
is **Settings → Interface language**.

The choice is saved on this device. Your library, history, addons and saved
files are retained. Audio and subtitle languages have separate settings;
catalogue titles, descriptions and track names keep the text provided by
their source.

**Android 2.1.0** also supports both languages. Open **Profil → Langue de
Gabio → Français / English** and select English. The English path is **Profile
→ Gabio language**. The choice is retained after closing and updating the app.

**Mac 1.1.0** supports French / English. Open **Settings → Interface
language** (**Paramètres → Langue de l’interface** with French selected).
The choice is retained after closing and updating. Changing it during playback
preserves the video, position, tracks, volume and calibration.

iPhone/iPad retains its French interface with **0.1.0/build3**. Its next
bilingual major version is being checked. The IPA link above always points
to the latest published version.

<details>
<summary>Gabio Windows 4.0 screenshot: choosing English</summary>

Actual Electron interface from the published build, using a test profile
without personal data. English is saved and retained after restarting.

<img src="assets/install/windows-language-en.png" alt="Gabio Windows settings with English selected" width="800">

</details>

<details>
<summary>Gabio Android 2.0 screenshot: the English profile</summary>

Actual published APK on an isolated emulator with text at 200%. The
default profile shows no personal account or history.

<img src="assets/install/android-language-en.png" alt="Gabio Android profile in English with text at 200 percent" width="360">

</details>

## Install on Windows

### First installation

1. On your Windows PC, open the [latest stable release](https://github.com/GabGaabS/gabio-release/releases/latest).
2. Under **Assets**, download **Gabio-Setup-…exe**. The `.blockmap` and `latest.yml` files belong to the updater; they are not installers.
3. Open the EXE, follow the installer and launch Gabio.

**The Windows installer is currently unsigned**: Gabio does not have a Windows
code-signing certificate. Your browser or Windows may show an unrecognized app,
unknown publisher or “Windows protected your PC” warning. These are possible
signature/reputation warnings, not a guarantee that a file is safe.
[Microsoft explanation](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/smartscreen-reputation).

After checking that the file comes from **GabGaabS/gabio-release** and matches
the checksum in its release notes, **More info → Run anyway** allows that
installation if SmartScreen offers it. This option may be unavailable on a
managed PC or under Smart App Control. Do not assume a malware detection is
just a signing warning; keep the exact message for troubleshooting.

### Update on Windows

Gabio checks its update channel at startup and announces new versions. In the
update window, select **Download**, then **Install and restart**. You can also
open **Settings → Updates → Check for an update**, then **Restart and install**.
With the French interface, the same controls are **Télécharger**, **Installer
et relancer**, and **Paramètres → Mises à jour → Rechercher une mise à jour →
Redémarrer et installer**.

If the built-in updater fails, download the new EXE using the same stable-release
link and install over Gabio. **Do not uninstall Gabio** for a normal update:
your library, history, settings and saved downloads should be kept. The new
installer may show the same signing warnings.

<details>
<summary>Gabio screenshot: Windows updates</summary>

French interface, captured using a test profile without personal data.

<img src="assets/install/windows-updates.png" alt="Gabio Windows update settings" width="800">

</details>

## Install on Android

### First installation

Android **8 or later** is required. Open the
[Android 2.1.0 (code 32) prerelease](https://github.com/GabGaabS/gabio-release/releases/tag/android-v2.1.0) on your phone/tablet.
Direct downloads: [ARM64 APK](https://github.com/GabGaabS/gabio-release/releases/download/android-v2.1.0/Gabio-Android-2.1.0-arm64-v8a.apk) · [Universal APK](https://github.com/GabGaabS/gabio-release/releases/download/android-v2.1.0/Gabio-Android-2.1.0-universal.apk).

1. Download the **ARM64 APK** for most recent phones. If it is incompatible or you are unsure, use the larger **universal APK**. The x86/x64 builds mainly serve emulators.
2. Open the APK from your browser’s downloads or a file manager.
3. If Android asks, open **Settings → Allow from this source** for that browser/file manager, return to the APK and select **Install**. Labels vary between manufacturers. You can revoke this source permission afterwards.
4. Open Gabio from your home screen.

Android may warn about installing an unknown app or offer a Play Protect scan
because the APK comes from outside Google Play. **Gabio’s APK is signed**, using
the historical certificate retained for existing installations. It is not
distributed or validated by Google Play. An Android warning should therefore
not be described as the total absence of a signing certificate.
[Install from another source](https://support.google.com/pixelphone/answer/7391672?hl=en),
[Play Protect warning guidance](https://developers.google.com/android/play-protect/warning-dev-guidance).

If protection blocks installation, keep the exact message and APK filename.
Do not globally disable Play Protect or device security to bypass an unknown
diagnosis.

### First launch on Android

With **Android 2.1.0 (code 32)**, a new installation offers the same initial
steps as PC, once:

1. Choose the **name** shown when you watch with friends, then select **Continue**.
2. Choose addons from **ThePirateBay+**, **OpenSubtitles v2** and **Torrentio**
   with CAM releases excluded. Select **Install selected addons** to confirm
   their addition, or **Continue to my devices** to skip this step. Existing
   addon configurations are kept, including disabled addons.
3. **Sync is optional**. To share your name, library and playback progress,
   select **Sync with my devices**. On your already-configured PC, open
   **Profile and sync → Show code**, then enter that private code only in
   the phone’s Gabio form. Your library is merged; videos stay on each device.
   You can also finish with **Explore Gabio** without pairing.

If the PC has no chain yet, select **Create a private chain** and wait for
sync confirmation before sharing its code. On the phone, a **pending** pairing
means the exchange is not confirmed yet: use **Sync now** and keep the displayed
message if the chain is still missing. Never share this code in a public room.

**Set up later** closes the assistant. It will not appear automatically again,
including after interruption, closing or an update. Updating an installation
you have already used keeps its data and does not open the assistant.
To open it yourself later, use **Profile → Review initial setup**.

<details>
<summary>Android 2.0.2 screenshot: optional device sync</summary>

Actual release APK on an isolated emulator with text at 200%. No personal
name, pairing code or user library is displayed.

<img src="assets/install/android-onboarding-sync-en.png" alt="Gabio Android setup: optional sync with other devices in English" width="360">

</details>

### Update on Android

In Gabio 2.0 with English selected, open **Profile → Updates**, then **View
update** when offered. With the French interface, use **Profil → Mises à jour →
Voir la mise à jour**. Download and open the new APK, then confirm
**Update / Install** over the existing app. Android still requires installation
confirmation; Gabio does not silently install APKs.

<details>
<summary>Gabio screenshot: updates in the Android profile</summary>

French interface on an emulator, using a test profile without personal data.

<img src="assets/install/android-updates.png" alt="Gabio Android profile and update status" width="360">

</details>

Keep the same official channel and do not uninstall Gabio. Its historical
certificate lets normal updates retain your data. For a signature conflict or
“App not installed”, check the APK’s origin and architecture, then report the
message before deleting any data.

## Install on iPhone or iPad

### Receive app updates through AltStore

After setting up AltStore Classic with the steps below, open this README in
Safari on your iPhone/iPad and tap **[Add Gabio to AltStore Classic](https://altstore.io/source/raw.githubusercontent.com/GabGaabS/gabio-release/main/altstore/gabio.json?app=io.gabio.apple)**.
Confirm the source and open Gabio’s listing in **Browse**.

If the link does not open, find **Sources → +** in AltStore (through **Browse**
or the Sources tab, depending on your version), then paste this full address:

```text
https://raw.githubusercontent.com/GabGaabS/gabio-release/main/altstore/gabio.json
```

AltStore can download Gabio and offer new versions under **My Apps → Update**.
AltServer must be reachable to sign and install an update. **Refresh All renews
the signature**; it is different from downloading a new app version. New
versions are detected automatically; silent installation without a computer is
not promised. [Official update behaviour](https://faq.altstore.io/developers/updating-apps).

If Gabio was installed from an IPA, keep the same Apple account and install
over it. Do not uninstall the app to add the source. Adding this source still
needs a device check; manual IPA import remains available.

### 1. Prepare your computer and device

Use **AltStore Classic** with **AltServer**. A free personal Apple account is
enough; no paid Apple developer membership is required for this installation.
The downloaded unsigned IPA must be signed by AltStore before it can launch.

On Windows, install [AltServer](https://altstore.io/), iTunes and iCloud following
the [official Windows setup guide](https://faq.altstore.io/altstore-classic/how-to-install-altstore-windows).
It recommends Apple’s iTunes/iCloud builds and explains a separate option for
Microsoft Store iCloud. Check existing tools before replacing them.

On a Mac used to install the iPhone/iPad app, follow the [official Mac AltServer
guide](https://faq.altstore.io/altstore-classic/how-to-install-altstore-macos).
This is separate from installing Gabio’s desktop Mac app, which does not use AltStore.

Start AltServer, connect your unlocked device by USB and accept **Trust this
computer** on the device. To refresh without a cable later, enable Wi-Fi syncing
for that device in iTunes/Finder.

<details>
<summary>Official screenshot: Wi-Fi syncing in iTunes</summary>

![Wi-Fi syncing option in iTunes, referenced by AltStore](https://2606795771-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAfe8qEztjcTjsjjaMBY2%2Fuploads%2F4dRni50KcazyhrMl8W5B%2F002_sync-iphone-over-wifi-1999751-0242f5c1b2814ecaac3b49815c365c59.webp?alt=media&token=fffc8731-7b18-41d0-8ec5-1bacb54964d7)

</details>

### 2. Install AltStore Classic

From AltServer’s tray/menu-bar icon, choose **Install AltStore → your device**.
Enter your Apple account directly in AltServer.

On the iPhone/iPad, trust the personal profile under **Settings → General →
VPN & Device Management**. Enable **Settings → Privacy & Security → Developer
Mode**, then confirm the required restart. Labels vary with iOS/iPadOS.
[Official procedure](https://faq.altstore.io/altstore-classic/how-to-install-altstore-windows).

<details>
<summary>Official screenshot: where to find Developer Mode</summary>

![Developer Mode under Privacy & Security, 9to5Mac image referenced by AltStore](https://2606795771-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAfe8qEztjcTjsjjaMBY2%2Fuploads%2FWSvXhUTj8UZyGd1ex652%2FFcejvMRXgAE8k3R.jpg?alt=media&token=5e380cd0-be4e-406a-914b-8fa0519e1196)

Credit: 9to5Mac, via AltStore’s documentation.

</details>

### 3. Install Gabio manually if needed

In Safari on your device, download [**Gabio-iOS-0.1.0-unsigned.ipa**](https://github.com/GabGaabS/gabio-release/releases/download/apple-v0.1.0/Gabio-iOS-0.1.0-unsigned.ipa) and keep it in
Files. In **AltStore Classic → My Apps → +**, select that IPA. AltServer must
remain reachable over USB or the same Wi-Fi network. Launch Gabio after signing
and installation. The Mac ZIP files cannot be installed on an iPhone/iPad.

If you downloaded the IPA on Windows, hold **Shift** while clicking AltServer’s
tray icon and choose **Sideload .ipa…**, then your device and the Gabio IPA.
Enter your account directly in AltServer if asked.
[AltServer release notes](https://faq.altstore.io/release-notes/altserver).

<details>
<summary>Official screenshot: + and Refresh All in My Apps</summary>

![My Apps in AltStore, with + and Refresh All](https://2606795771-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAfe8qEztjcTjsjjaMBY2%2Fuploads%2FjOsIEAup3VgdtS16v6bb%2FIMG_3952.jpeg?alt=media&token=e2f71fab-9603-452b-a4b1-249b0539e7da)

Image from the [AltStore documentation](https://faq.altstore.io/altstore-classic/your-altstore).
The pictured apps are official examples; Gabio will appear in your list.

</details>

### 4. Renew the signature and update Gabio

With a free account, apps expire after **seven days** and AltStore occupies one
of the **three active-app slots**. Keep AltServer running and use **My Apps →
Refresh All** before expiry. Automatic renewal depends on the computer and
network being available. [Limits and renewal](https://faq.altstore.io/altstore-classic/your-altstore).

For a new Gabio version, use **Update** from the source or import the new IPA
with **the same Apple account** over the existing app. Do not uninstall Gabio to
renew its signature. If AltStore expires, AltServer can reinstall it over the
existing installation. [AltServer explanation](https://faq.altstore.io/altstore-classic/altserver).

For **Could not find AltServer**, check the computer is awake, AltServer is
running and USB/Wi-Fi is connected. [Troubleshooting](https://faq.altstore.io/altstore-classic/troubleshooting-guide).

These official screenshots show older interfaces and are reference points.
Installing and updating Gabio through AltStore has been confirmed on the test
iPad; the iPhone procedure still needs a physical check. Never send your Apple
credentials through GitHub, Gabio or chat.

### Background transfers

On iOS/iPadOS 26+, Gabio can request continued active transfers with visible
progress and cancellation that preserves downloaded files. This option remains
under validation; iOS may refuse or interrupt it. Keep Gabio open if unavailable.

AltStore can change the app’s identifier during signing. Background-task
identifiers may need a local IPA preparation matching **the already-installed
Gabio app**. That preparation changes only the task manifest, not application
code. A prepared build3 update was checked and installed successfully; long
transfers remain untested. This preparation is optional for playback and
downloads while keeping the app open. Keep the existing installation and account.

## Install on Mac

**Gabio Mac 1.1.0 — prerelease**: [release notes](https://github.com/GabGaabS/gabio-release/releases/tag/macos-v1.1.0) ·
[SHA-256 checksums for both ZIP files](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/SHA256SUMS-macOS.txt).
This Mac release is separate; the latest IPA remains 0.1.0/build3.

Check the ZIP filename and SHA-256 checksum before opening it:

| File | SHA-256 |
| --- | --- |
| `Gabio-macOS-1.1.0-arm64.zip` | `19024878534a3915f5aa89d68634a81d6f9b674cb0f5e90f07f950802963dd62` |
| `Gabio-macOS-1.1.0-x64.zip` | `1be8bc36f4b9f2bc0c5d098f84560c736534abbf0fd3c3a3e8086d19a4e9a626` |


### 1. Choose your download

Open **Apple menu  → About This Mac**:

- **Apple chip M1, M2, M3, M4…**: [Gabio 1.1.0 Apple Silicon / ARM64](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/Gabio-macOS-1.1.0-arm64.zip).
- **Intel processor**: [Gabio 1.1.0 Intel / x64](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/Gabio-macOS-1.1.0-x64.zip).

macOS **13 or later** is required. Mac ZIP files contain the desktop application;
the IPA belongs to iPhone/iPad. Installing the Mac desktop app does not require
AltStore or an Apple account.

### 2. Install and open Gabio

1. Download the ZIP for your architecture.
2. Double-click the ZIP in **Finder → Downloads** to extract it.
3. Move **Gabio.app** to **Applications**, then open it there.
4. Confirm the first-launch prompt if macOS asks.

Gabio currently uses an **ad hoc signature**, without an Apple Developer ID or
notarization. If macOS blocks it as an unidentified developer, after attempting
to open it, go to **System Settings → Privacy & Security → Open Anyway**, then
confirm **Open**. This exception applies to that app.
[Official Apple procedure](https://support.apple.com/en-us/102445).

<details>
<summary>Official Apple screenshot: allow first launch</summary>

![Réglages Système et bouton Ouvrir quand même, capture Apple](https://cdsassets.apple.com/live/7WUAS350/images/macos/sequoia/locale/fr-fr/macos-sequoia-system-settings-privacy-and-security-open-app-anyway.png)

The reference screenshot uses French; **Ouvrir quand même** means **Open Anyway**.

</details>

For a damaged archive/app message, download the ZIP again and compare it with
[SHA256SUMS-macOS.txt](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/SHA256SUMS-macOS.txt). Keep the exact message if it persists; do
not disable macOS security globally.

### 3. Update on Mac

Mac updates are **manual** in this beta. Return to this README, download the new
ZIP for your architecture, quit Gabio, extract it and replace only **Gabio.app**
in Applications. Keep your Gabio data and saved files; deleting them is not
necessary.

The built-in update check still reads the shared Apple channel, which retains
the iOS 0.1.0/build3 reference. This channel does not announce the separate
Mac 1.1.0 prerelease; use this README’s Mac links to get it.

### 4. Start using Gabio

Open **Addons** directly in the sidebar to configure your sources, then choose
a title/version in **Découvrir** (Discover) or **Recherche** (Search). Rooms and
the remote require Internet; each
device plays its own video. Saved files can be played offline. Grant local
network permission when using a local-network feature offered by Gabio.

### 5. Use installed addons on Mac

In **Addons**, open the provider’s configuration when required, then confirm
adding its configured manifest. In **Discover → Your addon catalogs**,
choose its catalog, complete the required fields and click **Show catalog**.
**Show more** loads the next page when the provider offers several pages.

Mac 1.1.0 handles compatible movie, series and anime catalogs, their filters and
searches, metadata and episodes using the addon’s own identifiers, and the
streams and subtitles it supplies. Tracks embedded in the file remain available
in the player. When an addon returns an external playback website, Gabio offers
to open that website.

Titles with an addon-specific identity remain available for solo playback;
their local progress is not shared through Sync. Some HLS/DASH sources requiring
headers on their segments are explicitly refused: choose another source instead.

Legacy JSON-RPC transports cannot be installed. An unavailable or misconfigured
addon, or one returning an unsupported format, can still fail: adding it does
not guarantee every feature of its service. Provider errors remain visible;
not every addon in the shop has been validated with real playback. DRM services,
specific video platforms and special formats do not become supported merely by
adding an addon.

<details>
<summary>Gabio screenshot: settings on Mac</summary>

Gabio 0.1.0, French interface on the Mac used to build and test the app.

<img src="assets/install/mac-settings.png" alt="Gabio Mac settings and subtitle appearance" width="800">

</details>

## Security alerts and troubleshooting

| Platform | Possible alert and reason | What to check |
| --- | --- | --- |
| Windows | Unknown publisher / SmartScreen reputation: no Windows signing certificate. | Official origin and checksum; allow this file only if that option is offered. |
| Android | Unknown source / Play Protect scan: installed outside Google Play, with the historical certificate still present. | APK architecture, version and origin; permission for your chosen browser. |
| iPhone/iPad | Untrusted personal profile, Developer Mode disabled, missing AltServer or expired signature. | Profile, Developer Mode, AltServer connection and **Refresh All** within seven days. |
| Mac | Unidentified developer: ad hoc signature, no Developer ID/notarization. | Correct ZIP architecture and checksum, then the local **Open Anyway** exception. |

For persistent issues, use **Signaler un problème** (Report a problem) in Gabio
or open an **Issue** in this repository. Include your operating system, app
version, filename and exact message. Review diagnostics before sharing them;
do not include Apple credentials, Sync codes or private addon URLs. An explicit
malware or modified-file detection needs a separate examination from a simple
reputation warning.

## Apple beta checks and limitations

The guide is available in French and English. Windows 4.1.0, Android 2.1.0 and
Mac 1.1.0 support the French / English choice. The latest published IPA remains
iOS 0.1.0/build3 in French; iOS 1.1.0/build7 is being prepared and checked, and is not yet published.

For iOS 0.1.0/build3, the test iPad passed update, design, film/episode playback
and resume, integrated subtitles, controls hiding, library management, rooms,
remote and Sync checks. Its fifteen scenarios pass on each simulator family.
These historical results do not qualify the iOS 1.0.1/build6 candidate.

Mac 1.1.0 passes native checks on two macOS 15.7.9 hosts, Apple Silicon and
Intel: playback, menus, offline playback, full screen, minimize/restore, PiP and
returning to the player after using another app. These journeys preserve the
position and tracks using a test profile and synthetic videos. They do not
validate macOS 13 or a user’s Mac. Gatekeeper when opening the downloaded ZIP on
a user’s Mac remains to be checked; TV, HDR/multichannel audio and long transfers
retain their hardware-validation limits.

Limits are described in the [Mac 1.1.0 notes](https://github.com/GabGaabS/gabio-release/releases/tag/macos-v1.1.0) and
[iOS 0.1.0 notes](https://github.com/GabGaabS/gabio-release/releases/tag/apple-v0.1.0). Native-library licences
accompany the apps.

Download from this public repository and check the
[Mac 1.1.0 SHA-256 checksums](https://github.com/GabGaabS/gabio-release/releases/download/macos-v1.1.0/SHA256SUMS-macOS.txt) or the
[iOS 0.1.0 SHA-256 checksums](https://github.com/GabGaabS/gabio-release/releases/download/apple-v0.1.0/SHA256SUMS-Apple.txt).
Windows and Android channels, the shared Apple channel and the AltStore source
are preserved during this separate Mac publication. This public repository
contains binaries, guides and download metadata, not application sources,
user data or user diagnostic logs.
