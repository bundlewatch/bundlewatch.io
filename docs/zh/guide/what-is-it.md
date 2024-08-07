


# 什么是BundleWatch?



 [![npm][npm]][npm-url] [![bundlewatch][bundlewatch]][bundlewatch-url] [![node][node]][node-url]


BundleWatch 检查文件大小，确保捆绑的浏览器资产的文件大小不会增加。

BundleWatch 检查文件大小是否急剧增加，并发出错误信号，例如：
- 添加导致 slug 膨胀的软件包
- 导入错误
- 忘记最小化

完成生产资产构建后，在 CI 中运行`bundlewatch`。
BundleWatch 将跟踪这些文件并在其超出最大大小时提醒您。
BundleWatch 将在您的 GitHub 拉取请求上更新其状态，阻止未通过检查的构建。





[npm]: https://img.shields.io/npm/v/bundlewatch.svg
[npm-url]: https://npmjs.com/package/bundlewatch

[node]: https://img.shields.io/node/v/bundlewatch.svg
[node-url]: https://nodejs.org

[bundlewatch]: https://img.shields.io/badge/bundle-watched-blue.svg
[bundlewatch-url]: http://bundlewatch.io


