# Configuration Reference
The only required config is the `files` array, with at least one `path`.
`myconfig.js`
```js
const bundlewatchConfig = {
   files: [{
       path: './myfolder/*.js',
       maxSize: '100kb',
       compression: 'none',
   }],
   bundlewatchServiceHost: 'https://service.bundlewatch.io', // Can be a custom service
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

module.exports = bundlewatchConfig

```

## `files`
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


## `ci`
This object, enables the [core features of bundlewatch](getting-started/using-bundlewatch).
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


## `bundlewatchServiceHost`
This can be modified if you wish to use a [custom server](getting-started/custom-server.md).

?> This article is a stub, help by expanding it [at bundlewatch.io on GitHub](https://github.com/bundlewatch/bundlewatch.io/tree/master/docs/getting-started)
