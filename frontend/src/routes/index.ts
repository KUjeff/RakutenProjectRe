import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {name: 'login',
     path: '/login',
     component: () => import('../views/LoginView.vue'),
    }
  ]
})

export default router