<template>
  <div class="classify">
    <div class="test">classify</div>
    <!-- app首页底部导航按钮 -->
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";

export default {
  components: {
    HomePageFooter: HomePageFooter
  }
};
</script>

<style scoped>
.classify {
  height: 100%;
  font-size: 1rem;
  color: green;
  display: flex;
  flex-direction: column;
}
.test {
  margin-top: 50px;
  flex-grow: 1;
}
</style>>
