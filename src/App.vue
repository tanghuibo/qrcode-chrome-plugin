<template>
  <div :style="{padding: 0, margin: 0, width: '300px'}">
    <div>
      <div>
        <qrcode :value="codeValue" :size="size" level="H" />
      </div>
    </div>
  </div>
</template>

<script>
import qrcode from "qrcode.vue";
import docmentUtils from "@/utils/docmentUtils.js";

console.log(docmentUtils);

let { getAllDocment } = docmentUtils;
export default {
  name: "app",
  components: {
    qrcode
  },
  data() {
    return {
      codeValue: "https://github.com/tanghuibo/bar-or-qrcode-generator",
      size: 300,
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
