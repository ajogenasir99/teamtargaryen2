import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import CartPage from '../components/CartPage.vue'
import homepage from '../components/homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homepage
    },
   {
     path: '/home',
     name: 'shophome',
     component: home
   }, {
     path: '/cart',
     name: 'cart',
     component: CartPage
   }
  ]
})
