import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
