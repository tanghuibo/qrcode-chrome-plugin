<template>
  <!-- 透传点击事件 -->
  <i class="chrome-qrcode-plugin-close-button" @click="click">
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
</template>
<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
<style>
.chrome-qrcode-plugin-close-button {
  border: none;
  float: right;
  padding: 5px;
  padding-bottom: 0px;
  cursor: pointer;
  padding-right: 2px;
}
.chrome-qrcode-plugin-close-button:hover {
  fill: #409eff;
}

.chrome-qrcode-plugin-close-button:hover {
  background: none;
  color: #409eff;
}
</style>