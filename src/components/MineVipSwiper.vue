<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="content-swiper vipright-list">
    <swiper-slide v-for="(item, index) of list" :key="'item'+index">
      <div class="vipright-item">
        <div class="vipright-item-left">
          <p class="vipright-item-value">
            <span>￥</span>
            <span>{{item.value}}</span>
          </p>
          <p class="vipright-item-desc">{{item.desc}}</p>
        </div>
        <img src="../../public/imgs/mine-adver-receive.png" alt class="vipright-item-right" />
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
        slidesPerView: 2.1,
        freeMode: true,
        freeModeMomentum: false
      }
    };
  },
  props: ["list"],
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style scoped>
/* 权益滑块 */
.content-adver-box.vipright {
  padding: 0 0 0.4rem 0.5rem;
}
.content-adver-box.vipright .content-swiper {
  padding: 0;
}
.vipright-list,.swiper-wrapper,.swiper-slide
,.vipright-item,.vipright-item-left,
.vipright-item-right{
  height: 100%;
}
.vipright-list .van-swipe-item {
  padding: 0.4rem 0.25rem;
}
.vipright-item {
  padding: 0.4rem 0.25rem;
  max-height: 100%;
  display: flex;
}
.vipright-item-left {
  width: 5.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  box-shadow: 0px 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.04);
}
.vipright-item-left p {
  margin-left: 0.5rem;
}
.vipright-item-value {
  color: #ca141d;
  font-weight: bold;
  font-size: 0.75rem;
}
.vipright-item-value span:last-child {
  font-size: 1.5rem;
}
.vipright-item-desc {
  width: 5.05rem;
  font: 0.5rem/1.3 normal;
  color: #666;
}
.vipright-item img {
  margin-left: 0.1rem;
  width: 1.7rem;
}
</style>