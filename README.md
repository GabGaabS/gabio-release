# Gabio — canal de mises à jour

Ce dépôt public distribue les binaires Windows et Android de Gabio. Le code
source de l’application reste dans un dépôt privé. L’installateur Windows est
actuellement non signé ; les APK Android conservent leur certificat historique.

Les fichiers utiles se trouvent dans l’onglet **Releases** :

- `Gabio-Setup-x.y.z.exe` : installateur Windows ;
- les APK Android : versions mobiles en préversion.

Gabio vérifie automatiquement la dernière release, mais demande toujours confirmation avant le téléchargement et avant l’installation.

## Vérification

Chaque release doit inclure les empreintes SHA-256 de ses fichiers dans ses notes. Ne téléchargez Gabio que depuis les releases de ce dépôt.

## Publication

Ce dépôt ne reçoit pas les sources applicatives ni les fichiers utilisateur.
Une orchestration Apple manuelle utilise un runner macOS standard, avec accès
en lecture seule à un commit privé contrôlé. Les sorties de compilation restent
hors des journaux publics et les diagnostics sont chiffrés pour une clé locale.
Ses résultats restent dans un brouillon interne non publié ; ils ne constituent
pas une release Apple ni une validation sur appareil. Les canaux Windows et
Android restent indépendants.
