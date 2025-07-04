---
title: Using a Custom Server
description: How to run your own Bundlewatch service and configure your project to use it.
---

# Using a Custom Server with Bundlewatch

You can run your own instance of the Bundlewatch service by forking the official service repository:

https://github.com/bundlewatch/service

Spin up your own instance on your preferred infrastructure.

Then, update your Bundlewatch configuration to point to your custom server:

```js
module.exports = {
  files: [...],
  bundlewatchServiceHost: 'https://my-bundlewatch-service.example.com',
}
```

For more configuration options, see the [Configuration Reference](../reference/configuration.md).
