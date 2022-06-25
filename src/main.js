import {createApp} from 'vue'
import App from './App.vue'
import {store} from "./store";
import 'animate.css'
import './assets/css/global.css'
import {router} from "./router/index.js";


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
