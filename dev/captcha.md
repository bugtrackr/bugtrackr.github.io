---
title: Securimage
subtitle: Captcha
project: dev

layout: default
# rightsidebar: 1

permalink: /dev/captcha/index.html
gh-file: /dev/captcha.md
---
## Install

The package `dapphp/securimage` is installed via composer.

## Customization

The path for the config file has to be adapted. The config file is now located in `./database` directory.

Change path in `securimage.php` line 984 +/- to  `dirname(__FILE__) . '/../../../database/config_captcha.php'` .
