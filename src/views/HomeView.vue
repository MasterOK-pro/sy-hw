<template>
  <div class="homeview">
    <app-hint></app-hint>
    <home-page></home-page>
    <!-- app首页底部导航按钮 -->
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePage from "../components/HomePage.vue";
import HomePageFooter from "../components/HomePageFooter.vue";
import AppHint from "../components/AppHint.vue";

export default {
  data() {
    return {};
  },
  components: {
    HomePage: HomePage,
    HomePageFooter: HomePageFooter,
    AppHint
  }
};
</script>

<style scoped>
.homeview {
  height: 100%;
  font-size: 2rem;
  color: red;
  display: flex;
  flex-direction: column;
}
</style>