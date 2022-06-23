<template>
  <a
      :href="svg.href"
      :target="svg.target"
      @click="callBack"
  >
    <ISVG
      class="icon"
      :svg="svg"
    />
  </a>
</template>

<script>
import ISVG from "./ISVG.vue";
export default {
  name: "SvgItem",
  components: {ISVG},
  props: {svg: Object},
  methods: {
    callBack(){
      if (this.svg.callBack){
        this.svg.callBack()
      }
    }
  },
}
</script>

<style scoped>

.icon {
  width: 40px;
  height: 40px;
  vertical-align: center;
  overflow: hidden;
  cursor: pointer;
  fill: rgb(255, 255, 255);
}

a{
  transition: .25s;
}

a:hover{
  transform: rotate(360deg);
}

</style>