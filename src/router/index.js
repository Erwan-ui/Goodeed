import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Donation from '../components/Donation'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donation',
    name: 'Donation',
    component: Donation
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
