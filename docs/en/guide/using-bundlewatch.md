---
title: Using Bundlewatch
description: How to run Bundlewatch, set up CI integration, and view results.
---

# Basic Usage

Run Bundlewatch on your built assets to check their sizes:

```bash
yarn run bundlewatch --max-size 100kb ./webpack-build/*.js
```

Example output:

```
Result breakdown at: https://ja2r7.app.goo.gl/aDzEQjBVMXxrCgaa7

PASS ./webpack-build/app.js: 30.71KB < 100KB (gzip)
FAIL ./webpack-build/vendor.js: 198.6KB > 100KB (gzip)

BundleWatch FAIL
```

This command gives you immediate feedback in your terminal. To enable build status reporting on your GitHub pull requests, follow the steps below.

## Adding Build Status to GitHub PRs

Bundlewatch can report its status directly on your GitHub Pull Requests.

<div align="center">
    <img alt="build status preview" data-zoomable src="/build-status-preview.png" width="700px">
</div>

## Setting Up CI Authentication

You need to provide a `BUNDLEWATCH_GITHUB_TOKEN` so Bundlewatch can update your PR status. Get your token at:

https://service.bundlewatch.io/setup-github

Set this token as an environment variable in your CI environment.

## Required CI Environment Variables

Bundlewatch needs the following environment variables in CI:

- `CI_REPO_OWNER` (e.g. `facebook` in github.com/facebook/react)
- `CI_REPO_NAME` (e.g. `react` in github.com/facebook/react)
- `CI_COMMIT_SHA`
- `CI_BRANCH`

::: info
If you're using Travis, CircleCI, Wrecker, or Drone, these variables are usually set automatically.
See [getCIVars.js](https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js) for details.
:::

## Viewing the Results Breakdown

After setup, Bundlewatch will post build status on your PRs. Clicking the _details_ link shows a breakdown of your results.

<div align="center">
    <img alt="build results preview" data-zoomable src="/build-results-preview.png" width="700px">
</div>

---

- [Configuring Bundlewatch](./using-a-config-file.md)
- [Diffing Against Other Branches](./diffing-against-branches-other-than-master.md)
- [Configuration Reference](../reference/configuration.md)
