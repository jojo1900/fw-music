import { createRouter, createWebHistory } from 'vue-router'
import Recommend from "@/views/recommend";
import Singer from "@/views/singer";
import TopList from "@/views/top-list";
import Search from "@/views/search";
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  },
]
//创建路由对象： router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router