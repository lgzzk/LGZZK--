<template>
  <div
      id="page"
      :class="isOpenContent"
  >
    <MoreButton/>
    <Swiper/>
    <div class="content">
      <transition
          name="animate__animated animate__animated"
          appear
          enter-active-class="animate__zoomInDown"
          leave-active-class="animate__backOutLeft animate__faster"
      >
        <RouterView></RouterView>
      </transition>
    </div>
  </div>
</template>

<script setup>
import Swiper from "./Swiper.vue";
import MoreButton from "./MoreButton.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const {state} = useStore()
const isOpenContent = computed(() => state.isOpenNavigation ? 'open-content' : 'close-content')
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