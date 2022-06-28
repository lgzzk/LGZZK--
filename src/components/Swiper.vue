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
import {random} from "../utils/tool.js";
import {useStore} from "vuex";

let bannerImg = reactive([]),
    BannerImg = [],
    margin = ref(0),
    screenWidth = ref(0),
    flag = ref(null),
    timer = null,
    nonce = null

const marginLeft = computed(() => margin.value * -100 + '%')
const {commit} = useStore()

onMounted(() => {
  startSliderImg()
  selectBannerImg(document.body.clientWidth)
  commit("setSwiper", {
    sliderImg,
    startSliderImg,
    stopSliderImg
  })
  window.onresize = ev => screenWidth.value = ev.currentTarget.innerWidth
})

watch(screenWidth, value => {
  selectBannerImg(value)
})

watch(flag, () => {
  initSwiper()
})


function startSliderImg() {
  timer = setInterval(() => sliderImg(false), 12 * 1000)
}

function stopSliderImg() {
  clearInterval(timer)
}

function initSwiper() {
  bannerImg.length = 0
  BannerImg.forEach((value, i) => {
    bannerImg.push({
      id: nanoid(),
      url: BannerImg[nonce].url,
      info: BannerImg[i].info
    })
  })
  setTimeout(() => margin.value = nonce, 0)
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
    flag.value = true
    BannerImg = BannerImgMobile
  } else {
    flag.value = false
    BannerImg = BannerImgPC
  }
  nonce = random(0, BannerImg.length - 1)
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