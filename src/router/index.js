import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

import Classify from '../views/ClassifyView.vue'
import Cart from '../views/ShoppingCart.vue'
import Mine from '../views/MineView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import SearchView from '../views/SearchView.vue'
import Discover from '../views/Discover.vue'

Vue.use(VueRouter)

  const routes = [
    /* 首页路由 */
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path:'/product',
      component:ProductDetail
    },
    {
      path: '/search',
      component: SearchView
    },
    {
      path: '/discover',
      component: Discover
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
