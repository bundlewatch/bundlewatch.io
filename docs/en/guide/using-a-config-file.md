---
title: Using a Config File
description: How to configure Bundlewatch using a config file or package.json.
---

# Using a Configuration File

The [Bundlewatch CLI](../reference/cli.md) can read configuration from a `.json`, `.js`, or your `package.json` file.

- To use a custom config file, specify it on the command line:
  ```bash
  bundlewatch --config .bundlewatch.config.js
  ```
- If you omit the `--config` flag, Bundlewatch will look for a `bundlewatch` key in your `package.json`.

Example `package.json` configuration:

```json
{
  "name": "my package name",
  "version": "0.0.1",
  "bundlewatch": {
    "files": [
      {
        "path": "myfolder/*.js",
        "maxSize": "100kB"
      }
    ]
  }
}
```

You can also supply the config directly to the [Node.js API](../reference/nodejs.md).
