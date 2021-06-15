import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// 引入全局样式文件（实体CSS）
import '@/assets/scss/index.scss'
import router from './router'
import lazyPlugin from 'vue3-lazy'

const app = createApp(App)
app.use(store).use(router).use(lazyPlugin, {
    loading: require('@/assets/images/default.png')
}).mount('#app')