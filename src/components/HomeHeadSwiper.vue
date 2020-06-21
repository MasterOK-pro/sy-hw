  
<template>
  <swiper class="swiper home-head" :options="swiperOption">
    <swiper-slide>
      <img src="../../public/imgs/home-head-swiper-0.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/imgs/home-head-swiper-1.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/imgs/home-head-swiper-2.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/imgs/home-head-swiper-3.jpg" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-space-between",
  title: "Space between slides",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    };
  }
};
</script>
<style scoped>
.swiper-slide {
  padding: 0 0.3rem;
  height: 7.35rem;
}
.swiper-slide img {
  border-radius: 0.5rem;
  max-height: 100%;
}
.swiper-pagination {
  bottom: 0;
  left: 35%;
}
</style>
<style>
.home-head .swiper-pagination-bullet {
  width: 0.2em;
  height: 0.2em;
  background: none!important;
  border: 0.025rem solid #fff!important;
  opacity: 1;
  margin: 0 0.2rem;
}
.home-head .swiper-pagination-bullet-active{
    background-color: #fff!important;
}
</style>