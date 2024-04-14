import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import TpagosView from '@/views/TpagosView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import GeneraPago from '@/views/GpagosView.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Gpago',
      name: 'Gpago',
      component: GeneraPago
    }
  ]
})

export default router
