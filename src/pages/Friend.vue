<template>
  <div id="friend">
    <FriendInfo
        v-for="(f, i) in Friends"
        :friend="f"
        :key="'friends'+i"
    />
  </div>
</template>

<script setup>

import FriendInfo from "../components/FriendInfo.vue";
import {Friends} from '../assets/lgzzk_config.json';


</script>

<style scoped>
#friend {
  width: 50%;
  height: 50%;
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 10px;
}

#friend::after {
  content: "";
  align-self: start;
  width: 100%;
  height: inherit;
}

</style>