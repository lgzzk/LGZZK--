<template>
  <div
      id="swiper"
      :style="{marginLeft}"
  >
    <SwiperItem
        v-for="item in bannerImg"
        :img="item"
        :key="item.id"
    />
  </div>
</template>

<script setup>

import {nanoid} from 'nanoid'
import SwiperItem from "./SwiperItem.vue"
import {BannerImgMobile} from "../assets/lgzzk_config.json";
import {BannerImgPC} from "../assets/lgzzk_config.json";
import {computed, onMounted, reactive, ref, watch} from "vue";

let bannerImg = reactive([]),
    BannerImg = reactive([]),
    margin = ref(0),
    screenWidth = ref(0),
    timer = null

const nonce = computed(() => Math.floor(Math.random() * BannerImg.length))
const marginLeft = computed(() => margin.value * -100 + '%')

onMounted(() => {
  startSliderImg()
  selectBannerImg(document.body.clientWidth)
  window.onresize = ev => screenWidth.value = ev.currentTarget.innerWidth
})

watch(screenWidth, value => {
  selectBannerImg(value)
})


function startSliderImg() {
  timer = setInterval(() => sliderImg(false), 12 * 1000)
}

function initSwiper() {
  // bannerImg = reactive([])
  BannerImg.forEach((value, i) => {
    bannerImg.push({
      id: nanoid(),
      url: BannerImg[nonce.value].url,
      info: BannerImg[i].info
    })
  })
  setTimeout(() => margin.value = nonce.value, 0)
}


function sliderImg(flag) {
  if (flag === true) {
    if (--margin.value < 0) margin.value = BannerImg.length - 1;
  } else {
    margin.value = ++margin.value % BannerImg.length
  }
  bannerImg[margin.value].url = BannerImg[margin.value].url
  if (margin.value + 1 !== bannerImg.length) {
    bannerImg[margin.value + 1].url = BannerImg[margin.value + 1].url
  }
}


function selectBannerImg(width) {
  if (width < 768) {
    BannerImg = BannerImgMobile
  } else {
    BannerImg = BannerImgPC
  }
  initSwiper()
}

</script>

<style scoped>
#swiper {
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-left: 0;
  position: relative;
  transition: ease margin-left .9s;
}

</style>