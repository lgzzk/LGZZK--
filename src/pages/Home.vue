<template>
  <div id="focusInfo">
    <a href="https://www.lgzzk.site">
      <img
          src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad68b41e-972e-434c-96f7-4c36352c738b/fd80e8ad-d2ed-494c-9db0-63986f23a2ef.png"
          class="headImg" title="LGZZK" alt="LGZZK"/>
    </a>
        <Typewrite/>
    <div class="social">
      <SvgItem
          v-for="s in svgs"
          :key="s.xlink"
          :svg="s"
      />
    </div>
  </div>
</template>

<script setup>
import Typewrite from "../components/Typewrite.vue";
import SvgItem from "../components/SvgItem.vue";
import {mainStore} from "../store/index.js";

let timer = null

const store = mainStore();

const svgs = [
  {
    xlink: '#icon-angle-left',
    title: '上一张',
    callBack: () => {
      store.swiper.sliderImg(true)
      reset()
    }
  }, {
    xlink: '#icon-dsj',
    title: 'bilibili',
    href: 'https://space.bilibili.com/178660946',
    target: '_blank'
  }, {
    xlink: '#icon-wangyiyunyinleclick',
    title: '网易云音乐',
    href: 'https://music.163.com/#/user/home?id=1383400289',
    target: '_blank'
  }, {
    xlink: '#icon-QQ',
    title: 'QQ',
    href: 'tencent://message/?uin=3088773042&Site=&Menu=yes',
    target: '_self'
  }, {
    xlink: '#icon-github-fill',
    title: 'github',
    href: 'https://github.com/lgzzk',
    target: '_blank'
  }, {
    xlink: '#icon-csdn',
    title: 'csdn',
    href: 'https://blog.csdn.net/qq_42314838?type=blog',
    target: '_blank'
  }, {
    xlink: '#icon-youjian1',
    title: '邮件',
    href: 'mailto:zzk171@outlook.com',
    target: '_self'
  }, {
    xlink: '#icon-angle-right',
    title: '下一张',
    callBack: () => {
      store.swiper.sliderImg(false)
      reset()
    }
  },
]

function reset() {
  clearTimeout(timer)
  store.swiper.stopSliderImg()
  timer = setTimeout(() => store.swiper.startSliderImg(), 1000)
}

</script>

<style scoped>
#focusInfo {
  width: 600px;
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: center;
}

.headImg {
  width: 160px;
  user-select: none;
}

.social {
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  border-radius: 100px;
  justify-content: space-between;
}

/*svg {*/
/*  width: 40px;*/
/*  height: 40px;*/
/*  vertical-align: center;*/
/*  overflow: hidden;*/
/*  cursor: pointer;*/
/*  fill: rgb(238, 234, 234);*/
/*}*/

@media screen and (max-width: 768px) {
  #focusInfo {
    width: 390px;
  }
}

</style>