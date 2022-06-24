<template>
  <div id="headText" ref="headText"></div>
  <div ref="a"></div>
</template>

<script setup>
import {TyperText} from '../assets/lgzzk_config.json';
import {ref} from "vue";
import {random} from "../utils/tool.js";

const headText = ref(null)

let start = null,
    textIndex = 0,
    headIndex = 0,
    interval = 50,
    isDeleting = false

function typewriting(time) {
  window.requestAnimationFrame(typewriting);
  if (!start) start = time;
  let progress = time - start;
  if (progress > interval + random(0, interval) % interval) {
    start = time;
    if (isDeleting) {
      --textIndex
      let s = [...TyperText[headIndex]].slice(0, textIndex).toString()
      headText.value.innerText = s.replace(/,/g, "")
    } else {
      ++textIndex
      let s = [...TyperText[headIndex]].slice(0, textIndex).toString()
      headText.value.innerText = s.replace(/,/g, "")
    }
    if (textIndex === TyperText[headIndex].length) {
      start += 4000
      isDeleting = true;
    }
    if (textIndex === 0) {
      start += 1000
      isDeleting = false
      headIndex = ++headIndex % TyperText.length
    }
  }
}

window.requestAnimationFrame(typewriting)

</script>

<style scoped>
#headText {
  color: #FEFEFE;
  padding: 10px 0;
  font-size: 36px;
  height: 80px;
  transition: .5s;
  font-weight: 900;
  text-align: center;
  user-select: none;
  font-family: "Segoe UI",serif;
}

#headText::after {
  content: "";
  margin: 0 5px;
  border-left: 5px #ffffff solid;
  border-radius: 10px;
  animation: mark .6s step-end infinite;
}

@media screen and (max-width: 768px) {
  #headText {
    font-size: 30px;
  }
}

@keyframes mark {
  0% {
    border-color: rgba(255, 255, 255, 1);
  }
  50% {
    border-color: rgba(255, 255, 255, 0);
  }
}
</style>