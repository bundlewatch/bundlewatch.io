# Using a configuration file

The [bundlewatch CLI](/reference/cli.md) can read configuration from `.json`, `.js`, or your package.json file.
To use `.json` or `.js`, supply the name on the command line `bundlewatch --config .bundlewatch.config.js`.

Otherwise, omit this to have it look for the `bundlewatch` key in the `package.json`, e.g.

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

Alternatively supply the config directly to the [Node JS API](/reference/nodejs.md)
