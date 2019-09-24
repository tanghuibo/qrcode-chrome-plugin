import Vue from "vue";
import App from "./App.vue";
import docmentUtils from "./utils/docmentUtils";
import './plugins/element.js'

let appName = "qrcode-chrome-plug-in";
Vue.config.productionTip = false;

function vueInit() {
  docmentUtils.addSuspensionDiv(document, appName);
  new Vue({
    render: h => h(App)
  }).$mount("#" + appName);
}
// 需要degub时打开
// vueInit();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  vueInit();
  sendResponse(true);
});
