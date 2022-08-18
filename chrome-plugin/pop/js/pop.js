let url = "https://github.com/tanghuibo/qrcode-chrome-plugin";
window.onload = () => {
  document.getElementById("sendMsgBtn").onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { cmd: "add" }, function(
        response
      ) {});
    });
  };
  document.getElementById("likeBtn").onclick = () =>
    chrome.tabs.create({
      url
    });
  document.getElementById("likeA").onclick = () =>
    chrome.tabs.create({
      url
    });
};
