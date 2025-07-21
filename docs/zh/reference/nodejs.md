# NodeJS Api

该 API 可按如下方式使用，关于不同参数的详细信息，[请参阅配置](../reference/configuration.md)

```js
import bundlewatch from 'bundlewatch'

const results = await bundlewatch({
   files: [{
       path: './myfolder/*.js',
       maxSize: '100kb',
       compression: 'none',
   }],
   bundlewatchServiceHost: 'https://service.bundlewatch.io', // 可以是自定义服务
   ci: {
       githubAccessToken: ciEnv.githubAccessToken,
       repoOwner: ciEnv.repoOwner,
       repoName: ciEnv.repoName,
       repoCurrentBranch: ciEnv.repoCurrentBranch,
       repoBranchBase: ciEnv.repoBranchBase || 'master', // PR 合并到的分支
       commitSha: ciEnv.commitSha,
       trackBranches: ['master', 'develop'],
   },
   defaultCompression: 'gzip',
})


console.log(results)
// 输出:
{ status: 'fail',
    fullResults:
    [
        {
            filePath: './myfolder/test-file-1.jpg',
            message: '30.71KB < 100KB (gzip)',
            status: 'pass',
            size: 31448,
            baseBranchSize: 0,
            maxSize: 102400
        },
        {
            filePath: './myfolder/test-file-2.jpg',
            message: '198.6KB > 100KB (gzip)',
            status: 'fail',
            size: 203368,
            baseBranchSize: 0,
            maxSize: 102400
        }
    ],
    summary: 'maxSize check failed',
    url: 'https://ja2r7.app.goo.gl/FJR3Rx1EdC1QjAii1'
}


// 状态字符串也可以通过 api 获取
// import { STATUSES } from 'bundlewatch'
console.log(result.status === STATUES.FAIL)

```

Node API 的使用示例可见于 [bundlewatchCLI](https://github.com/bundlewatch/bundlewatch/blob/master/src/bin/index.js#L43)
