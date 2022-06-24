<template>
  <div id="version">
    <iframe src="https://www.lgzzk.site/old/0/"></iframe>
  </div>
</template>

<script setup>
import 'animate.css'

</script>

<style scoped>
#version {
  width: 77%;
  height: 80%;
}

iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  #version {
    width: 100%;
    height: 100%;
  }

  iframe {
    transform: scale(.7, .7);
  }
}
</style>