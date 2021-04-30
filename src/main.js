import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// 引入全局样式文件（实体CSS）
import '@/assets/scss/index.scss'
import Vue from 'vue'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
