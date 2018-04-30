# Command Line

```bash
$yarn add @bundlesize/bundlesize --dev
$yarn bundlesize --help

  Usage: bundlesize [options] <filePathGlobs ...>

  Options:

    --config [configFilePath]    file to read configuration from, if used all options are blown away
    --max-size [maxSize]         maximum size threshold (e.g. 3kb)
    --compression [compression]  specify which compression algorithm to use
    -h, --help                   output usage information

  Examples:

   Read configuration from package.json
     $ bundlesize

   Read configuration from file
     $ bundlesize --config internals/bundlesize.config.js

   Use command line
     $ bundlesize --max-size 100KB ./src/*.js /lib/*.js
```

## Configuring BundleSize
The bundlesize CLI can read [configuration](configuration/configuration.md) from `.json`, `.js`, or your package.json file.
To use `.json` or `.js`, supply the name on the command line `bundlesize --config .bundlesize.config.js`.

Otherwise, omit this to have it look for the `bundlesize` key in the `package.json`, e.g.

```json
{
	"name": "my package name",
	"version": "0.0.1",
	"bundlesize" : {
	    "files": [
	        {
	            "path": "myfolder/*.js",
	            "maxSize": "100kB"
	        }
        ]
	}
}
```
