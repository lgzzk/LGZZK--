import {createApp} from 'vue'
import App from './App.vue'
import 'animate.css'
import './assets/css/global.css'
import {router} from "./router/index.js";
import {MotionPlugin} from "@vueuse/motion";
import {createPinia} from "pinia";


createApp(App)
    .use(router)
    .use(createPinia())
    .use(MotionPlugin)
    .mount('#app')
