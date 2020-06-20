<template>
  <div class="product-container">
    <div class="header">
      <div class="back" @click="back"></div>
      <div class="nav">
        <div class="nav-detail">商品</div>
        <div class="nav-detail">评价</div>
        <div class="nav-detail">参数</div>
        <div class="nav-detail">详情</div>
      </div>
      <div class="menu"></div>
    </div>
    <!-- 轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-1.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-2.png" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-3.png" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-4.png" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-5.png" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-6.png" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-7.png" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img-div">
          <img src="../assets/images/swiper-8.png" alt />
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/8</div>
      </template>
    </van-swipe>
    <!-- 价格及描述 -->
    <div class="pro-meta-area">
      <div class="pro-meta">
        <p class="p-price">
          <span class="pro-price">
            <small>￥</small>
            <span>5988</span>
          </span>
          <span class="detail-span">HUAWEI P40 Pro 5G 全网通 8GB+128GB（零度白）</span>
        </p>
      </div>

      <!-- 促销信息 -->
      <div class="pro-box">
        <p class="box-label">促销</p>
        <div class="pro-box-content">
          <div class="pro-content">
            <span class="pro-btn">一站式换新</span>
            <p>APP专享，最高补贴1000元</p>
          </div>
          <div class="pro-content">
            <span class="pro-btn">整点赠礼</span>
            <p>0点/10点/16点/20点下单前100名赠mini 蓝牙音箱</p>
          </div>
          <div class="pro-content">
            <span class="pro-btn b-1">商品赠券</span>
            <span class="pro-btn b-2">商品赠券</span>
            <span class="pro-btn b-3">分期免息</span>
            <span class="pro-btn b-4">赠送积分</span>
          </div>
        </div>

        <div class="pro-menu"></div>
      </div>
    </div>

    <div class="pro-meta-area2">
      <div class="pro-meta-area2-one">
        <!-- 颜色 -->
        <div class="one-color">
          <p class="box-label">颜色</p>
          <div class="color-choice">
            <div class="color-detail">亮黑色</div>
            <div class="color-detail">深海蓝</div>
            <div class="color-detail">晨曦金</div>
            <div class="color-detail">零度白</div>
            <div class="color-detail">冰霜银</div>
          </div>
        </div>
        <!-- 版本 -->
        <div class="one-color">
          <p class="box-label">版本</p>
          <div class="version-choice">
            <div class="version-detail">5G全网通 8GB+256GB</div>
            <div class="version-detail">5G全网通 8GB+128GB</div>
            <div class="version-detail">5G全网通 6GB+128GB</div>
          </div>
        </div>
        <!-- 类型 -->
        <div class="one-color">
          <p class="box-label type-label">类型</p>
          <div class="version-detail type-detail">官方标配</div>
        </div>

        <!-- 数量 -->
        <div class="one-color">
          <p class="box-label type-label">数量</p>
          <div class="count-div">
            <div class="minus"></div>
            <input type="text" value="1" readonly />
            <div class="plus"></div>
          </div>
        </div>

        <!-- 保障 -->
        <div class="promt-box">
          <p class="box-label type-label">保障</p>
          <div class="pro-promt">
            <span>选购</span>
            <span class="pro-promt-item">无忧服务</span>
            <span class="pro-promt-item">碎屏宝</span>
            <span class="pro-promt-item">延长宝</span>
          </div>
          <div class="pro-menu"></div>
        </div>

        <!-- 免息 -->
        <div class="promt-box">
          <p class="box-label type-label">免息</p>
          <div class="pro-promt">花呗/掌上生活分期直购，最高享12期免息</div>
          <div class="pro-menu"></div>
        </div>
      </div>
    </div>

    <!-- 搭配 -->
    <div class="match-box">
      <p class="box-label type-label">搭配</p>
      <div class="match-content">
        <div class="match-img">
          <img class src="../assets/images/match-1.png" alt />
        </div>
        <em class="iconadd"></em>
        <div class="match-img">
          <img class src="../assets/images/match-2.png" alt />
          <span class="sale-price">省150</span>
        </div>
        <em class="iconadd"></em>
        <div class="match-img">
          <img class src="../assets/images/match-3.png" alt />
          <span class="sale-price">省100</span>
        </div>
        <em class="iconadd"></em>
        <div class="match-img">
          <img class src="../assets/images/match-4.png" alt />
          <span class="sale-price">省30</span>
        </div>
        <div class="qianjin"></div>
      </div>
    </div>

    <!-- 送至 -->

    <div class="pro-meta-address">
      <p class="box-label">送至</p>
      <div class="related-box">
        <div class="related-area">
          <span class="addressSelect">江苏 苏州市 沧浪区</span>
        </div>
        <div class="arrived-tips">
          <span class="xianhuo">现货</span>
          <span>，今天21:59前付款，预计6月21日（周日）送达</span>
        </div>
      </div>
      <div class="pro-menu"></div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    back() {
      window.history.go(-1);
    },
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style>
/* 最大宽度介于414-361的设备：iphone(678)p */
@media only screen and (max-width: 414px) and (min-width: 361px) {
  html {
    font-size: 23px !important;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.product-container {
  height: 100%;
  background-color: rgb(249, 249, 249);
  overflow: auto;
  /* background-color: blueviolet; */
}

/* 头部导航样式 */
.header {
  height: 2rem;
  padding: 0 0.8rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header div {
  cursor: pointer;
  color: #191919;
  font-size: 0.75rem;
}

.back {
  width: 1.2rem;
  height: 1.2rem;
  background-image: url("../assets/images/back2.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.nav {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
}
.menu {
  width: 1.2rem;
  height: 1.2rem;
  background-image: url("../assets/images/elip2.png");
  background-size: cover;
}

/* 轮播图样式 */
.custom-indicator {
  position: absolute;
  right: 1.455em;
  bottom: 1.455em;
  padding: 0.1rem 0.33rem 0 0.33rem;
  font-size: 0.6rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.15);
  width: 2.24rem;
  height: 0.95rem;
  font-style: italic;
  text-align: center;
  border-radius: 0.45rem;
  box-shadow: none;
  /* min-width: 2.636em; */
}

.img-div {
  width: 100%;
  height: 17rem;
  background-color: #fff;
}

img {
  width: 100%;
  vertical-align: top;
  height: 100%;
}

.pro-meta-area {
  margin-bottom: 0.5rem;
  width: 100%;
  height: 10.51rem;
  background-color: #fff;
}

.pro-meta {
  padding: 0.5rem 0.8rem 0.5rem 0;
  margin-left: 0.8rem;
  border: 1px solid transparent;
  border-bottom: 1px solid rgba(234, 234, 234, 0.5);
}
.p-price {
  color: #e01d20;
  padding: 0 0 0.3em;
  font-weight: 700;
}

.detail-span {
  color: #333333;
  font-size: 0.75em;
  line-height: 1.3em;
  font-weight: bold;
  max-height: 2.6em;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  top: 0.1em;
}
/* 促销信息 */
.pro-box {
  padding: 0.55rem 0.8rem 0.55rem 0;
  margin: 0 0 0 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 100%;
  height: 5.48rem;
}
.pro-box-content {
  flex-grow: 1;
}

.box-label {
  margin-top: -0.15rem;
  height: 1rem;
  min-width: 2.4rem;
  font-size: 0.6rem;
  line-height: normal;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.pro-btn {
  border-radius: 0.5rem;
  border: 1px solid rgba(239, 90, 98, 0.5);
  font-size: 0.5rem;
  color: #ef5a62;
  padding: 0 0.3rem;
  text-align: center;
}
.pro-content p {
  font-size: 0.55rem;
  color: #333;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  margin-bottom: 0.05rem;
  margin-left: 0.3rem;
}

.pro-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.23rem;
}

.b-2 {
  margin: 0 0.3rem;
}
.b-4 {
  margin-left: 0.3rem;
}

.pro-box .pro-menu {
  margin-right: -0.3rem;
  flex-shrink: 0;
}
.pro-menu {
  background-image: url("../assets/images/elip3.png");
  width: 1.2rem;
  height: 1.2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 0.6rem;
  flex-shrink: 0;
}

.pro-btn {
  flex-shrink: 0;
}

.pro-meta-area2 {
  background-color: #fff;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 17.5rem;
}

.one-color {
  padding-top: 0.35em;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
}
.pro-meta-area2-one {
  padding: 0 0 0 0.8em;
}

.color-choice {
  margin-left: 0.25rem;
  flex-grow: 1;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.color-detail {
  color: #333333;
  border: 1px solid rgba(178, 178, 178, 0.5);
  border-radius: 1em;
  font-size: 0.6em;
  height: 1.95em;
  padding: 0 1em;
  line-height: 1.95em;
  margin: 0 0.5em 0.3em 0;
}

.version-choice {
  display: flex;
  flex-direction: column;
  margin-top: -0.15em;
}

.version-detail {
  color: #333333;
  border: 1px solid rgba(178, 178, 178, 0.5);
  border-radius: 1em;
  padding: 0 1em;
  margin: 0.3em 0.5em 0.3em 0;
  background-color: #fff;
  color: #333;
  height: 1.95em;
  line-height: 1.95em;
  font-size: 0.6em;
}

.type-label {
  margin-top: 0.25em;
}
.type-detail {
  color: #ca151e;
  border-color: #ca151e;
}

.count-div {
  display: flex;
  flex-direction: row;
}
.one-color div {
  cursor: pointer;
}

.minus {
  background-image: url("../assets/images/minus.png");
  height: 1.2rem;
  width: 1.2rem;
  background-size: 1.2rem 1.2rem;
}

.plus {
  background-image: url("../assets/images/plus.png");
  height: 1.2rem;
  width: 1.2rem;
  background-size: 1.2rem 1.2rem;
}

.count-div input {
  border: 0 none;
  width: 1.65rem;
  height: 100%;
  line-height: 100%;
  font-size: 0.65em;
  color: #333;
  text-align: center;
  vertical-align: middle;
  top: 0;
  left: 1.2rem;
}

.pro-promt {
  font-size: 0.6rem;
  color: #333;
  margin-top: 0.3rem;
  flex-grow: 1;
}

.pro-promt-item {
  border: 1px solid #eaeaea;
  padding: 0.15rem 0.2rem;
  border-radius: 0.2rem;
  margin-left: 0.3rem;
}

.promt-box {
  padding-top: 0.35em;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  border-top: 1px solid #eaeaea;
}
.promt-box .pro-menu {
  margin-right: 0.4rem;
}
/* 搭配 */
.match-box {
  padding: 0 0.8rem;
  /* border: 1px solid red; */
  height: 3.5rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.match-content {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.match-img {
  height: 2.25rem;
  width: 2.25rem;
  font-size: 0;
  position: relative;
}

.iconadd {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  background-size: cover;
  margin: 0 0.1rem;
  background-image: url("../assets/images/jia.png");
}

.sale-price {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.75rem;
  line-height: 0.8rem;
  font-size: 0.45rem;
  color: #333;
  background: rgba(242, 242, 242, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  text-align: center;
}

.qianjin {
  width: 0.4rem;
  height: 1rem;
  background-image: url("../assets/images/qianjin.png");
  background-size: cover;
  background-position: center center;
  margin-left: 1.6rem;
}

/* 送至 */
.pro-meta-address {
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.related-box{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* margin-top: 0.1rem; */
}
.related-area {
  color: #333;
  font-size: 0.65em;
  line-height: 1.6;
  word-break: break-all;
  /* margin-top: 0.25rem; */
}
.addressSelect {
  max-width: 19.5em;
}

.arrived-tips {
  color: #888;
  font-size: 0.55em;
  line-height: 1.5;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.xianhuo {
  color: #d0021b;
}

.pro-meta-address .pro-menu{
  margin-right: -0.3rem;
  flex-shrink: 0;
}
</style>