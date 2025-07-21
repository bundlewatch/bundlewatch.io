---
title: 对比除 Master 以外的分支
description: 如何配置 Bundlewatch 以对比 develop 或 staging 等分支。
---

# 对比除 Master 以外的分支

默认情况下，按照 [使用 Bundlewatch](./using-bundlewatch.md) 指南操作后，Bundlewatch 会将你的 bundle 与 `master` 分支进行对比。

如果你想对比其他分支（例如 `develop`），请设置以下 CI 环境变量：

- `CI_BRANCH_BASE`

如果你使用的是 Travis 或 Drone，这通常会自动设置。

::: info 信息
查看哪些 CI 变量会被自动检测，请参阅 [getCIVars.js 源码](https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js)。
:::

要对比多个分支（例如 `develop`、`staging`），请在 `package.json` 的 Bundlewatch 配置中添加 `trackBranches` 选项：

```json
{
  "bundlewatch": {
    "files": [
      {
        "path": "myfolder/*.js",
        "maxSize": "100kB"
      }
    ],
    "ci": {
      "trackBranches": ["master", "develop", "staging"]
    }
  }
}
```

更多配置选项，请参阅 [配置参考](../reference/configuration.md)。
