<template>
  <div class="mine">
    <div class="mine-topbar">
      <div class="mine-topbar-left">
        <img src="../../public/imgs/app-mine-user-dflt.png" alt="" class="topbar-left-user">
        <router-link to="">登录/注册</router-link>
      </div>
      <div class="mine-topbar-right">
        <div>设置</div>
        <div>消息</div>
      </div>
    </div>
    <mine-mid-body></mine-mid-body>
    <!-- app首页底部导航按钮 -->
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";
import MineMidBody from '../components/MineMidBody.vue'

export default {
  components: {
    HomePageFooter: HomePageFooter,
    /* es6简写，组件选项对象和自定义标签名同名 */
    MineMidBody
  }
};
</script>

<style scoped>
.mine {
  height: 100%;
  color: green;
  display: flex;
  flex-direction: column;
  position: relative;
}
/* 登录页顶栏 */
.mine-topbar{
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(253, 57, 57);
  box-sizing: content-box;
  position: fixed;
  top: 0;
}

/* 顶栏左侧部分 */
.mine-topbar-left{
  height: 1.2rem;
  margin-left: .9rem;
  display: flex;
  align-items: center;
}
.mine-topbar-left a{
  font-size: 0.8rem;
  text-decoration: none;
  color: #fff;
  line-height: 100%;
}
.mine-topbar-left img{
  max-height: 100%;
  margin-right: 0.5em;
}

/* 顶栏右侧部分 */
.mine-topbar-right{
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-size: 0.5rem;
  color: #fff;
}
.mine-topbar-right div{
  padding-right: 0.5rem;
}
</style>>
