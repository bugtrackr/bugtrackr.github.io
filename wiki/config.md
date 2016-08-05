---
title: Configuration
subtitle: 
project: wiki

layout: default
# rightsidebar: 1

permalink: /wiki/config/index.html
gh-file: /wiki/config.md
---
## API config

To [configure the API]({{site.url}}/api/) you have to enable it on the settings page and then change the access settings manually in `./database/config_api.php`. There is a sample configuration file `./sample_config/config_api.php`.

## Captcha config

You can also edit the Captcha which is displayed when a user who is not logged in wants to create a new issue. you can do this with `./database/config_captcha.php` file. There is a sample configuration file `./sample_config/config_captcha.php`. Refer [to this website](https://www.phpcaptcha.org/documentation/customizing-securimage/) for more information about changing the captcha.

## Bumpy Booby config

You can do all changes by opening `./index.php?page=settings` in your browser. The configuration is stored in `./database/config.php` (encrypted).

### Global settings

#### General settings

 * __Name__ that will be displayed on the header of each page
 * __Url__ of your installation
 * __Url rewriting__: Leave this field empty to disable url rewriting (URLs with GET parameters (questionmark and ampersands in URL)). Otherwise, it should contain the path to Bumpy Booby folder (started and ended with a "/"), relative to the domain name.
 * __CDN Url__: Leave this field empty to disable CDN (= Content Delivery Network) option. You can use a CDN to deliver CSS, JavaScript and Images from a faster server. To enable, put the URL of your CDN here. You can use `https://cdn.rawgit.com/Spamty/Bumpy-Booby/master/`. Make sure to host all files from `./public` folder on your CDN.
 * __Introduction__: It will be displayed on the home page. It will be parsed with the Markdown syntax. Note: if there is only one project named “default”, the home page is automatically redirected to the project dashboard, and this text will not be displayed.
 * __Email__ of admin. Leave this field empty to disable email notifications. Otherwise, this address will be used as sender when sending an email notification.
 * __Link to external contact page__: Enter a URL of an website with contact options. This link will be displayed in the sidebar. Leave it empty to disable.
 * __Link to legal notice__: Same as the contact page but for a legal notice to comply with teleservices act (especially for Germany).
 * __Link to privacy policy__: Link to site with your privacy policy.
 * __Language__: Choose the language of the bug tracker.
 * __Logs__: Enable logging. You can find the logs in `./database/logs.txt`.

#### Projects

You can add projects and reorder them.

#### Uploads

 * __Maximum size per upload__ Each uploaded file can't exceed this size.
 * __Allocated space per user__ A user can't upload other files once he reached this limit. This limit does not apply to none logged users if they are allowed to upload files.

### Appearance

#### Manage display

#### Manage colors

### Issues

#### Manage statuses

#### Manage labels

### Groups

#### Manage groups

#### Manage permissions

### Users

#### Manage users

### API

#### API