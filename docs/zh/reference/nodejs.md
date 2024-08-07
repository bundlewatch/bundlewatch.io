# NodeJS Api



API 的使用方法如下，有关不同参数的详细信息，请参阅[配置](/zh/reference/configuration.md)



```js
import bundlewatch from 'bundlewatch'

const results = await bundlewatch({
   files: [{
       path: './myfolder/*.js',
       maxSize: '100kb',
       compression: 'none',
   }],
   bundlewatchServiceHost: 'https://service.bundlewatch.io', // Can be a custom service
   ci: {
       githubAccessToken: ciEnv.githubAccessToken,
       repoOwner: ciEnv.repoOwner,
       repoName: ciEnv.repoName,
       repoCurrentBranch: ciEnv.repoCurrentBranch,
       repoBranchBase: ciEnv.repoBranchBase || 'master', // Branch PR is being merged into
       commitSha: ciEnv.commitSha,
       trackBranches: ['master', 'develop'],
   },
   defaultCompression: 'gzip',
})


console.log(results)
// Outputs:
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


// Status strings can also be accessed from the api
// import { STATUSES } from 'bundlewatch'
console.log(result.status === STATUES.FAIL)

```

在 bundlewatchCLI 中可以看到 Node API 的一个[示例用法](https://github.com/bundlewatch/bundlewatch/blob/master/src/bin/index.js#L43) 



