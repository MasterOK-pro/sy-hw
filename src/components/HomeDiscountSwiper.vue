
<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="discout-item">
      <a href>
        <div class="img-area">
          <img src="../../public/imgs/home-discount-pad.png" alt />
          <p>MatePad Pro</p>
        </div>
        <p class="title-area">预定省100</p>
      </a>
    </swiper-slide>
    <swiper-slide class="discout-item">
      <a href="https://m.vmall.com/product/ord-2701010019002.html">
        <div class="img-area">
          <img src="../../public/imgs/home-discount-v30.png" alt />
          <p>荣耀V30</p>
        </div>
        <p class="title-area">最高优惠800</p>
      </a>
    </swiper-slide>
    <swiper-slide class="discout-item">
      <a href="https://m.vmall.com/product/ord-2901010010603.html">
        <div class="img-area">
          <img src="../../public/imgs/home-discount-watch.png" alt />
          <p>华为手表GT 2</p>
        </div>
        <p class="title-area">预定立省50</p>
      </a>
    </swiper-slide>
    <swiper-slide class="discout-item">
      <a href>
        <div class="img-area">
          <img src="../../public/imgs/home-discount-honorbook.png" alt />
          <p>荣耀笔记本14</p>
        </div>
        <p class="title-area">最高直降400</p>
      </a>
    </swiper-slide>
    <swiper-slide class="discout-item">
      <a href>
        <div class="img-area">
          <img src="../../public/imgs/home-discount-matebook.png" alt />
          <p>MateBook D 14</p>
        </div>
        <p class="title-area">预定最高省20</p>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4.4,
        freeMode: true,
        freeModeMomentum: false
      }
    };
  }
};
</script>
<style scoped>
.swiper {
  padding: 0 0.3rem 0.4rem 0;
}
.discout-item {
  height: 5.15rem;
  width: 4.08116rem;
}
.discout-item a {
  margin-left: 0.3rem;
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.img-area {
  border-radius: 0.5rem;
  background-color: #fff;
  padding-top: 0.2rem;
  padding-bottom: 0.15rem;
}
.img-area img {
  width: 3.05rem;
  height: 3.05rem;
}
.img-area p {
  color: #999;
  font-size: 0.6rem;
  margin: 0 0.25rem;
  padding: 0.2rem 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 1rem;
}
.title-area {
  font-size: 0.525rem;
  color: #ca141d;
  line-height: 1.2rem;
}
</style>