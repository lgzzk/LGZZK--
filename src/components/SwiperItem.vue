<template>
  <div class="slide" :style="{backgroundImage}">
    <span class='infobox'>
      {{img.info}}
    </span>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: {
    img: Object
  },
  computed: {
    backgroundImage(){
      return `url('${this.img.url}')`
    }
  }

}
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
  flex-direction: row;
  background-size: cover;
  background-color: #232323;
  transform: translate(0px, 0px);
  background-position: center center;
}

.infobox{
  right: 10px;
  bottom: 3%;
  font-size: 25px;
  user-select: none;
  position: absolute;
  color: rgba(255,255,255,1);
}

@media screen and (max-width: 768px) {
  .infobox {
    right: 5px;
  }
}
</style>