import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// 引入全局样式文件（实体CSS）
import '@/assets/scss/index.scss'
import router from './router'

const app = createApp(App)
app.use(store).use(router).mount('#app')
