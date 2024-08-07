# 配置参考



唯一需要的配置是`files`数组，其中至少有一个`path`。

`myconfig.js`
```js
const bundlewatchConfig = {
   files: [{
       path: './myfolder/*.js',
       maxSize: '100kb',
       compression: 'none',
   }],
   normalizeFilenames: /^.+?(\..+?)\.\w+$/,
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



数组中的每个`file`元素内容如下


```js
{
   path: './myfolder/*.js', // 必须的
   maxSize: '100kb',
   compression: 'none',
}

```
- `path` 是单个文件或一组文件的 glob。
- `maxSize` 是可选的，但默认为无穷大，应将其设置为 maxSize 的字符串，例如： `'100KB'`
- `compression` 是可选的，默认为`gzip`。 此字符串必须是`gzip`、`brotli`或`none`之一

## `normalizeFilenames`


用于删除文件名的部分内容，例如，如果您的文件名包含类似`main.abc134.js`的哈希值。


采用解析为正则表达式的`RegExp`或`string`。正则表达式捕获组的任何匹配都将被删除。

例子:

**Hash remover:**

查找点和扩展名之间的字符并将其删除。

RegExp: `/^.+?(\..+?)\.\w+$/`

String: `"^.+?(\\..+?)\\.\\w+$"`

## `ci`


该对象启用了[bundlewatch的核心功能](/zh/guide/using-bundlewatch)。

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


如果您希望使用[自定义服务器](/zh/guide/using-a-custom-server.md)，可以进行修改。