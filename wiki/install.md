---
title: Install
subtitle: 
project: wiki

layout: default
# rightsidebar: 1

permalink: /wiki/install/index.html
gh-file: /wiki/install.md
---
1. Download the [latest release](https://github.com/bugtrackr/Nireus/releases/latest) 
2. Upload all files to your webserver
3. The folder `./database` has to be writable for apache: `chmod -R 777 database`.
4. You can (but you do not have to) delete all files that are listed in `./DELETE_LIST.txt`, they are useless.
5. Open `./index.php` in your browser
6. [Configure Nireus]({{site.url}}/wiki/config/) and enjoy!

## master branch

You can also clone from [master branch](https://github.com/bugtrackr/Nireus/tree/master). 
This branch should be stable but this cannot be guaranteed. So it is recommended to use the [latest release](https://github.com/bugtrackr/Nireus/releases).