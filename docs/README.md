# bundlewatch
[![npm][npm]][npm-url]
[![bundlewatch][bundlewatch]][bundlewatch-url]
[![node][node]][node-url]


## Overview:
bundlewatch is a file size checker. Its main purpose is to ensure bundled browser assets don't jump in file size.

Sharp increases in bundlewatch can signal something is wrong, for example:
- added a package that bloated the slug
- wrong import
- forgot to minify

Run `bundlewatch` in CI after you have finished building your production assets.
bundlewatch will keep track of these files and alert you when they go over max size, etc.
bundlewatch will update status on your GitHub pull request, blocking builds that fail checks.


## Installation
- NPM: `npm install bundlewatch --save-dev`
- Yarn: `yarn add bundlewatch --dev`


## Basic Usage
```bash
$yarn run bundlewatch --max-size 100kb ./webpack-build/*.js

Result breakdown at: https://ja2r7.app.goo.gl/aDzEQjBVMXxrCgaa7

PASS ./webpack-build/app.js: 30.71KB < 100KB (gzip)
FAIL ./webpack-build/vendor.js: 198.6KB > 100KB (gzip)

bundlewatch FAIL
```
Above bundlewatch is just running the files through a maxSize check, this is the most basic usage of bundlewatch.


?> bundlewatch can do alot more than this, [check out the-best-parts of bundlewatch](getting-started/the-best-parts.md?id=the-best-parts)


[npm]: https://img.shields.io/npm/v/@bundlewatch/bundlewatch.svg
[npm-url]: https://npmjs.com/package/@bundlewatch/bundlewatch

[node]: https://img.shields.io/node/v/@bundlewatch/bundlewatch.svg
[node-url]: https://nodejs.org

[bundlewatch]: https://img.shields.io/badge/bundlewatch-checked-green.svg
[bundlewatch-url]: http://bundlewatch.io
