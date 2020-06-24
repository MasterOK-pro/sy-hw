import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appRefuse: Boolean, //判定首页顶部'建议使用app'的提示框，显示与否
    pathName: ''
  },
  mutations: {
    /* app显示控制 */
    appRefused (state) {
      state.appRefuse = true;
      localStorage.setItem('appRefuse',JSON.stringify(state.appRefuse));
    },
    appReceive (state) {
      state.appRefuse = false;
    },
    currentPath (state, str) {
      state.pathName = str;
    }
  }
})
