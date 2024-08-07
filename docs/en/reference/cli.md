# Command Line

```bash
$yarn add bundlewatch --dev
$yarn bundlewatch --help

  Usage: bundlewatch [options] <filePathGlobs ...>

  Options:

    --config [configFilePath]    file to read configuration from, if used all options are blown away
    --max-size [maxSize]         maximum size threshold (e.g. 3kb)
    --compression [compression]  specify which compression algorithm to use
    -h, --help                   output usage information

  Examples:

   Read configuration from package.json
     $ bundlewatch

   Read configuration from file
     $ bundlewatch --config internals/bundlewatch.config.js

   Use command line
     $ bundlewatch --max-size 100KB ./src/*.js /lib/*.js
```
