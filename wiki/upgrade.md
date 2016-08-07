---
title: Upgrade
subtitle: 
project: wiki

layout: default
# rightsidebar: 1

permalink: /wiki/upgrade/index.html
gh-file: /wiki/upgrade.md
---
## Backup

Before any update, it is highly recommended to make a backup. You only need to save the `./database/` folder.

## Upgrade

1. Download the [latest release](https://github.com/bugtrackr/bumpy-booby/releases/latest).
2. Delete all files from your webserver - except the `./database/` directory.
3. Upload all new files to your webserver - but do not overwrite the `./database/` directory.
4. Open `./index.php` in your browser and the upgrade should begin automatically.
