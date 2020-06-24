<template>
  <van-count-down :time="time" />
</template>

<script>
export default {
  data() {
    return {
      time: 0
    };
  },
  created () {
      let curTime = new Date();
      let secAday = 24 * 60 * 60 * 1000;
      let endTime = curTime.getTime() + secAday;
      endTime = Math.floor(endTime/secAday) * secAday;
      this.time = endTime - curTime.getTime() + curTime.getTimezoneOffset()* 60 * 1000;
  }
};
</script>

<style scoped>
.van-count-down {
  height: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #4d4d4d;
  font-weight: normal;
}
</style>