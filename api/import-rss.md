---
title: Import RSS Feeds
subtitle: 
project: API

layout: default
# rightsidebar: 1

permalink: /api/rss/index.html
gh-file: /api/import-rss.md
---
The API can import RSS feeds from GitHub and from other Bumpy-Booby instances.

## Configuration

Open/Create `database/api_config.php` file (see `api_config.example.php` for an example) and add the following to the `$RSS` array:

### GitHub RSS

```
    array(
    	"name" => "github-SOME_NAME",
    	"title_prefix" => "Will be added to issue title",
    	"url" => "https://github.com/USERNAME/REPOSITORY/releases.atom",
    	"project" => "default",
    ),

```

You can find the feed URL to your subscribed repositories on your GitHub dashboard where it says *Subscribe to your news feed*.
For new releases the URL is `https://github.com/USERNAME/REPOSITORY/releases.atom` for commits it is `https://github.com/USERNAME/REPOSITORY/commits/master.atom`.

`name` has to begin with `github-`.

### Sourceforge RSS

Similar to GitHub RSS but `name` has to begin with `sourceforge-`.

### Bumpy-Booby RSS

```
    array(
    	"name" => "bumpybooby-SOME_NAME",
    	"title_prefix" => "Prefix this to issue title",
    	"url" => "http://example.com/default/rss",
    	"project" => "2nd-Project",
    ),

```

`name` has to begin with `bumpybooby-`.

## Start Import

Call this URL in your Browser or with cronjob:

```
https://example.com/index.php?page=api&XMODE=rss
```

