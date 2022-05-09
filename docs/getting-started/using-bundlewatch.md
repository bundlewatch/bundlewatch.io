# Basic Usage
```bash
$yarn run bundlewatch --max-size 100kb ./webpack-build/*.js

Result breakdown at: https://ja2r7.app.goo.gl/aDzEQjBVMXxrCgaa7

PASS ./webpack-build/app.js: 30.71KB < 100KB (gzip)
FAIL ./webpack-build/vendor.js: 198.6KB > 100KB (gzip)

BundleWatch FAIL
```
You can run this to get command line output.
If you want BundleWatch to report build status on your pull requests, see below on running it in your CI.

## Adding Build Status:
BundleWatch can report its status on your GitHub Pull Requests.

<div align="center">
    <img alt="build status preview" src="https://raw.githubusercontent.com/bundlewatch/bundlewatch.io/master/docs/_assets/build-status-preview.png" width="700px">
</div>

For this to work you will need:
1. An npm script to run `bundlewatch`
2. [Optional] a Bundlewatch configuration in place (you can skip this if you supply the configuration directly in your npm script)
3. Correct CI env variables (see below)
4. Adding a build step that runs that npm script to your CI pipeline

### Example: `package.json` with configuration and a script
```javascript
{
    "name": "my-web-app",
    "scripts": {
        ...
        "bundlewatch": "bundlewatch",
        ...
    },
    "bundlewatch": {
        "files": [
            {
                "path": "dist/*.js",
                "maxSize": "100kB"
            }
        ]
    },
    "devDependencies": {
        ...
        "bundlewatch": "0.3.3",
        ...
    },
}

```

### Example: CI flow that includes a bundlewatch step (this is for CircleCI but they are all very similar)
```yaml
jobs:
  build-and-test:
    steps:
      - run:
            name: Verify bundle size
            command: |
              npm run bundlewatch
```

## Setup CI Auth Variables Needed by BundleWatch:
- `BUNDLEWATCH_GITHUB_TOKEN`

You will need to give BundleWatch access to your GitHub Statuses, which can be done by heading to:
https://service.bundlewatch.io/setup-github

This will give you your `BUNDLEWATCH_GITHUB_TOKEN`. You will need to set this as an environment variable in CI.


## Setup CI Variables Needed by BundleWatch:
The most efficient way to get this running is to ensure that some environment variables are available for BundleWatch to find.
- `CI_REPO_OWNER` github.com/**facebook**/react
- `CI_REPO_NAME`  github.com/facebook/**react**
- `CI_COMMIT_SHA`
- `CI_BRANCH`

If you're using, _Travis_, _CircleCI_, _Wrecker_ or _Drone_ these should all work out of the box.

> Have a look at the source code to see which variables are automatically found: https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js



## Viewing the results breakdown
After setting up the above you will have BuildStatus on your Pull Requests. Clicking the _details_ link on the reported status will show you a results file breakdown.
<div align="center">
    <img alt="build results preview" src="https://raw.githubusercontent.com/bundlewatch/bundlewatch.io/master/docs/_assets/build-results-preview.png" width="700px">
</div>
