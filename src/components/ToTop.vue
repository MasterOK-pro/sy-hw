<template>
  <a v-if="show" @click="goTop"></a>
</template>

<script>
export default {
  props:['show'],
  methods: {
    goTop () {
      event.target.parentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
a {
  background: url(../../public/imgs/button-toTop.png) no-repeat center;
  display: inline-block;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-size: 100% 100%;
  position: fixed;
  z-index: 103;
  bottom: 2.9rem;
  right: 0.4rem;
}
</style>