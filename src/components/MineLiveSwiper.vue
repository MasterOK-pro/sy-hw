<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="content-swiper live-list">
    <swiper-slide>
        <img class="vipright-item" src="../../public/imgs/mine-live-video.png"/>
    </swiper-slide>
    <swiper-slide>
        <img class="vipright-item" src="../../public/imgs/mine-live-music.png"/>
    </swiper-slide>
    <swiper-slide>
        <img class="vipright-item" src="../../public/imgs/mine-live-huabi.png"/>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2.1,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style>
/* 套用权益滑块的样式 */
.content-adver-box.vipright {
  padding: 0 0 0.4rem 0.5rem;
}
.content-adver-box.vipright .content-swiper {
  padding: 0;
}
.vipright-list .van-swipe-item {
  padding: 0.4rem 0.25rem;
}
.vipright-item {
  /* padding-left: -0.25rem; */
  max-height: 100%;
  display: flex;
}
.live-list img{
  width: 7.3rem;
}
</style>