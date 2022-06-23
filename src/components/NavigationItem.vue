<template>
  <li @click="close">
    <RouterLink
        :to="navItem.href"
        exact-active-class="active"
    >
      <ISVG
          class="icon"
          :svg="navItem"
      />
      <span>{{ navItem.text }}</span>
    </RouterLink>
  </li>
</template>

<script>
import {mapMutations} from "vuex";
import ISVG from "./ISVG.vue";

export default {
  name: "NavigationItem",
  components: {ISVG},
  props: {
    navItem: Object
  },
  methods: {
    close() {
      if (document.body.clientWidth < 768) {
        this.setNavigtion()
      }
    },
    ...mapMutations(['setNavigtion'])
  }
}
</script>

<style scoped>
li {
  margin: 1% 0px;
}

a {
  width: 100%;
  color: #ffffff;
  display: flex;
  font-size: 20px;
  transition: .45s;
  font-weight: 900;
  line-height: 350%;
  padding-left: 40px;
  align-items: center;
  background-color: rgba(0, 0, 0, .15);
  border-bottom: 1px solid #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.17);
}

.active {
  padding-left: 71px;
  background-color: rgba(0, 0, 0, .7);
}

a:hover {
  padding-left: 71px;
}

.icon {
  width: 22px;
  height: 22px;
  margin-right: 13px;
  vertical-align: baseline;
  fill: rgb(242, 242, 242);
}
</style>