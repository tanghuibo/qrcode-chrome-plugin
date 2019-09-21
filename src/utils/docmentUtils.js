export default {
  /**
   * appDiv是否初始化过
   */
  appDivIsInit: false,
  /**
   * 获取所有docment
   * @param {*} mainDoc
   */
  getAllDocment(mainDoc) {
    return [
      mainDoc,
      ...[...mainDoc.querySelectorAll("iframe")]
        .map(iframe => iframe.contentDocument)
        .filter(doc => doc != null)
    ];
  },

  /**
   * 允许moveDoc在mainDoc被拖动
   * @param {*} moveDoc
   * @param {*} mainDoc
   */
  moveInit(moveDoc, mainDoc) {
    moveDoc.draggable = true;
    moveDoc.ondragstart = event => {
      screenX = event.screenX;
      screenY = event.screenY;
    };
    let allDoc = this.getAllDocment(mainDoc);
    allDoc.forEach(doc => (doc.ondragover = event => event.preventDefault()));
    moveDoc.ondragend = event => {
      moveDoc.style.top = event.screenY - screenY + moveDoc.offsetTop + "px";
      moveDoc.style.left = event.screenX - screenX + moveDoc.offsetLeft + "px";
    };
  },
  /**
   * 移除doc及其子元素
   * @param {*} doc
   * @param {*} mainDoc
   */
  removeDoc(doc, mainDoc) {
    while (doc.hasChildNodes()) {
      doc.removeChild(doc.firstElementChild);
    }
    mainDoc.body.removeChild(doc);
  },
  /**
   * 添加悬浮div
   * @param {*} mainDoc
   * @param {*} appId
   */
  addSuspensionDiv(mainDoc, appId) {
    if (this.appDivIsInit == true) {
      return;
    }
    this.appDivIsInit = true;
    let oneInner = mainDoc.createElement("div");
    oneInner.setAttribute(
      "style",
      "position:fixed;left: 10px;top: 10px;background-color:  rgb(255, 255, 255); border: 2px solid #a0a0a0; z-index: 9999;"
    );
    let appDiv = mainDoc.createElement("div");
    let closeBtn = mainDoc.createElement("span");
    appDiv.setAttribute("id", appId);
    closeBtn.innerText = "关闭";
    closeBtn.setAttribute(
      "style",
      "border: none; float: right; cursor:pointer; padding: 0px 5px; font-size: 15px;"
    );
    oneInner.appendChild(closeBtn);
    oneInner.appendChild(appDiv);
    mainDoc.body.appendChild(oneInner);
    this.moveInit(oneInner, mainDoc);
    //删除
    closeBtn.onclick = () => {
      this.removeDoc(oneInner, mainDoc);
      this.appDivIsInit = false;
    };
  }
};
