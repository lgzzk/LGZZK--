<template>
  <div
      id="page"
      :class="isOpenContent"
  >
    <MoreButton/>
        <Swiper/>
    <div
        class="content"
    >
      <RouterView
          v-motion
          :initial="{
            opacity: 0,
            y: -1500,
        }"
          :enter="{
            opacity: 1,
            y: 0,
        }"
      ></RouterView>
    </div>
  </div>
</template>

<script setup>
import Swiper from "./Swiper.vue";
import MoreButton from "./MoreButton.vue";
import {computed} from "vue";
import {mainStore} from "../store/index.js";

const store = mainStore();
const isOpenContent = computed(() => store.isOpenNavigation ? 'open-content' : 'close-content')
</script>

<style scoped>
#page {
  position: relative;
  overflow: hidden;
  transition: ease left .5s;
}

#page::before {
  z-index: 10;
  content: "";
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.27);
}

.content {
  top: 0px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
}

.open-content {
  left: 250px;
}

.close-content {
  left: 0px;
}

@media screen and (max-width: 768px) {
  #page {
    transition: ease left .37s;
  }
}
</style>