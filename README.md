# 划词二维码

## 使用教程

## 下载

[下载地址](https://github.com/tanghuibo/qrcode-chrome-plugin/raw/master/target/chrome-plugin.crx)

### 安装

![演示图片](https://github.com/tanghuibo/qrcode-chrome-plugin/blob/master/screenshots/install.gif?raw=true)

### 使用

![演示图片](https://github.com/tanghuibo/qrcode-chrome-plugin/blob/master/screenshots/use.gif?raw=true)

## 开发

### 调试

1. 修改 ./src/mian.js

> 修改前

```javascript
// 需要degub时打开
//vueInit();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  vueInit();
  sendResponse(true);
});
```

> 修改后

```javascript
// 需要degub时打开
vueInit();

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   vueInit();
//   sendResponse(true);
// });
```

2. 运行

```bash
yarn run server
```

### 编译

```bash
yarn run build
```