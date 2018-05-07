# Diffing Against Branches Other Than Master
After running through [using bundlewatch](getting-started/using-bundlewatch.md), BundleWatch will automatically diff against master.

If you want to set up diffing for other branches (e.g. develop) there is one more CI variable that is required.
- `CI_BRANCH_BASE`

If you're using, _Travis_ or _Drone_ you shouldn't need to set this.


!> Have a look at the source code to see which variables are automatically found: https://github.com/bundlewatch/bundlewatch/blob/master/src/app/config/getCIVars.js

If you want to diff against branches other that develop or master. You will need to supply these settings to BundleWatch
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



?> This article is a stub, help by expanding it [at bundlewatch.io on GitHub](https://github.com/bundlewatch/bundlewatch.io/tree/master/docs/getting-started)
