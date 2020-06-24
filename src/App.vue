<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  created() {
    /* 获取是否已经拒绝使用客户端的记录 */
    if (localStorage.getItem('appRefuse')) {
      this.$store.state.appRefuse = JSON.parse(localStorage.getItem('appRefuse'));
    } else {
      this.$store.state.appRefuse = false;
    }
  }
};
</script>
<style>
/* app样式初始化 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}
</style>
