<template>
  <svg aria-hidden="true">
    <title>{{title}}</title>
    <use v-bind:xlink:href="xlink"></use>
  </svg>
</template>

<script setup>
const props = defineProps({svg: Object})
const {xlink, title} = props.svg
</script>

<style scoped>
</style>