<template>
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions" >
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review1.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review1.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review2.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review3.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review4.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review5.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-box">
        <img src="../assets/images/review6.png" alt class="last-img" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1.2,
        freeMode: true,
        freeModeMomentum: false
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 6.2rem;
  padding-left: 0.6rem;
}
.swiper-box {
  height: 6rem;
  width: fit-content;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
}
.swiper-slide {
  width: 15.6rem !important;
}
.swiper-box img {
  height: 6.2rem !important;
}

.last-img {
  height: 6.2rem;
  width: 6.2rem;
}
</style>