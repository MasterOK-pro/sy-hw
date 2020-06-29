<template>
  <div class="product-container">
    <!-- 头部右侧菜单 -->
    <div class="header-menu" v-if="menuShow">
      <div class="header-menu-item" @click="toHome">
        <div class="header-menu-icon">
          <div class="icon-menu-black"></div>
          <span>首页</span>
        </div>
      </div>
      <div class="header-menu-item" @click="toSearch">
        <div class="header-menu-icon">
          <div class="icon-menu-black black-2"></div>
          <span>搜索</span>
        </div>
      </div>
      <div class="header-menu-item" @click="toClassify">
        <div class="header-menu-icon">
          <div class="icon-menu-black black-3"></div>
          <span>分类</span>
        </div>
      </div>
      <div class="header-menu-item" @click="toCar">
        <div class="header-menu-icon">
          <div class="icon-menu-black black-4"></div>
          <span>购物车</span>
        </div>
      </div>
      <div class="header-menu-item" @click="toMine">
        <div class="header-menu-icon">
          <div class="icon-menu-black black-5"></div>
          <span>我的</span>
        </div>
      </div>
    </div>
    <!-- 头部 -->
    <div class="header" v-if="show" :style="{opacity:opa}">
      <div class="back" @click="back"></div>
      <div class="nav">
        <div class="nav-detail" @click="myClick(1)" :class="{myactive:itemIndex==1}">商品</div>
        <div class="nav-detail" @click="myClick(2)" :class="{myactive:itemIndex==2}">评价</div>
        <div class="nav-detail" @click="myClick(3)" :class="{myactive:itemIndex==3}">参数</div>
        <div class="nav-detail" @click="myClick(4)" :class="{myactive:itemIndex==4}">详情</div>
      </div>
      <div class="menu"></div>
    </div>
    <!-- 中间部分 -->
    <div class="middle" @scroll="handleScroll">
      <!-- 轮播图 -->
      <van-swipe @change="onChange" id="detail-one">
        <!-- <div class="header-menu"></div> -->
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[0]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[1]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[2]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[3]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[0]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[1]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[2]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img-div">
            <div class="icon-btn-left" @click="goBack"></div>
            <img v-if="ProductObject" :src="ProductObject.swiperImg[3]" alt />
            <div class="icon-btn-right" @click="menuShow=!menuShow"></div>
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
              <span>{{ProductObject.price}}</span>
            </span>
            <span class="detail-span">{{ProductObject.name}}</span>
          </p>
          <!-- 红字描述 -->
          <div class="p-promotion">
            <span>①享6期分期免息 ②整点限量赠好礼。老用户加赠延保，点击进入老用户专场>>>以旧换新最高补贴1000元，购机赠送同程旅游900元出行大礼包</span>
          </div>
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
              <div
                class="color-detail"
                @click="colorChoice(index)"
                :class="[colorIndex== index ? 'active':'']" v-for="(item,index) in ProductObject.config.color" :key="item.index"
              >{{item}}</div>
              <!-- <div class="color-detail" @click="colorChoice(2)" :class="{active:colorIndex==2}">深海蓝</div>
              <div class="color-detail" @click="colorChoice(3)" :class="{active:colorIndex==3}">晨曦金</div>
              <div class="color-detail" @click="colorChoice(4)" :class="{active:colorIndex==4}">零度白</div>
              <div class="color-detail" @click="colorChoice(5)" :class="{active:colorIndex==5}">冰霜银</div> -->
            </div>
          </div>
          <!-- 版本 -->
          <div class="one-color">
            <p class="box-label">版本</p>
            <div class="version-choice">
              <div
                class="version-detail"
                @click="versionChioce(index)"
                :class="{active:versionIndex==index}"
                v-for="(item,index) in ProductObject.config.version"
                :key="item.index"
              >{{item}}</div>
              <!-- <div
                class="version-detail"
                @click="colorChoice(7)"
                :class="{active:colorIndex==7}"
              >5G全网通 8GB+128GB</div>
              <div
                class="version-detail"
                @click="colorChoice(8)"
                :class="{active:colorIndex==8}"
              >5G全网通 6GB+128GB</div>-->
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
              <div class="minus" @click="proMinus"></div>
              <input type="text" :value="count" readonly />
              <div class="plus" @click="proAdd"></div>
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
            <div class="pro-menu" @click="overlayClick"></div>
          </div>

          <!-- 免息 -->
          <div class="promt-box">
            <p class="box-label type-label">免息</p>
            <div class="pro-promt">花呗/掌上生活分期直购，最高享12期免息</div>
            <div class="pro-menu" @click="overlayClick"></div>
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
        <div class="pro-menu" @click="overlayClick"></div>
      </div>

      <!-- 服务 -->
      <div class="service-box">
        <p class="box-label">服务</p>
        <div class="p-service">
          <span class="baoyou">
            <i class="gou"></i>
            <span class="by">已满48元包邮</span>
          </span>
          <span class="baoyou">
            <i class="gou"></i>
            <span class="by">由华为终端提供商品、发货开票及售后服务</span>
          </span>
        </div>
        <div class="pro-menu" @click="overlayClick"></div>
      </div>

      <!-- 推荐 -->
      <div class="recommend-box">
        <p class="box-label">推荐</p>
        <div class="recommend-item-box">
          <span class="recommend-item">HUAWEI P40 Pro</span>
          <span class="recommend-item">HUAWEI VR Glass</span>
        </div>
      </div>

      <!-- 替换 -->
      <div class="replace-box">
        <p class="box-label"></p>
        <div class="replace-middle">
          <span class="pro-btn">以旧换新</span>
          <span class="reuse">高价回收送多重购新补贴</span>
        </div>
        <div class="qianjin"></div>
      </div>
      <!-- 用户评价 -->
      <div class="user-review" id="detail-two">
        <div class="review-header">
          <span class="total-review">用户评价 (11508)</span>
          <div class="good-review">
            <span class="good-detail">
              <span class="goodrate">99%</span>
              <span>好评</span>
            </span>
            <div class="qianjin"></div>
          </div>
        </div>

        <div class="review-area">
          <my-swiper></my-swiper>
          <div class="prd-consult-area">
            <span class="prd-consult-btn">查看全部评价</span>
            <span class="prd-consult-btn">购买咨询(58)</span>
          </div>
        </div>
      </div>

      <div class="loading-action">
        <div class="loading-sep"></div>
      </div>
      <!-- 规格参数 -->
      <div class="new-specification" id="detail-three">
        <div class="icon-mask-specify"></div>
        <div class="new-spe-title">规格参数</div>
        <div class="new-spe-content">
          <div class="spe-detail">
            <label>传播名</label>
            <p>HUAWEI P40</p>
          </div>
          <div class="spe-detail">
            <label>后置摄像头</label>
            <p>
              超感知徕卡三摄：5000万像素超感知摄
              像头（广角， f/1.9光圈 ）+ 1600万像素超广
              角摄像头（f/2.2光圈）+ 800万像素长焦摄
              像头（f/2.4光圈，支持OIS光学
              防抖"（备注:"不同模式的照片和视频的像素可能有差异，请以实际为准。"
            </p>
          </div>
        </div>
        <div class="spe-btn">
          <div class="prd-consult-btn">查看全部参数</div>
        </div>
      </div>

      <p id="detail-four">
        <img :src="ProductObject.introImg[0]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[1]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[2]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[3]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[0]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[1]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[2]" alt class="pro-detail-img" />
      </p>
      <p>
        <img :src="ProductObject.introImg[3]" alt class="pro-detail-img" />
      </p>
    </div>

    <!-- 底部 -->
    <div class="pro-footer">
      <div class="pro-property-left">
        <div class="pro-property-left-item">
          <div class="home-img" @click="toHome"></div>
          <p>首页</p>
        </div>
        <div class="pro-property-left-item">
          <div class="service-img"></div>
          <p>客服</p>
        </div>
        <div class="pro-property-left-item">
          <van-icon name="shopping-cart-o" class="cart-img" :badge="$store.state.num" @click="$router.push('cart')"/>
          <p>购物车</p>
        </div>
      </div>

      <div class="pro-property-right">
        <div class="button-round" @click="toCart">加入购物车</div>
        <div class="button-round-primary">立即购买</div>
      </div>
    </div>
    <div class="overlay" v-if="overlayShow">
      <div class="box-lower">
        <div class="box-lower-header">
          <span class="box-lower-service">服务</span>
          <div class="icon-close" @click="overlayShow=!overlayShow"></div>
        </div>
        <div class="box-lower-content">
          <div class="service-content">
            <div class="s-gou"></div>
            <div class="service-content-box">
              <span>已满48元包邮</span>
              <p>满48元即免运费</p>
            </div>
          </div>
          <div class="service-content">
            <div class="s-gou"></div>
            <div class="service-content-box">
              <span>由华为终端提供商品、发货开票及售后服务</span>
              <p>由 华为终端 提供商品、发货开票及售后服务</p>
            </div>
          </div>
        </div>

        <div class="box-lower-footer">
          <div class="box-ok" @click="overlayShow=!overlayShow">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductReviewSwiper from "./ProductReviewSwiper.vue";
