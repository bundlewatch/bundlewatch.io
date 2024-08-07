# 与主分支以外的分支进行比较



运行完使用 [bundlewatch](/zh/guide/using-bundlewatch.md) 之后，BundleWatch 将自动与 master 进行差异比较。


如果您想为其他分支（例如开发）设置差异，则需要一个 CI 变量。
- `CI_BRANCH_BASE`

如果您正在使用_Travis_或_Drone_，则无需设置此项。



::: info Info
查看源代码以了解哪些变量是自动找到的： https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js
:::





如果您想要与开发或主分支以外的分支进行差异比较，则需要将这些设置提供给 BundleWatch
`package.json`

```json
{
	"bundlewatch" : {
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



