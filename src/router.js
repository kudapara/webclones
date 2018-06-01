import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from './components/Landing'
import Coinbase from './components/HelloWorld'
import GmailRemake from './components/GmailRemake'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Landing,
    },
    {
      path: '/coinbase',
      component: Coinbase,
    },
    {
      path: '/gmail',
      component: GmailRemake,
    }
  ]
})