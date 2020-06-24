  
<template>
  <swiper class="swiper swiper-no-swiping" :options="swiperOption">
    <swiper-slide class="swiper-item">
      <a href="https://mw.vmall.com/content/detail?id=5434">华为畅享20 Pro新机试用申请中</a>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <a href="https://m.vmall.com/content/detail?id=5440">【选品试用】艾美特智能空气循环扇试用申请中，等你来</a>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <a href='https://m.vmall.com/content/detail?id=5462'>1999元起！畅享20 Pro给你带来5G全场景畅快体验</a>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <a href='https://mw.vmall.com/content/detail?id=5462'>1999元起！畅享20 Pro新品发布</a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-vertical",
  title: "Vertical slider",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        noSwiping: true
      }
    };
  }
};
</script>
<style scoped>
.swiper {
  /* padding-right: 1.5rem; */
  height: 2rem;
  line-height: 2rem;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
}
.swiper a {
  width: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.6rem;
  color: #4d4d4d;
  padding-left: 1rem;
}
.swiper a::before {
  content: "";
  position: absolute;
  left: 0.4rem;
  top: 50%;
  margin-top: -0.1rem;
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  border-radius: 0.2rem;
  background-color: rgba(155, 155, 155, 0.5);
}
</style>