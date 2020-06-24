<template>
  <div class="app-hint" v-if="!show">
    <span class="app-hint-close" @click="$store.commit('appRefused')"></span>
    <span class="app-hint-logo"></span>
    <span class="hint-mid-text">
      <p>来华为商城APP</p>
      <p>立即领取新人专享见面礼</p>
    </span>
    <span class="hint-open-app">
      <span>打开App</span>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.state.appRefuse;
    }
  }
};
</script>

<style scoped>
.app-hint {
  height: 2.7rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #333;
  flex-shrink: 0;
}
.app-hint-close {
  width: 2rem;
  height: 100%;
  background-image: url(../../public/imgs/app-hint-close.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 0.9rem;
  flex-shrink: 0;
}
.app-hint-logo {
  width: 2rem;
  height: 100%;
  background-image: url(../../public/imgs/logo_vmall.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  flex-shrink: 0;
}
.hint-mid-text {
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin-left: 0.5rem;
  width: 9rem;
}
.hint-mid-text p {
  height: 0.93rem;
  font-size: 0.65rem;
  vertical-align: top;
}
.hint-mid-text p:last-child {
  margin-top: 0.1rem;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.6);
}
.hint-open-app {
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.hint-open-app span {
  font-size: 0.55rem;
  display: inline-block;
  margin-right: 0.6rem;
  height: 1.1rem;
  line-height: 1.1rem;
  color: #333;
  overflow: hidden;
  background: #fff;
  padding: 0 0.4rem;
  border-radius: 0.15rem;
}
</style>