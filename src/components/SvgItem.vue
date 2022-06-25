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

<script setup>
import ISVG from "./ISVG.vue";

const props = defineProps({svg: Object});
const callBack = () => {
  if (props.svg.callBack) {
    props.svg.callBack()
  }
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

a {
  transition: .25s;
}

a:hover {
  transform: rotate(360deg);
}

</style>