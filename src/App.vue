<template>
  <div>
    <transition name="el-fade-in-linear">
      <div v-if="showQRCode" style="padding: 0; margin: 0;width: 300px;">
        <div>
          <i @click="closeDiv" class="closeBtn">
            <svg
              style="width: 20px; height: 20px"
              t="1569342895178"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2499"
              width="200"
              height="200"
            >
              <path
                d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
                p-id="2500"
              />
            </svg>
          </i>
          <div class="codeImg">
            <qrcode :value="codeValue" :size="size" level="H" />
          </div>
          <div>
            <div class="qrCodeTipSpan" :title="codeValue">{{codeValue}}</div>
            <el-button class="changeImg" @click="showBar" type="text">显示条形码</el-button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <div style="padding: 0; margin: 0;" v-if="showBarCode">
        <div>
          <i @click="closeDiv" class="closeBtn">
            <svg
              style="width: 20px; height: 20px"
              t="1569342895178"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2499"
              width="200"
              height="200"
            >
              <path
                d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
                p-id="2500"
              />
            </svg>
          </i>
          <br />
          <barcode :value="codeValue" displayValue="false">
            <div
              style="padding: 15px 20px; margin: 5px 10px; background-color: #fef0f0; border-radius: 6px; color: #f56c6c; font-size: 30px;"
            >条形码不支持中文</div>
          </barcode>
          <div>
            <div class="qrCodeTipSpan" style="overflow: hidden;" :title="codeValue">{{codeValue}}</div>
            <el-button class="changeImg" @click="showQR" type="text">显示二维码</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import barcode from "vue-barcode";
import qrcode from "qrcode.vue";
import docmentUtils from "@/utils/docmentUtils.js";
let { getAllDocment } = docmentUtils;
import iStore from "@/utils/iStore";
export default {
  name: "app",
  components: {
    barcode,
    qrcode
  },
  data() {
    return {
      codeValue: "hello world",
      size: 300,
      showQRCode: true,
      showBarCode: false,
      domList: []
    };
  },
  mounted() {
    this.init();
    setInterval(() => {
      if (document.onmouseup == null) {
        this.init();
      }
      this.setDomList(getAllDocment(document));
    }, 2000);
  },
  methods: {
    showQR() {
      this.showBarCode = false;
      setTimeout(() => {
        this.showQRCode = true;
      }, 200);
    },
    showBar() {
      this.showQRCode = false;
      setTimeout(() => {
        this.showBarCode = true;
      }, 200);
    },
    closeDiv() {
      iStore.removeMethod();
    },
    init() {
      console.log("qrcode init");
      this.changeDomList(getAllDocment(document));
    },
    setDomList(newDomList) {
      if (newDomList.length != this.domList.length) {
        this.changeDomList(newDomList);
      }
      for (let item of this.domList) {
        if (newDomList.indexOf(item) < 0) {
          this.changeDomList(newDomList);
          break;
        }
      }
    },
    changeDomList(newDomList) {
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
    addOnmouseupGetSelect(el) {
      this.getText(el);
      el.onmouseup = () => {
        this.getText(el);
      };
    },
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
.closeBtn {
  border: none;
  float: right;
  padding: 5px;
  padding-bottom: 0px;
  cursor: pointer;
  padding-right: 2px;
}
.closeBtn:hover {
  fill: #409eff;
}

.closeBtn:hover {
  background: none;
  color: #409eff;
}
.codeImg {
  width: 330px;
  height: 330px;
}

.qrCodeTipSpan {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  padding: 5px;
  font-family: "黑体";
}
.changeImg {
  padding: 5px;
  float: right;
  background-color: white;
  font-family: "黑体";
}
</style>
