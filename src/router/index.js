import Vue from 'vue'
import VueRouter from 'vue-router'
import Ping from "../components/Ping";
import echartest from "../components/echartest";
import normalline from "../components/normalline";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'echartest',
    component: echartest
  },
  {
    path: '/normalline',
    name: 'normalline',
    component: normalline,
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },

]

const router = new VueRouter({
  routes
})

export default router
