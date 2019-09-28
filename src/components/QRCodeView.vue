<template>
  <div>
    <div class="chrome-qrcode-plugin-qrcode-view">
      <Qrcode :value="value" :size="300" level="H" />
    </div>
    <div>
      <div class="chrome-qrcode-plugin-qrcode-tips" :title="value">{{value}}</div>
      <el-button
        class="chrome-qrcode-plugin-qrcode-change-button"
        @click="clickChange"
        type="text"
      >显示二维码</el-button>
    </div>
  </div>
</template>

<script>
import Qrcode from "qrcode.vue";
export default {
  components: {
    Qrcode
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
.chrome-qrcode-plugin-qrcode-view {
  width: 300px;
  height: 330px;
}

.chrome-qrcode-plugin-qrcode-tips {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  padding: 5px;
  line-height: 30px;
  font-family: "黑体";
}
.chrome-qrcode-plugin-qrcode-change-button {
  padding: 5px;
  float: right;
  background-color: white;
  font-family: "黑体";
}
</style>