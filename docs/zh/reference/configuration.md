# 配置参考

唯一必需的配置是包含至少一个 `path` 的 `files` 数组。
`myconfig.js`

```js
const bundlewatchConfig = {
  files: [
    {
      path: "./myfolder/*.js",
      maxSize: "100kb",
      compression: "none",
    },
  ],
  normalizeFilenames: /^.+?(\..+?)\.\w+$/,
  bundlewatchServiceHost: "https://service.bundlewatch.io", // 可以是自定义服务
  ci: {
    githubAccessToken: ciEnv.githubAccessToken,
    repoOwner: ciEnv.repoOwner,
    repoName: ciEnv.repoName,
    repoCurrentBranch: ciEnv.repoCurrentBranch,
    repoBranchBase: ciEnv.repoBranchBase || "master", // PR 合并到的分支
    commitSha: ciEnv.commitSha,
    trackBranches: ["master", "develop"],
  },
  defaultCompression: "gzip",
};

module.exports = bundlewatchConfig;
```

## `files`

数组中的每个 `file` 如下所示

```js
{
   path: './myfolder/*.js', // 必填
   maxSize: '100kb',
   compression: 'none',
}
```

`path` 是单个文件或一组文件的 glob。
`maxSize` 是可选的，默认为 Infinity，建议设置为最大体积的字符串，例如 '100KB'。
`compression` 是可选的，默认为 `gzip`。该字符串必须是 `gzip`、`brotli` 或 `none` 之一。

## `normalizeFilenames`

用于移除文件名中的部分内容，例如你的文件名包含类似 `main.abc134.js` 的 hash。

接受一个 `RegExp` 或可被解析为 RegExp 的 `string`。正则表达式捕获组匹配到的内容会被移除。

示例：

**Hash 移除器：**
查找点与扩展名之间的字符并将其移除。

正则表达式: `/^.+?(\..+?)\.\w+$/`

字符串: `"^.+?(\\..+?)\\.\\w+$"`

## `ci`

该对象用于启用 [bundlewatch 的核心功能](/guide/using-bundlewatch)。

```js
{
    githubAccessToken: ciEnv.githubAccessToken,
    repoOwner: ciEnv.repoOwner,
    repoName: ciEnv.repoName,
    repoCurrentBranch: ciEnv.repoCurrentBranch,
    repoBranchBase: ciEnv.repoBranchBase || 'master', // PR 合并到的分支
    commitSha: ciEnv.commitSha,
    trackBranches: ['master', 'develop'],
}
```

## `bundlewatchServiceHost`

如果你希望使用[自定义服务器](../guide/using-a-custom-server.md)，可以修改此项。
