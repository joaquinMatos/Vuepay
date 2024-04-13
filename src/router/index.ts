import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import TpagosView from '@/views/TpagosView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/tpagos',
      name: 'tpagos',
      component: TpagosView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
