<template>
  <div
      class="navigation"
      :class="isOpenConten"
  >
    <div class="btn" :class="isOpenBtn" @click="setNavigtion">
      <ISVG
          class="icon"
          :svg="{xlink: '#icon-times', title: '展开'}"
      />
    </div>
    <ul>
      <NavigationItem
          v-for="i in navItems"
          :key="i.href + i.xlink"
          :nav-item="i"
      />
    </ul>
  </div>
</template>

<script>

import NavigationItem from "./NavigationItem.vue";
import {mapMutations, mapState} from "vuex";
import ISVG from "./ISVG.vue";

export default {
  name: "Navigation",
  components: {ISVG, NavigationItem},
  computed: {
    isOpenBtn() {
      return this.isOpenNavigtion ? 'open-btn' : 'close-btn'
    },
    isOpenConten() {
      return this.isOpenNavigtion ? 'open-navigation' : 'close-navigation'
    },
    ...mapState(['isOpenNavigtion'])
  },
  methods: {
    ...mapMutations(['setNavigtion'])
  },
  data() {
    return {
      navItems: [
        {
          xlink: '#icon-xiazai44',
          href: '/',
          text: 'home'
        },
        {
          xlink: '#icon-folder',
          href: '/project',
          text: 'project'
        },
        {
          xlink: '#icon-xiaoxi',
          href: '/message',
          text: 'message'
        },
        {
          xlink: '#icon-user-friends',
          href: '/friend',
          text: 'friend'
        },
        {
          xlink: '#icon-shijian',
          href: '/version',
          text: 'version'
        },
        {
          xlink: '#icon-guanyu1',
          href: '/about',
          text: 'about'
        },
      ],
    }
  }
}
</script>

<style scoped>

.icon {
  fill: #4C4C4C;
  height: 42px;
  width: 42px;
  padding: 2px;
  cursor: pointer;
  border-radius: 7px;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, .8);
}

ul {
  margin-top: 150px;
}

.navigation {
  width: 300px;
  height: 100vh;
  z-index: 100;
  overflow: auto;
  user-select: none;
  position: absolute;
  transition: left ease 0.5s;
  background-position: center;
  background-color: #042331;
  background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad68b41e-972e-434c-96f7-4c36352c738b/f18923fa-eb61-4ca2-a369-39df9e35a0ed.jpg');
  animation: gradient-move 110s ease alternate infinite;

}

.btn {
  top: 20px;
  margin-left: 150px;
  transition: .7s;
  position: sticky;
}

.open-navigation {
  left: 0px;
}

.close-navigation {
  left: -300px;
}

.open-btn {
  margin-left: 220px;
}

.close-btn {
  margin-left: 150px;
}

#sidebar h1 {
  color: #ffffff;
  font-size: 22px;
  line-height: 70px;
  text-align: center;
  background-color: #203549;
}

@media screen and (max-width: 768px) {
  .navigation {
    width: 250px;
    transition: left ease 0.37s;
  }

  .close-navigation {
    left: -250px;
  }

  .open-btn {
    margin-left: 190px;
  }
}

@keyframes gradient-move {
  0% {
    background-position: 10% 10%;
  }
  100% {
    background-position: 50% 100%;
  }
}

</style>