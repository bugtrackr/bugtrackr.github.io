---
title: Bumpy Booby API
subtitle: default
project: API

layout: default
# rightsidebar: 1

permalink: /api/bumpybooby-api/index.html
gh-file: /api/bumpybooby-api.md
---
The API has different modes. This is the default mode.

API can be tested with [Mac App Paw](https://paw.cloud) and *api.paw* file.

## Request

Send a HTTP POST request with content type `application/x-www-form-urlencoded`. To this URL:

```
https://example.com/index.php?project=PROJECTNAME&page=api
```

Replace `PROJECTNAME` with the project you want to use. This is required even if you only have the default project.

## Authentication

Open/Create `database/api_config.php` file (see `api_config.example.php` for an example) and add the following to the `$API_ACCESS` array:

```
    "API_USERNAME_1" => array(
    	"mode" => "default", // XMODE default
    	"key" => "cfcd208495d565ef66e7dff9f98764da", // md5 hash
    	"projects" => "ALL_PROJECTS", // comma seperated list of projects or "ALL_PROJECTS"
    	"permissions" => "ALL_PERMISSIONS", // single permission or "ALL_PERMISSIONS"
    ),

```

Replace the **key** with an md5 hash of your API key. You can generate one by opening `/classes/api/keygen.php` in your browser.

You can specify the **projects** that can be used by this user. Just make a comma seperated list (without spaces) like: `default,project-1,other-project`. Or use "ALL_PROJECTS".

You can specify the **permissions** of this user like: `new_issue`, `edit_issue`, `update_issue`, `delete_issue`, etc. OR use `ALL_PERMISSIONS`.

Pass `api_username` with the username you created in the config file and `api_password` parameter with the user's key (not the hash which is stored in config file) as HTTP POST data.


## POST parameters

The following parameters can be passed to the API with the HTTP POST request:

 * `api_username` (required)
 * `api_password` (required)
 * `action` (required): Set this to either to: `new_issue` (to create a new issue), `edit_issue` (to edit text and title of an issue), `update_issue` (to update issue details), `delete_issue` (to delete a issue), `exists` (to check if issue with given id exists), `count_issues` (to get the number of issues).
 * For action = `new_issue`:
 	* `issue_summary` (required): Set the title/summary of the issue.
 	* `issue_text` (required): Issue content.
 	* `issue_status`: Status of the issue. Default is the `default` status.
 	* `issue_assignedto`
 	* `issue_dependencies`: List of related issues. Format example `#1, #3, #8`.
 	* `issue_labels`: List of labels. Format example `urgent, private`.
 * For action = `edit_issue`:
 	* `issue_id` (required): id of the issue.
 	* `issue_summary` (required): Set the title/summary of the issue.
 	* `issue_text` (required): Issue content.
 * For action = `update_issue`:
 	* `issue_id` (required): id of the issue.
 	* `issue_status` (required): New status of the issue (status ID from settings page).
 	* `issue_open`: `open` or `closed`.
 	* `issue_assignedto`
 	* `issue_dependencies`: List of related issues. Format example `#1, #3, #8`.
 	* `issue_labels`: List of labels. Format example `urgent, private`.
 * For action = `delete_issue`:
 	* `issue_id` (required): id of the issue that should be deleted. For example: `5`.
 * For action = `exists`:
 	* `issue_id` (required)
 * For action = `count_issues`:
 	* `open`: Filter by issue states (open/closed/all). Default is open.
 	* `label`: Filter by issue labels.

## Response

The API returns a JSON formatted response.

 * `status`: Value is 1 for success and 0 if an error occurred.
 * `statusDetails`: A description of the error or a success message.
 * `ID`: The ID of the issue. This is only returned if the request was successful.

Example of an successful request response:

```
{
  "status":1,
  "statusDetails":"Bumpy Booby returned: 1",
  "ID":25
}
```
