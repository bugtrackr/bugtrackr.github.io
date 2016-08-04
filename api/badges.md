---
title: Badges
subtitle: 
project: API

layout: default
# rightsidebar: 1

permalink: /api/badges/index.html
gh-file: /api/badges.md
---
You can use the API to get a badge for your GitHub README file. The badge displays the number of issues.

## URL

```
https://example.com/index.php?page=api&project=PROJECTNAME&XMODE=badge
```

Replace `PROJECTNAME` with the project you want to use. You can choose the badge-mode by setting the the GET parameter `XMODE` of your request to `badge`.

## Authorization

Authorization is done with GET parameters called `api_username`.
Open `database/api_config.php` and add the following to the `$API_ACCESS` array:

```
    "badge-USERNAME" => array(
    	"mode" => "badge", // XMODE badge
    	"projects" => "PROJECTNAME", // comma seperated list of projects or "ALL_PROJECTS"
    ),

```

You can specify the **projects** that can be used by this user. Like: `default,project-1,other-project`. Or use "ALL_PROJECTS".

Pass `api_username` parameter with the username you created in the config file (without the *badge-* prefix) as HTTP GET parameters.

## Image

When opening the URL you will be redirected to a badge image powered by Shields.io. For example:

```
https://img.shields.io/badge/issues-36-red.png
``` 

## Customization

You can customize the image with these optional GET parameters (see also <http://shields.io/#your-badge>):
 * `shields_color`: Badge color. `blue`, `ff69b4`, ... Default is `red`.
 * `shields_format`: Image format (png/svg/...)
 * `shields_label`: Override the default left-hand-side text
 * `shields_style`: Badge style (plastic/flat/flat-square/social)

You can also filter the issues that are displayed with these parameters:
 * `open`: Filter by issue states (open/closed/all). Default is open.
 * `label`: Filter by issue labels.
