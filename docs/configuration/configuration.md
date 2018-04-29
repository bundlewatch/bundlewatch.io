# Configuring Bundlesize
The [bundlesize CLI](apis/cli.md) can read configuration from `.json`, `.js`, or your package.json file.
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

Alternatively supply the config directly to the [Node JS API](apis/nodejs.md)

# Bundlesize Configuration
## Complete Configuration
The only required config is the `files` array, with at least one `path`.
`myconfig.js`
```js
const bundlesizeConfig = {
   files: [{
       path: './myfolder/*.js',
       maxSize: '100kb',
       compression: 'none',
   }],
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

module.exports = bundlesizeConfig

```

## The `files` Array
Each `file` in the array is as follows
```js
{
   path: './myfolder/*.js', // Required
   maxSize: '100kb',
   compression: 'none',
}

```
`path` is a glob for a single file, or a set of files.
`maxSize` is optional, but defaults to Infinity, this should be set to a string of the maxSize, e.g. '100KB'
`compression` is optional, and defaults to `gzip`. This string must be one of `gzip`, `brotli` or `none`


## The `ci` object
This object, enables lots of the really cool features of bundlesize.
// TODO: EXPAND ON THIS
```js
{
    githubAccessToken: ciEnv.githubAccessToken,
    repoOwner: ciEnv.repoOwner,
    repoName: ciEnv.repoName,
    repoCurrentBranch: ciEnv.repoCurrentBranch,
    repoBranchBase: ciEnv.repoBranchBase || 'master', // Branch PR is being merged into
    commitSha: ciEnv.commitSha,
    trackBranches: ['master', 'develop'],
}
```


## bundlesizeServiceHost
This can be modified if you wish to use a [custom server](configuration/custom-server.md).



