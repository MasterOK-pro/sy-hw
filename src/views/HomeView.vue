<template>
  <div class="homeview">
    <home-page></home-page>
    <!-- app首页底部导航按钮 -->
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePage from "../components/HomePage.vue"
import HomePageFooter from "../components/HomePageFooter.vue"

export default {
  data() {
    return {
      inHome: Boolean
    };
  },
  components: {
    HomePage: HomePage,
    HomePageFooter: HomePageFooter
  },
  created() {
    this.inHome = true;
  }
};
</script>

<style>
.homeview {
  height: 100%;
  font-size: 2rem;
  color: red;
  display: flex;
  flex-direction: column;
}
.homeview p {
  position: absolute;
}
</style>