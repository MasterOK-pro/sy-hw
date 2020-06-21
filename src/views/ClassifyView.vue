<template>
  <div class="classify">
    <!-- <div class="test" @click="toProduct">classify</div> -->
    <!-- app首页底部导航按钮 -->
    <classify-page></classify-page>
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";
import ClassifyPage from "../components/ClassifyPage.vue";

export default {
  components: {
    HomePageFooter: HomePageFooter,
    ClassifyPage
  },
  methods: {
    toProduct() {
      this.$router.push("product");
    }
  }
};
</script>

<style scoped>
.classify {
  height: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}
.test {
  margin-top: 50px;
  flex-grow: 1;
}
</style>>
