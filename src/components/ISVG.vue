<template>
  <svg aria-hidden="true">
    <title>{{title}}</title>
    <use v-bind:xlink:href="xlink"></use>
  </svg>
</template>

<script setup>
const props = defineProps({svg: Object})
const {title, xlink} = props.svg
</script>

<style scoped>
</style>