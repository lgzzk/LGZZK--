<template>
  <div @click="setNavigtion">
    <ISVG
        class="btn icon"
        :svg="{xlink: '#icon-gengduo6', title: '展开'}"
        :class="isOpen"
    />
  </div>
</template>
<script>
import {mapMutations, mapState} from "vuex";
import ISVG from "./ISVG.vue";

export default {
  name: "MoreButton",
  components: {ISVG},
  computed: {
    isOpen() {
      return this.isOpenNavigtion ? 'open-btn' : 'close-btn'
    },
    ...mapState(['isOpenNavigtion'])
  },
  methods: {
    ...mapMutations(['setNavigtion'])
  }
}
</script>

<style scoped>
.btn {
  top: 35px;
  z-index: 100;
  transition: .5s;
  position: absolute;
  animation: enter-down .8s ease-out;
}

.icon {
  width: 40px;
  height: 40px;
  vertical-align: center;
  overflow: hidden;
  cursor: pointer;
  font-weight: 9000;
  fill: rgb(254, 254, 254);
}

.open-btn {
  left: 200px;
  opacity: 0;
}

.close-btn {
  left: 60px;
  opacity: 1;
}

@keyframes enter-down {
  0% {
    opacity: 0;
    top: -20px;
  }
  100% {
    opacity: 1;
    top: 35px;
  }
}
</style>