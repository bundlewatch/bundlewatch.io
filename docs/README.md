# Overview:
Run `bundlesize` in CI after you have finished building your production assets. Bundlesize will keep track of these files and alert you when they go over max size, or increase/decrease by a certain percentage (against say master). Bundlesize will post back to your Github pull request.

# Getting Started

- With NPM: `npm install @bundlesize/bundlesize --save-dev`

- With Yarn: `yarn add @bundlesize/bundlesize --dev`

- Usage Run: `bundlesize`


# Configuring Bundlesize
Bundlesize can read configuration from `.json`, `.js`, or your package.json file. To use `.json` or `.js`, supply the name on the command line `bundlesize --config .bundlesize.config.js`.

Otherwise, omit this to have it look in the package.json under the bundlesize key, e.g. package.json.

```json
{
	“name”: “my package name”,
	“bundlesize” :
		...bundlesizeConfugration
}
```


# Configuration Options
## Node API

```js
const defaultConfig = {
   files: [],
   bundlesizeServiceHost: 'https://service.bundlesize.io', // Can be a custom service, or set to NUll
   ci: {
       githubAccessToken: ciEnv.githubAccessToken,
       repoOwner: ciEnv.repoOwner,
       repoName: ciEnv.repoName,
       repoCurrentBranch: ciEnv.repoCurrentBranch,
       repoBranchBase: ciEnv.repoBranchBase || 'master', // Branch PR is being merged into
       commitSha: ciEnv.commitSha,
       trackBranches: ['master', 'develop'],
   },
   defaultCompression: 'gzip',
}
```

## Command Line Params

```js
program
   .usage('[options] <filePathGlobs ...>')
   .option(
       '--config [configFilePath]',
       'file to read configuration from, if used all options are blown away',
   )
   .option('--max-size [maxSize]', 'maximum size threshold (e.g. 3kb)')
   .option(
       '--compression [compression]',
       'specify which compression algorithm to use',
   )
```
