<template>
  <div>
    <div class="chrome-qrcode-plugin-div">
      <div>
        <CloseButton @click="closeDiv" />
        <transition name="el-fade-in-linear">
          <QRCodeView v-if="showQRCode" @clickChange="setShowBar" :value="codeValue" />
        </transition>
        <transition name="el-fade-in-linear">
          <BarCodeView v-if="showBarCode" @clickChange="setShowQR" :value="codeValue" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "@/components/CloseButton";
import QRCodeView from "@/components/QRCodeView";
import BarCodeView from "@/components/BarCodeView";
import docmentUtils from "@/utils/docmentUtils.js";
let { getAllDocment } = docmentUtils;
import iStore from "@/utils/iStore";
export default {
  name: "app",
  components: {
    CloseButton,
    QRCodeView,
    BarCodeView
  },
  data() {
    return {
      codeValue: "hello world",
      showQRCode: false,
      showBarCode: true,
      domList: []
    };
  },
  mounted() {
    this.init();
    setInterval(() => {
      //如果docment失去监听，则重新初始化
      if (document.onmouseup == null) {
        this.init();
      }
      //每两秒校验一下iframe是否改变
      this.checkIframeChange(getAllDocment(document));
    }, 2000);
  },
  methods: {
    setShowQR() {
      //设置延迟动画
      this.showBarCode = false;
      setTimeout(() => {
        this.showQRCode = true;
      }, 200);
    },
    setShowBar() {
      //设置延迟显示动画
      this.showQRCode = false;
      setTimeout(() => {
        this.showBarCode = true;
      }, 200);
    },
    /**
     * 关闭悬浮框
     */
    closeDiv() {
      iStore.removeMethod();
    },
    /**
     * 数据初始化
     */
    init() {
      console.log("qrcode init");
      this.changeIframeList(getAllDocment(document));
    },
    /**
     * 校验iframe是否改变
     */
    checkIframeChange(newDomList) {
      //长度不一致说明存在改变
      if (newDomList.length != this.domList.length) {
        this.changeIframeList(newDomList);
      }
      /**
       * 内容不一致说明存在改变
       */
      for (let item of this.domList) {
        if (newDomList.indexOf(item) < 0) {
          this.changeIframeList(newDomList);
          break;
        }
      }
    },
    /**
     * 改变iframe事件
     */
    changeIframeList(newDomList) {
      console.log("find iframe dom");
      this.domList = newDomList;
      this.domList.forEach(item => {
        (item.onmouseup = () => {
          this.addOnmouseupGetSelect(item);
        }),
          (item.onmousemove = () => {
            this.addOnmouseupGetSelect(item);
          });
      });
    },
    /**
     * 添加鼠标弹起监听
     */
    addOnmouseupGetSelect(el) {
      this.getText(el);
      el.onmouseup = () => {
        this.getText(el);
      };
    },
    /**
     * 获取被选中的文本，不为空则设置为二维码数组
     */
    getText(el) {
      let text = el.getSelection().toString();
      if (text != "") {
        this.codeValue = text;
      }
    }
  }
};
</script>
<style scoped>
.chrome-qrcode-plugin-div {
  padding: 0;
  margin: 0;
}
</style>
