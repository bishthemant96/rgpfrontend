//Importing external packages.
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "chunk-confirmation" */'@/views/About.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "chunk-confirmation" */'@/views/Projects.vue')
  },
  {
    path: '/Research',
    name: 'Research',
    component: () => import(/* webpackChunkName: "chunk-confirmation" */'@/views/Research.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
