# 使用配置文件

[bundlewatch CLI](/zh/reference/cli.md) 可以从 `.json`、`.js` 或 `package.json` 文件中读取配置。要使用 `.json` 或 `.js`，请在命令行中提供名称 `bundlewatch --config .bundlewatch.config.js`。



否则，省略此选项将会在`package.json`中查找`bundlewatch`键，例如

```json
{
	"name": "my package name",
	"version": "0.0.1",
	"bundlewatch" : {
	    "files": [
	        {
	            "path": "myfolder/*.js",
	            "maxSize": "100kB"
	        }
        ]
	}
}
```

或者直接将配置提供给 [Node JS API](/zh/reference/nodejs.md)




