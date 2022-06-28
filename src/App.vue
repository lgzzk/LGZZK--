<script setup>
import Navigation from "./components/Navigation.vue";
import Page from "./components/Page.vue";
import {onMounted} from "vue";
import axios from "axios";

onMounted(() => axios.get("https://web.lgzzk.site/SpringBoot/employees/3").then(({data}) => {
  console.log(data)
}))
</script>

<template>
  <div id="app">
    <Navigation/>
    <Page/>
  </div>
</template>

<style>
#app {
  overflow-x: hidden;
}
</style>
