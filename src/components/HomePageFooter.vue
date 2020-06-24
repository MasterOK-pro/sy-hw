<template>
  <div class="footer">
    <router-link to="/" class="navBtn">
      <div class="navItem home" @click="setPathName('home')" v-if="pathName=='home'" >
        <img src="../../public/imgs/foot-home-active.png" alt />
      </div>
      <div class="navItem" @click="setPathName('home')" v-else>
        <img src="../../public/imgs/foot-home-dis.png" alt />
        <div class="pathTitle" :class="{active:pathName=='home'}">首页</div>
      </div>
    </router-link>
    <router-link to="/classify" class="navBtn">
      <div class="navItem" @click="setPathName('classify')">
        <img src="../../public/imgs/foot-classify-active.png" v-if="pathName=='classify'" alt />
        <img v-else src="../../public/imgs/foot-classify-dis.png" alt />
        <div class="pathTitle" :class="{active:pathName=='classify'}">分类</div>
      </div>
    </router-link>
    <router-link to="/discover" class="navBtn">
      <div class="navItem" @click="setPathName('discover')">
        <img src="../../public/imgs/foot-disc-active.png" v-if="pathName=='discover'" alt />
        <img v-else src="../../public/imgs/foot-disc-dis.png" alt />
        <div class="pathTitle" :class="{active:pathName=='discover'}">发现</div>
      </div>
    </router-link>
    <router-link to="/cart" class="navBtn">
      <div class="navItem" @click="setPathName('cart')">
        <img src="../../public/imgs/foot-cart-active.png" v-if="pathName=='cart'" alt />
        <img v-else src="../../public/imgs/foot-cart-dis.png" alt />
        <div class="pathTitle" :class="{active:pathName=='cart'}">购物车</div>
      </div>
    </router-link>
    <router-link to="/mine" class="navBtn">
      <div class="navItem" @click="setPathName('mine')">
        <img src="../../public/imgs/foot-mine-active.png" v-if="pathName=='mine'" alt />
        <img v-else src="../../public/imgs/foot-mine-dis.png" alt />
        <div class="pathTitle" :class="{active:pathName=='mine'}">我的</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    pathName() {
      return this.$store.state.pathName;
    }
  },
  methods: {
    setPathName(msg) {
      this.$store.commit("currentPath", msg);
    }
  }
};
</script>

<style scoped>
.footer {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f9f9f9;
  height: 2.5rem;
}
.active {
  color: #ca141d !important;
}
.navBtn {
  width: 20%;
  text-decoration: none;
  display: block;
}
.navItem {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navBtn img {
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.3rem auto 0.2rem;
}
.pathTitle {
  width: 100%;
  height: 0.5rem;
  font-size: 0.5rem;
  font-weight: 400;
  font-stretch: normal;
  line-height: 0.5rem;
  letter-spacing: 0;
  color: #787878;
  margin-bottom: 0.3rem;
  text-align: center;
}
.navItem.home img {
  margin: 0;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0 0.3rem 0 0.75rem;
}
</style>