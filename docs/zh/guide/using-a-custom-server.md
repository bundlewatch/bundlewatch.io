---
title: 使用自定义服务器
description: 如何运行你自己的 Bundlewatch 服务并将项目配置为使用它。
---

# 在 Bundlewatch 中使用自定义服务器

你可以通过 fork 官方服务仓库来运行你自己的 Bundlewatch 服务实例：

https://github.com/bundlewatch/service

在你喜欢的基础设施上启动你自己的实例。

然后，更新你的 Bundlewatch 配置，使其指向你的自定义服务器：

```js
module.exports = {
  files: [...],
  bundlewatchServiceHost: 'https://my-bundlewatch-service.example.com',
}
```

更多配置选项，请参阅 [配置参考](../reference/configuration.md)。
