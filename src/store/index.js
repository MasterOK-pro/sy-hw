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
    // myCart:[
    //   {
    //     img: require("../assets/images/cart-img-3.png"),
    //     name:
    //       "HUAWEI P40 Pro 5G 全网通 8GB 128GB（零度白）",
    //     config: "零度白,5G全网通 8GB+128GB,官方标配",
    //     price: "5988",
    //     count: 1
    //   },
    //   {
    //     img: require("../assets/images/cart-img-2.png"),
    //     name:
    //       "HUAWEI P40 Pro+ 5G 全网通 8GB 128GB（陶瓷黑）",
    //     config: " 幻夜黑,Pro 8GB+128GB,官方标配",
    //     price: "8888",
    //     count: 1
    //   },
    //   {
    //     img: require("../assets/images/cart-img-1.png"),
    //     name: "荣耀30 Pro 50倍超稳远摄 超感光高清夜拍 双模5G 麒麟990 5G SoC 8GB 128GB 幻夜黑",
    //     config: "竞速蓝,全网通 6GB+128GB,官方标配",
    //     price: "3999",
    //     count: 1
    //   }
    // ]
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
    // addCart(state,payload){
    //   state.myCart.push(payload);
    // },
    // addCount(state,name){
    //   for(let i = 0;i<state.myCart.length;i++){
    //     if(state.myCart[i].name == name){
    //       state.myCart[i].count++;
    //     }
    //   }
      
    // }
  }
})
