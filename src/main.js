import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
// 引入全局样式文件（实体CSS）
import '@/assets/scss/index.scss'

createApp(App).use(store).mount('#app')
