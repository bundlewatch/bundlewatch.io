# BundleWatch
[![npm][npm]][npm-url]
[![bundlewatch][bundlewatch]][bundlewatch-url]
[![node][node]][node-url]


## Overview:
BundleWatch checks file sizes, ensuring bundled browser assets don't jump in file size.

BundleWatch checks for sharp increases in files sizes and can signal when something is wrong, for example:
- Adding a package that bloats the slug
- Wrong imports
- Forgetting to minify

Run `bundlewatch` in CI after you finish building your production assets.
BundleWatch will keep track of these files and alert you when they go over max size.
BundleWatch will update its status on your GitHub pull request, blocking builds that fail checks.

## Installation
### NPM:
```
npm install bundlewatch --save-dev
```

### Yarn:
```
yarn add bundlewatch --dev
```

Now you're ready to use bundlewatch [check out using BundleWatch](getting-started/using-bundlewatch.md)


[npm]: https://img.shields.io/npm/v/bundlewatch.svg
[npm-url]: https://npmjs.com/package/bundlewatch

[node]: https://img.shields.io/node/v/bundlewatch.svg
[node-url]: https://nodejs.org

[bundlewatch]: https://img.shields.io/badge/bundle-watched-blue.svg
[bundlewatch-url]: http://bundlewatch.io
