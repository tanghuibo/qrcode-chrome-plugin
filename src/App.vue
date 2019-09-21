<template>
  <div id="app">
    <qrcode :value="codeValue" :size="size" level="H"/>
  </div>
</template>

<script>
import qrcode from "qrcode.vue";
export default {
  name: "app",
  components: {
    qrcode
  },
  data() {
    return {
      codeValue: "https://github.com/tanghuibo/bar-or-qrcode-generator",
      size: 300
    };
  }
};
</script>
