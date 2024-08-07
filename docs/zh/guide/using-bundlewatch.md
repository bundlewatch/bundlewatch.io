# 基本用法

```bash
$yarn run bundlewatch --max-size 100kb ./webpack-build/*.js

Result breakdown at: https://ja2r7.app.goo.gl/aDzEQjBVMXxrCgaa7

PASS ./webpack-build/app.js: 30.71KB < 100KB (gzip)
FAIL ./webpack-build/vendor.js: 198.6KB > 100KB (gzip)

BundleWatch FAIL
```

这将为您提供命令行输出。如果您希望 BundleWatch 报告您的拉取请求的构建状态，请参见下文。

## 添加构建状态：

BundleWatch 可以在您的 GitHub Pull Requests 上报告其状态。


<div align="center">
    <img alt="build status preview" data-zoomable src="/build-status-preview.png" width="700px">
</div>


## 设置 BundleWatch 所需的 CI Auth 变量：

- `BUNDLEWATCH_GITHUB_TOKEN`

您需要授予 BundleWatch 访问您的 GitHub 状态的权限，具体操作如下：
https://service.bundlewatch.io/setup-github

这将为您提供`BUNDLEWATCH_GITHUB_TOKEN`。您需要在 CI 中将其设置为环境变量。

## 设置 BundleWatch 所需的 CI 变量：

使其运行的最有效方法是确保某些环境变量可供 BundleWatch 找到。
- `CI_REPO_OWNER` github.com/**facebook**/react
- `CI_REPO_NAME`  github.com/facebook/**react**
- `CI_COMMIT_SHA`
- `CI_BRANCH`



::: info
如果您正在使用_Travis_、_CircleCI_、_Wrecker_ 或 _Drone_，这些都应该可以开箱即用。

查看源代码以了解哪些变量是自动找到的： https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js
:::



## 查看结果分析
完成上述设置后，您的 Pull 请求中将出现 BuildStatus。单击报告状态上的 _details_ 链接将显示结果文件细目。
<div align="center">
    <img alt="build results preview" data-zoomable src="/build-results-preview.png" width="700px">
</div>