import Product from "../assets/manual-data.js";

export default {
  activated(){
    this.name = this.$route.query.name;
  },
  computed: {
    myProduct() {
      let list = [];
      for (let item of Product) {
        if (item.name) {
          list.push(item);
        }
      }
      return list;
    },

    ProductObject() {
      for (let i = 0; i < this.myProduct.length; i++) {
        if (this.myProduct[i].name.includes(this.name)) {
          return this.myProduct[i];
        }
      }
    }
  },

  // mounted() {
  //   console.log(this.ProductObject);
  // },
  components: {
    "my-swiper": ProductReviewSwiper
  },
  data() {
    return {
      show: false,
      current: 0,
      count: 1,
      colorIndex: 4,
      itemIndex: 1,
      menuShow: false,
      opa: 0,
      overlayShow: false,
      versionIndex: 0,
      name:""
    };
  },
  methods: {
    handleScroll() {
      // 这么写也可以
      // let ele = document.querySelector(".middle");
      // let scrollTop = document.documentElement.scrollTop||document.body.scrollTop||ele.scrollTop;

      let scrollTop = event.target.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 90) {
        this.menuShow = false;
      }
      if (scrollTop >= 40) {
        this.show = true;
        this.opa = (scrollTop - 40) / 40;
      }
      if (scrollTop > 80) {
        this.opa = 1;
      }
      if (scrollTop < 40) {
        this.opa = 0;
        this.show = false;
      }

      let oneTop = document.querySelector ('#detail-one').getBoundingClientRect().top;
      if ( oneTop<=0 ) {
        this.itemIndex = 1;
      }
      let twoTop = document.querySelector ('#detail-two').getBoundingClientRect().top;
      if ( twoTop<=0 ) {
        this.itemIndex = 2;
      }
      let threeTop = document.querySelector ('#detail-three').getBoundingClientRect().top;
      if ( threeTop<=0 ) {
        this.itemIndex = 3;
      }
      let fourTop = document.querySelector ('#detail-four').getBoundingClientRect().top;
      if ( fourTop<=0 ) {
        this.itemIndex = 4;
      }
    },

    back() {
      window.history.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    proAdd() {
      this.count++;
    },
    proMinus() {
      if (this.count > 1) {
        this.count--;
      }
    },
    colorChoice(index) {
      this.colorIndex = index;
      // console.log(this.colorIndex);
    },
    versionChioce(index) {
      this.versionIndex = index;
    },
    toHome() {
      this.$router.push("/");
    },
    myClick(index) {
      this.itemIndex = index;
      // console.log(this.itemIndex);
      if (index == 1) {
        document.querySelector("#detail-one").scrollIntoView(true);
      }
      if (index == 2) {
        document.querySelector("#detail-two").scrollIntoView(true);
      }
      if (index == 3) {
        document.querySelector("#detail-three").scrollIntoView(true);
      }
      if (index == 4) {
        document.querySelector("#detail-four").scrollIntoView(true);
      }
    },

    goBack() {
      window.history.go(-1);
    },
    overlayClick() {
      this.overlayShow = true;
    },
    toCart() {
        let product = {
            img: this.ProductObject.swiperImg[0],
            name: this.ProductObject.name,
            config: '零度白,5G全网通 8GB+128GB,官方标配',
            price: this.ProductObject.price,
            checked:true,
            count: 1
        }
      this.$store.commit("addCart",product);

    },
    toHome(){
      this.$router.push("/");
    },
    toSearch(){
      this.$router.push("search");
    },
    toClassify(){
      this.$router.push("classify");
    },
    toCar(){
      this.$router.push("cart");
    },
    toMine(){
      this.$router.push("mine");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.product-container {
  height: 100%;
  background-color: rgb(249, 249, 249);
  display: flex;
  flex-direction: column;
  position: relative;
}

.header-menu {
  position: absolute;
  width: 5.2rem;
  height: 10rem;
  /* border: 1px solid black; */
  top: 2.3rem;
  right: 0.5rem;
  z-index: 101;
  background-color: #fff;
  opacity: 0.9;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.header-menu-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.header-menu-icon {
  height: 2rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.5);
  padding: 0 0 0 0.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-menu-icon span {
  padding-left: 0.4rem;
  font-size: 0.7rem;
  color: #333;
}

.icon-menu-black {
  width: 1.2rem;
  height: 1.2rem;
  background: url("../assets/images/shouye.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.black-2 {
  background-image: url("../assets/images/sousuo.png");
}

.black-3 {
  background-image: url("../assets/images/fenlei.png");
}

.black-4 {
  background-image: url("../assets/images/gouwuche.png");
}

.black-5 {
  background-image: url("../assets/images/wode.png");
}
/* 头部导航样式 */
.header {
  width: 100%;
  height: 2rem;
  padding: 0 0.8rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  z-index: 9;
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
  margin-right: -0.3rem;
}

.middle {
  flex-grow: 1;
  overflow: auto;
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
  position: relative;
}

img {
  width: 100%;
  vertical-align: top;
  height: 100%;
}

.icon-btn-left {
  width: 1.2rem;
  height: 1.2rem;
  background-image: url("../assets/images/swiper-back.png");
  position: absolute;
  background-size: 100% 100%;
  top: 0.5rem;
  left: 0.8rem;
}

.icon-btn-right {
  width: 1.2rem;
  height: 1.2rem;
  background-image: url("../assets/images/swiper-menu.png");
  position: absolute;
  background-size: 100% 100%;
  top: 0.5rem;
  right: 0.8rem;
}

/* 价格及描述 */
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

/* 红字描述 */
.p-promotion {
  font-size: 0.55rem;
  color: #888;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
}

.p-promotion span {
  color: #ca141d;
}

/* 促销信息 */
.pro-box {
  padding: 0.55rem 0.8rem 0.55rem 0;
  margin: 0rem 0 0 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 100%;
  height: 4.38rem;
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
  max-width: 100%;
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

.related-box {
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
  max-width: 12.55rem;
}

.xianhuo {
  color: #d0021b;
}

.pro-meta-address .pro-menu {
  margin-right: -0.3rem;
  flex-shrink: 0;
}

/* 服务 */
.service-box {
  height: auto;
  padding: 0.6rem 0 0 0.8rem;
  position: relative;
  background-color: #fff;
  border-top: 1px solid rgba(234, 234, 234, 0.5);
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
}

.p-service {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #333;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.6rem;
}

.p-service :first-child {
  margin-bottom: 0.2rem;
}

.gou {
  display: inline-block;
  height: 0.8rem;
  width: 0.8rem;
  margin-right: 0.3rem;
  background-size: cover;
  background: url("../assets/images/gou.png") no-repeat center;
}
.baoyou {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 1;
}

.by {
  margin-top: -0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 推荐 */
.recommend-box {
  margin-bottom: 0.5rem;
  padding: 0.3em 0.8em 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.recommend-item-box {
  flex-shrink: 0;
}
.recommend-item {
  font-size: 0.6rem;
  color: #333;
  display: inline-block;
  padding: 0 0.5rem;
  height: 1.3rem;
  line-height: 1.3rem;
  background: #f3f3f3;
  border-radius: 0.6rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 12rem;
  overflow: hidden;
}

/* 替换 */
.replace-box {
  height: 2rem;
  padding: 0 0.8em;
  display: flex;
  flex-direction: row;
  background: #fff;
  align-items: center;
  margin-bottom: 0.5rem;
}

.replace-box .box-label {
  background: url("../assets/images/xunhuan.png") no-repeat left center;
  background-size: 0.9rem 0.9rem;
  margin-top: 0.3rem;
}

.replace-middle {
  flex-grow: 1;
}
.reuse {
  color: #333;
  font-size: 0.6rem;
  margin-left: 0.3rem;
}

/* 用户评价 */
.user-review {
  max-width: 100%;
  height: 12.2rem;
  background: #fff;
  margin-bottom: 0.5rem;
}

.review-header {
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.total-review {
  font-size: 0.7rem;
  color: #333;
  font-weight: bold;
}

.good-review {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.goodrate {
  color: #ca141d;
  font-size: 0.6rem;
  font-weight: bold;
  margin-right: 0.2rem;
}

.good-review :nth-child(2) {
  color: #666;
  font-size: 0.6rem;
}

.good-detail {
  margin-right: -1.3em;
  margin-top: -0.1rem;
}

.prd-consult-area {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.prd-consult-btn {
  display: inline-block;
  width: 6rem;
  height: 1.5rem;
  line-height: 1.55rem;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  text-align: center;
  font-size: 0.65rem;
  margin: 0.8rem 0;
  margin-right: 0.3rem;
  color: #333;
}

.loading-action {
  padding: 0.15rem 0 0.75rem 0;
  height: 0.3rem;
}

.loading-sep {
  max-width: 100%;
  height: 0;
  margin: 0 0.8rem;
  border: 1px solid #eee;
}

.active {
  color: #ca151e;
  border-color: #ca151e;
}

.new-specification {
  padding: 0 0.8rem 0.8rem 0.8rem;
  margin-bottom: 0.5rem;
  background-image: linear-gradient(
    0deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.8) 25%,
    #ffffff 100%
  );
  height: 11.43rem;
  position: relative;
}

.icon-mask-specify {
  position: absolute;
  top: 50%;
  left: 0;
  bottom: 0;
  width: 100%;
  background-size: contain;
  background-image: url("../assets/images/mask.png");
}

.new-spe-title {
  padding: 0.8rem 0;
  color: #333;
  font-weight: bold;
  font-size: 0.65rem;
}

.new-spe-content {
  max-height: 5.9rem;
  overflow: hidden;
}

.spe-detail {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.6rem;
}

.spe-detail label {
  width: 4.2rem;
  font-size: 0.6rem;
  color: #999;
  flex-shrink: 0;
}

.spe-detail p {
  font-size: 0.6rem;
  color: #333;
  line-height: normal;
  word-break: break-all;
}

.spe-btn {
  margin-top: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 0.65rem;
  max-width: 100%;
  height: 2rem;
}

.spe-btn .prd-consult-btn {
  width: 8rem;
  height: 1.5rem;
  line-height: 1.5rem;
  z-index: 10;
}

.pro-detail-img {
  max-width: 100%;
}

.pro-footer {
  background-color: #fff;
  height: 2.4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  z-index: 11;
}

.pro-property-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.pro-property-left-item {
  width: 2.5rem;
  display: flex;
  flex-direction: column;
}

.pro-property-left-item p {
  font-size: 0.5rem;
  color: #333;
}
.home-img {
  width: 100%;
  height: 1.2rem;
  background-image: url("../assets/images/pro-home.png");
  background-size: 1.2rem 1.2rem;
  background-repeat: no-repeat;
  margin: 0.25rem auto 0.1rem;
  background-position: center center;
}
.service-img {
  width: 100%;
  height: 1.2rem;
  background-image: url("../assets/images/pro-service.png");
  background-size: 1.2rem 1.2rem;
  background-repeat: no-repeat;
  margin: 0.25rem auto 0.1rem;
  background-position: center center;
}
.cart-img {
  width: 1.2rem;
  height: 1.2rem;
  /* background-image: url("../assets/images/pro-cart.png");
  background-size: 1.2rem 1.2rem;
  background-repeat: no-repeat; */
  margin: 0.25rem auto 0.1rem;
  /* background-position: center center; */
}

.pro-property-right {
  padding-right: 0.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.button-round {
  height: 1.85rem;
  font-size: 0.75rem;
  color: #fff;
  background-image: linear-gradient(90deg, #ff814a 0, #f45333 100%);
  border-radius: 0.93rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.button-round-primary {
  width: 100%;
  height: 1.85rem;
  font-size: 0.75rem;
  color: #fff;
  background-image: linear-gradient(90deg, #e43e2d 0, #ca141d 100%);
  border-radius: 0.93rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.myactive {
  color: #ca141d !important;
  border-bottom: 2px solid #ca141d !important;
}

.overlay {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.box-lower {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  top: auto;
  height: 22.4rem;
  z-index: 1001;
  background-color: #fff;
  border-radius: 0.4rem 0.4rem 0rem 0rem;
  display: flex;
  flex-direction: column;
}

.box-lower-header {
  width: 100%;
  position: absolute;
  top: 0;
  height: 2.2rem;
  color: #000;
  padding: 0 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.box-lower-service {
  font-size: 0.9rem;
  text-shadow: 0.05rem 0rem 0 #191919, 0 0 0 #191919;
}

.icon-close {
  background: url("../assets/images/close.png");
  position: absolute;
  right: 0.8rem;
  top: 50%;
  height: 1.2rem;
  width: 1.2rem;
  background-size: 100% 100%;
  margin-top: -0.6rem;
}

.box-lower-content {
  padding: 0.8rem 0.4rem;
  position: absolute;
  top: 2rem;
  bottom: 2.25rem;
  left: 0;
  right: 0;
  width: 100%;
  flex-grow: 1;
}

.service-content {
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.s-gou {
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("../assets/images/gou.png");
  background-repeat: no-repeat;
  margin-right: 0.8rem;
  margin-top: -1.2rem;
  margin-left: -0.2rem;
}

.service-content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 2rem; */
}

.service-content-box span {
  font-size: 0.65rem;
  color: #333;
  line-height: 1.35rem;
}

.service-content-box p {
  font-size: 0.6rem;
  color: #666;
  padding-top: 0.4rem;
  padding-left: 0.4rem;
}

.box-lower-footer {
  height: 2.4rem;
  width: 100%;
  position: absolute;
  line-height: 2.4rem;
  bottom: 0;
  padding: 0 0.8rem;
}

.box-ok {
  height: 1.85rem;
  line-height: 1.85rem;
  background-image: linear-gradient(90deg, #e43e2d 0, #ca141d 100%);
  border-radius: 1rem;
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
}
</style>
