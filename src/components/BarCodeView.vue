<template>
  <div>
    <div class="chrome-qrcode-plugin-barcode-view">
      <br />
      <Barcode :value="value" displayValue="false">
        <div
          style="padding: 15px 20px; margin: 5px 10px; background-color: #fef0f0; border-radius: 6px; color: #f56c6c; font-size: 30px;"
        >条形码不支持中文</div>
      </Barcode>
    </div>
    <div>
      <div class="chrome-qrcode-plugin-barcode-tips" :title="value">{{value}}</div>
      <el-button
        class="chrome-qrcode-plugin-barcode-change-button"
        @click="clickChange"
        type="text"
      >显示条形码</el-button>
    </div>
  </div>
</template>

<script>
import Barcode from "vue-barcode";
export default {
  components: {
    Barcode
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickChange() {
      this.$emit("clickChange");
    }
  }
};
</script>

<style>
.chrome-qrcode-plugin-barcode-view {
}

.chrome-qrcode-plugin-barcode-tips {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  padding: 5px;
  line-height: 30px;
  font-family: "黑体";
}
.chrome-qrcode-plugin-barcode-change-button {
  padding: 5px;
  float: right;
  background-color: white;
  font-family: "黑体";
}
</style>