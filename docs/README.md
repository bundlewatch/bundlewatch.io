# bundlesize
[![npm][npm]][npm-url]
[![bundlesize][bundlesize]][bundlesize-url]
[![node][node]][node-url]


## Overview:
bundlesize is a file size checker. Its main purpose is to ensure bundled browser assets don't jump in file size.

Sharp increases in bundlesize can signal something is wrong, for example:
- added a package that bloated the slug
- wrong import
- forgot to minify

Run `bundlesize` in CI after you have finished building your production assets.
Bundlesize will keep track of these files and alert you when they go over max size, etc.
Bundlesize will update status on your GitHub pull request, blocking builds that fail checks.


## Installation
- NPM: `npm install @bundlesize/bundlesize --save-dev`
- Yarn: `yarn add @bundlesize/bundlesize --dev`


## Basic Usage
```bash
$yarn run bundlesize --max-size 100kb ./webpack-build/*.js

[WARNING] Some CI configuration options were not found (repoOwner, repoName, commitSha):
    bundlesize will be unable to report build status, or save comparison data
    Learn more at: http://bundlesize.io/#/getting-started/the-best-parts

Result breakdown at: https://ja2r7.app.goo.gl/aDzEQjBVMXxrCgaa7

PASS ./webpack-build/app.js: 30.71KB < 100KB (gzip)
FAIL ./webpack-build/vendor.js: 198.6KB > 100KB (gzip)

bundlesize FAIL
maxSize check failed
```
Above bundlesize is just running the files through a maxSize check, this is the most basic usage of bundlesize.

Bundlesize can do alot more than this, [check out the-best-parts of bundlesize](getting-started/the-best-parts.md).



[npm]: https://img.shields.io/npm/v/@bundlesize/bundlesize.svg
[npm-url]: https://npmjs.com/package/@bundlesize/bundlesize

[node]: https://img.shields.io/node/v/@bundlesize/bundlesize.svg
[node-url]: https://nodejs.org

[bundlesize]: https://img.shields.io/badge/bundlesize-checked-green.svg
[bundlesize-url]: http://bundlesize.io
