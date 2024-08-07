# 使用带有 bundlewatch 的自定义服务器

Fork:
https://github.com/bundlewatch/service

并在某处启动你自己的实例
然后更新您的配置以包含您的服务器位置：
```js
module.exports = {
   files: [...],
   bundlewatchServiceHost: 'https://my-bundlewatch-service.example.com',
}
```



