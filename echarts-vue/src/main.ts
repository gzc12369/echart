import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '@/assets/css/reset.css'

//引用插件
import "lib-flexible/flexible.js"

createApp(App).use(router).mount('#app')
