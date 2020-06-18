import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/style.css'

import { Icon } from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.css'
Vue.use(Icon)

import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
