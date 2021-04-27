import { createRouter, createWebHistory } from 'vue-router'
import Recommend from "@/views/recommend";
import Singer from "@/views/singer";
import TopList from "@/views/top-list";
import Search from "@/views/search";
const routes = [
  {
    path: '/recommend',
    compnent: Recommend
  },
  {
    path: '/singer',
    compnent: Singer
  },
  {
    path: '/top-list',
    compnent: TopList
  },
  {
    path: '/search',
    compnent: Search
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router