import {createApp} from 'vue'
import App from './App.vue'
import {store} from "./store";
import 'animate.css'
import './assets/css/global.css'
import {router} from "./router/index.js";



const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
