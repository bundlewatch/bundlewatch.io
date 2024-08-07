# Using a Custom server with bundlewatch
Fork:
https://github.com/bundlewatch/service
And spin up your own instance somewhere

Then update your configuration to include your server location:
```js
module.exports = {
   files: [...],
   bundlewatchServiceHost: 'https://my-bundlewatch-service.example.com',
}
```



