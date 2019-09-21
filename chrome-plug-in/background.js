chrome.contextMenus.create({
  title: "打开二维码",
  onclick: function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { cmd: "add" }, function(
        response
      ) {});
    });
  }
});

chrome.contextMenus.create({
  title: "生成二维码", // %s表示选中的文字
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { cmd: "add" }, function(
        response
      ) {});
    });
  }
});
