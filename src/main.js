import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import {Swipe, SwipeItem, Icon} from 'vant';
Vue.use(Vant);
import './css/style.css'

import { Icon,Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
Vue.use(Icon)
Vue.use(Swipe);
Vue.use(SwipeItem);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
