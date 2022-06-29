<template>
  <div id="notfound">
    <span class="text-style">(╯‵□′)╯︵404 Not Found</span>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

onMounted(() => {
  history.replaceState(null, null, route.params.path)
})
</script>

<style scoped>
#notfound {
  z-index: 10;
}

span {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .text-style {
    font-size: 50px;
  }
}
</style>