<template>
  <swiper class="swiper">
    <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review1.png" alt="">
        </div>
    </swiper-slide>
     <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review1.png" alt="">
        </div>
    </swiper-slide>
     <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review2.png" alt="">
        </div>
    </swiper-slide>
     <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review3.png" alt="">
        </div>
    </swiper-slide>
     <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review4.png" alt="">
        </div>
    </swiper-slide>
     <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review5.png" alt="">
        </div>
    </swiper-slide>
     <swiper-slide>
        <div class="swiper-box">
            <img src="../assets/images/review6.png" alt="" class="last-img">
        </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-default",
  title: "Default",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
          slidesPerView :1.2,
          freeMode:true,
          freeModeMomentum:false
      }
    };
  }
};
</script>

<style scoped>

.swiper-box {
  height: 6rem;
  margin-right: 0.6rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
}

.swiper-box img{
  height: 6.2rem;
}

.last-img {
  height: 6.2rem;
  width: 6.2rem;
}


</style>