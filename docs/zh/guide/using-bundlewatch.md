---
title: 使用 Bundlewatch
description: 如何运行 Bundlewatch、设置 CI 集成以及查看结果。
---

# 基本用法

在你构建好的资源上运行 Bundlewatch 以检查它们的体积：

```bash
yarn run bundlewatch --max-size 100kb ./webpack-build/*.js
```

示例输出：

```
结果详情见: https://ja2r7.app.goo.gl/aDzEQjBVMXxrCgaa7

PASS ./webpack-build/app.js: 30.71KB < 100KB (gzip)
FAIL ./webpack-build/vendor.js: 198.6KB > 100KB (gzip)

BundleWatch FAIL
```

该命令会在终端中立即给出反馈。要在 GitHub Pull Request 上启用构建状态报告，请按照以下步骤操作。

## 为 GitHub PR 添加构建状态

Bundlewatch 可以直接在你的 GitHub Pull Request 上报告其状态。

<div align="center">
    <img alt="build status preview" data-zoomable src="/build-status-preview.png" width="700px">
</div>

## 设置 CI 认证

你需要提供一个 `BUNDLEWATCH_GITHUB_TOKEN`，以便 Bundlewatch 能够更新你的 PR 状态。你可以在以下地址获取你的 token：

https://service.bundlewatch.io/setup-github

在你的 CI 环境中将此 token 设置为环境变量。

## CI 所需环境变量

在 CI 中，Bundlewatch 需要以下环境变量：

- `CI_REPO_OWNER`（例如 github.com/facebook/react 中的 `facebook`）
- `CI_REPO_NAME`（例如 github.com/facebook/react 中的 `react`）
- `CI_COMMIT_SHA`
- `CI_BRANCH`

::: info
如果你使用的是 Travis、CircleCI、Wrecker 或 Drone，这些变量通常会自动设置。
详情见 [getCIVars.js](https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js)。
:::

## 查看结果详情

设置完成后，Bundlewatch 会在你的 PR 上发布构建状态。点击 _details_ 链接可以查看结果详情。

<div align="center">
    <img alt="build results preview" data-zoomable src="/build-results-preview.png" width="700px">
</div>

---

- [配置 Bundlewatch](./using-a-config-file.md)
- [对比其他分支](./diffing-against-branches-other-than-master.md)
- [配置参考](../reference/configuration.md)
