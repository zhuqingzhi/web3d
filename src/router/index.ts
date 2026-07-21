import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/web3d/'),
})
export default router
