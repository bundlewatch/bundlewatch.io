---
title: Diffing Against Branches Other Than Master
description: How to configure Bundlewatch to diff against branches like develop or staging.
---

# Diffing Against Branches Other Than Master

By default, after following the [Using Bundlewatch](./using-bundlewatch.md) guide, Bundlewatch will diff your bundles against the `master` branch.

If you want to diff against another branch (e.g. `develop`), set the following CI environment variable:

- `CI_BRANCH_BASE`

If you're using Travis or Drone, this is usually set automatically.

::: info Info
See which CI variables are automatically detected in the [getCIVars.js source code](https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js).
:::

To diff against multiple branches (e.g. `develop`, `staging`), add the `trackBranches` option to your Bundlewatch config in `package.json`:

```json
{
  "bundlewatch": {
    "files": [
      {
        "path": "myfolder/*.js",
        "maxSize": "100kB"
      }
    ],
    "ci": {
      "trackBranches": ["master", "develop", "staging"]
    }
  }
}
```

For more configuration options, see the [Configuration Reference](../reference/configuration.md).
