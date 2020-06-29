import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appRefuse: Boolean, //判定首页顶部'建议使用app'的提示框，显示与否
    pathName: '',
    /* 测试用户信息 */
    usrInfo: {
      login: false,
      name: 'HuaWei',
      pwd: 'huawei',
      usrHeader: require('../../public/imgs/cat.jpg')
    },
    myCart:[

    ],
    num:0
  },
  mutations: {
    /* app显示控制 */
    appRefused (state) {
      state.appRefuse = true;
    },
    appReceive (state) {
      state.appRefuse = false;
    },
    currentPath (state, str) {
      state.pathName = str;
    },
    login (state) {
      state.usrInfo.login = true;
      localStorage.setItem ('login', JSON.stringify(true));
    },
    addCart(state,payload){
        let product = state.myCart.find(product => product.name === payload.name)
        if(product){
            this.commit('addCount',payload.name)
        }else{
            state.myCart.push(payload);
        }
    },
    addCount(state,name){
      for(let i = 0;i<state.myCart.length;i++){
        if(state.myCart[i].name == name){
          state.myCart[i].count++;
          break;
        }
      }
    },
    dltItem (state) {
      for (let i = 0; i < state.myCart.length; i++) {
        if ( state.myCart[i].checked ) {
          state.myCart.splice (i, 1);
          i--;
        }
      }
    },
    totalCount(state,payload){
      state.num = payload;
    }
  }
})
