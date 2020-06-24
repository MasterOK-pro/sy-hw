import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

import Classify from '../views/ClassifyView.vue'
import Cart from '../views/ShoppingCart.vue'
import Mine from '../views/MineView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import SearchView from '../views/SearchView.vue'
import Discover from '../views/Discover.vue'
import DengLu from '../views/DengLu.vue'

Vue.use(VueRouter)

const routes = [
  /* 首页路由 */
  {
    path: '/',
    component: HomeView,
    meta: {
      title: '华为商城（VMALL.COM）_华为手机、荣耀手机、官网正品保障'
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      title: '分类 - 华为商城官网'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车 - 华为商城官网'
    }
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      title: '我的 - 华为商城官网'
    }
  },
  {
    path: '/product',
    component: ProductDetail,
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/search',
    component: SearchView,
    meta: {
      title: '搜索商品 - 华为商城官网'
    }
  },
  {
    path: '/discover',
    component: Discover,
    meta: {
      title: '发现频道 - 华为商城官网'
    }
  },
  {
    path: '/login',
    component: DengLu,
    meta: {
      title: '华为帐号-短信验证码登录'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
