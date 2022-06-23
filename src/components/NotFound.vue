<template>
  <div id="notfound">
    <span class="text-style">(╯‵□′)╯︵404 Not Found</span>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    history.replaceState(null, null, this.$route.params.path)
  }
}
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