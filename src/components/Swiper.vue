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

<script>

import {nanoid} from 'nanoid'
import SwiperItem from "./SwiperItem.vue"
import {BannerImgMobile} from "../assets/lgzzk_config.json";
import {BannerImgPC} from "../assets/lgzzk_config.json";
import {reactive} from "vue";

export default {
  name: "Swiper",
  components: {SwiperItem},
  data() {
    return {
      bannerImg: [],
      BannerImg: reactive([]),
      margin: 0,
      screenWidth: '',
      timer: null
    }
  },
  watch: {
    screenWidth(width) {
      this.selectBannerImg(width)
    }
  },
  computed: {
    nonce() {
      return Math.floor(Math.random() * this.BannerImg.length)
    },
    marginLeft() {
      return this.margin * -100 + '%'
    }
  },
  mounted() {
    this.startSliderImg()
    this.selectBannerImg(document.body.clientWidth)
    this.$emit('sliderImg', this.sliderImg)
    this.$emit('startSliderImg', this.startSliderImg)
    this.$emit('stopSliderImg', () => clearInterval(this.timer))
    window.onresize = ev => this.screenWidth = ev.currentTarget.innerWidth
  },
  methods: {
    initSwiper() {
      this.BannerImg.forEach((value, i) => {
        this.bannerImg.push({
          id: nanoid(),
          url: this.BannerImg[this.nonce].url,
          info: this.BannerImg[i].info
        })
      })
      setTimeout(() => this.margin = this.nonce, 0)
    },
    sliderImg(flag) {
      if (flag === true) {
        if (--this.margin < 0) this.margin = this.BannerImg.length - 1;
      } else {
        this.margin = ++this.margin % this.BannerImg.length
      }
      this.bannerImg[this.margin].url = this.BannerImg[this.margin].url
      if (this.margin + 1 !== this.bannerImg.length) {
        this.bannerImg[this.margin + 1].url = this.BannerImg[this.margin + 1].url
      }
    },
    startSliderImg() {
      this.timer = setInterval(() => this.sliderImg(false), 12 * 1000)
    },
    selectBannerImg(width) {
      if (width < 768) {
        this.BannerImg = BannerImgMobile
      } else {
        this.BannerImg = BannerImgPC
      }
      this.initSwiper()
    }
  }
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