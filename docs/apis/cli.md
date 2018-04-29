## Command Line Params

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
