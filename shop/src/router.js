import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'

const Cart = () => import('./views/Cart.vue')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
      },
      beforeEnter: function (to, from, next) {
        next()
        // if(isLogin){
        //   next()
        // }else{
        //   next('/login')
        // }
      }
    },
    {
      path: '/product/:productId?',
      name: 'product',
      children: [
        { path:'review',component: Review},
        // product/:productId?/review
        { path: 'detail', component: Detail }
        // product/:productId?/detail
      ]
    }
  ]
})
