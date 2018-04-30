# Using a Custom server with bundlesize
Fork:
https://github.com/bundlesize/service
And spin up your own instance somewhere

Then update your configuration to include your server location:
```js
module.exports = {
   files: [...],
   bundlesizeServiceHost: 'https://my-bundlesize-service.example.com',
}
```




