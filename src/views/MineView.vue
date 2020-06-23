<template>
  <div class="mine">
    <div id="top"></div>
    <mine-body></mine-body>
    <!-- app首页底部导航按钮 -->
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";
import MineBody from "../components/MineBody.vue";

export default {
  components: {
    HomePageFooter: HomePageFooter,
    /* es6简写，组件选项对象和自定义标签名同名 */
    MineBody
  },
  activated () {
    this.$store.commit('currentPath', 'mine');
  }
};
</script>

<style scoped>
.mine-mid-body {
  flex-grow: 1;
  overflow-y: auto;
}
.mine {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f8f8f8;
}
</style>>
