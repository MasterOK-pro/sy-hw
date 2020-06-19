<template>
  <div class="footer">
    <router-link to="/" class="navBtn">
      <img src="../../public/imgs/app-home-home.png" alt />
    </router-link>
    <router-link to="/classify" class="navBtn">
      <img src="../../public/imgs/app-home-classify.png" alt />
    </router-link>
    <a href="https://m.vmall.com/content/index" class="navBtn">
      <img src="../../public/imgs/app-home-discover.png" alt />
    </a>
    <router-link to="/cart" class="navBtn">
      <img src="../../public/imgs/app-home-cart.png" alt />
    </router-link>
    <router-link to="/mine" class="navBtn">
      <img src="../../public/imgs/app-home-mine.png" alt />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.navBtn {
  width: 20%;
  text-decoration: none;
  display: flex;
}
.navBtn img {
  width: 100%;
}
</style>