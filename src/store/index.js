import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appRefuse: Boolean
  },
  mutations: {
    appRefused (state) {
      state.appRefuse = true;
    }
  }
})
