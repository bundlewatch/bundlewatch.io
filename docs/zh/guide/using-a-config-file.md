---
title: 使用配置文件
description: 如何通过配置文件或 package.json 配置 Bundlewatch。
---

# 使用配置文件

[Bundlewatch CLI](../reference/cli.md) 可以从 `.json`、`.js` 文件或你的 `package.json` 文件中读取配置。

- 若要使用自定义配置文件，请在命令行中指定它：
  ```bash
  bundlewatch --config .bundlewatch.config.js
  ```
- 如果省略 `--config` 标志，Bundlewatch 会在你的 `package.json` 中查找 `bundlewatch` 键。

`package.json` 配置示例：

```json
{
  "name": "my package name",
  "version": "0.0.1",
  "bundlewatch": {
    "files": [
      {
        "path": "myfolder/*.js",
        "maxSize": "100kB"
      }
    ]
  }
}
```

你也可以直接将配置传递给 [Node.js API](../reference/nodejs.md)。
