<template>
  <div class="discover-view">
    <h1 class="discover-head">发现频道</h1>
    <div class="img-area">
      <img src="../../public/imgs/discover.jpg" alt />
    </div>
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";
export default {
  components: {
    HomePageFooter
  }
};
</script>

<style scoped>
.discover-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.discover-head{
  padding: 0 0.8rem;
  height: 2rem;
  color: #191919;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
  background-color: #ffffff;
  font-weight: normal;
}
.img-area {
  max-width: 100%;
  width: 100%;
  flex-grow: 1;
  overflow: auto;
}
.img-area img {
  width: 100%;
}
.img-area::-webkit-scrollbar {
  display: none;
}
</style>