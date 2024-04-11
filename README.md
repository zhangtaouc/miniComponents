# 
主要作为练习使用

### 1、不把额外的文件上传

```javascript
components/
pages/
app.js
app.json
app.wxss
package.json
# 或者把package.json放要上传的文件夹下,上面表示不上传到npm
```

### 2、package.json

```json
{
  "name": "zt-minicomonent",
  "version": "0.0.2",
  "description": "zt小程序组件库",
  "main": "index.js", // 入口，一般小程序没啥用
  "miniprogram": "packages", // 打包入口
  "files ": [
    "packages"
  ], // 要上传的文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/zhangtaouc/miniComonents.git"
  },
  "keywords": [
    "微信小程序",
    "zt",
    "miniprogram"
  ],
  "author": "zhangtaouc",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/zhangtaouc/miniComonents/issues"
  },
  "homepage": "https://github.com/zhangtaouc/miniComonents#readme",
  "dependencies": {
    "zt-minicomonent": "^0.0.2"
  }
}

```

### 3、创建页面的时候要以组件的形式

![image-20240411144733121](C:\Users\31319\AppData\Roaming\Typora\typora-user-images\image-20240411144733121.png)

```json
{
  "component": true
}


```

### 4、使用

```json
{
  "usingComponents": {
    "zt-test": "zt-minicomonent/zt-test"
  }
}
```

