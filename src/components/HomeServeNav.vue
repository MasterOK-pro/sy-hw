<template>
  <swiper class="swiper serve-nav" :options="swiperOption">
    <swiper-slide>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:0%"></i>
          <p class="serve-title">会员领券</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:11.11%"></i>
          <p class="serve-title">华为数码</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:22.22%"></i>
          <p class="serve-title">5G频道</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:33.33%"></i>
          <p class="serve-title">荣耀数码</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:44.44%"></i>
          <p class="serve-title">以旧换新</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:55.55%"></i>
          <p class="serve-title">邀请有礼</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:66.66%"></i>
          <p class="serve-title">直播特惠</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:77.77%"></i>
          <p class="serve-title">众测</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:88.88%"></i>
          <p class="serve-title">积分商城</p>
      </div>
      <div class="serve-item">
          <i class="serve-img" style="background-position-x:99.99%"></i>
          <p class="serve-title">生态产品</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      }
    };
  }
};
</script>
<style scoped>
.swiper-slide{
    display: flex;
    align-items: center;
    padding-top: 1.8rem;
}
.serve-item{
    padding: 0 0.2rem 0.05rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3.52rem;
}
.serve-title{
    font-size: 0.6rem;
    color: #333;
    text-align: center;
}
.serve-img{
    height: 1.5rem;
    width: 1.5rem;
    background-image:url('../../public/imgs/home-serve-spirit.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 0.2rem;
}
</style>
<style>
.serve-nav .swiper-pagination{
    position: absolute;
}
</style>