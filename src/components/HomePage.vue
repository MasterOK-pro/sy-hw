<template>
  <div class="homepage" @scroll="homepageScroll">
    <div class="homepage-head">
      <div :class="{'head-fixed-top':topFixed}">
        <!-- 搜索栏 -->
        <div class="search-box">
          <div class="search-logo-box">
            <img src="../../public/imgs/logo_vmall-text.png" alt />
          </div>
          <div type="text" class="search-input-area" @click="goSearchPage">
            <span></span>
            <div class="home-search-content">
              <swiper class="swiper swiper-no-swiping" :options="swiperOptionSearch">
                <swiper-slide class="swiper-item">
                  <a>华为畅享20 Pro新机试用申请中</a>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <a>【选品试用】艾美特智能空气循环扇试用申请中，等你来</a>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <a>1999元起！畅享20 Pro给你带来5G全场景畅快体验</a>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <a>1999元起！畅享20 Pro新品发布</a>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="sysbtn">
            <img src="../../public/imgs/app-search-msg.png" alt />
            <span>登录</span>
          </div>
        </div>
        <!-- 顶部文字滑块导航 -->
        <div class="home-text-nav">
          <div class="home-nav-slide-box">
            <ul class="home-nav-slider" v-if="!showMoreNav">
              <li class="home-nav-item">
                <a href>推荐</a>
              </li>
              <li class="home-nav-item">
                <a href="https://m.vmall.com/huawei">华为618</a>
              </li>
              <li class="home-nav-item">
                <a href="https://msale.vmall.com/honor.html">荣耀618</a>
              </li>
              <li class="home-nav-item">
                <a href="https://msale.vmall.com/pseries.html">P40系列</a>
              </li>
              <li class="home-nav-item">
                <a href="https://msale.vmall.com/smarthome2020.html">安心居家</a>
              </li>
              <li class="home-nav-item">
                <a href="https://msale.vmall.com/ptpd.html">拼团</a>
              </li>
            </ul>
            <p v-else class="nav-all-title">全部</p>
          </div>
          <div class="home-nav-more" @click="showMoreNav=!showMoreNav">
            <img v-if="!showMoreNav" src="../../public/imgs/home-nav-more-down.png" alt />
            <img v-else src="../../public/imgs/home-nav-more-up.png" alt />
          </div>
        </div>
        <div class="home-nav-gird" v-if="showMoreNav">
          <div class="home-nav-more-item">
            <a href="https://m.vmall.com/">
              <span>推荐</span>
            </a>
          </div>
          <div class="home-nav-more-item">
            <a href="https://m.vmall.com/huawei">
              <span>华为618</span>
            </a>
          </div>
          <div class="home-nav-more-item">
            <a href="https://msale.vmall.com/honor.html">
              <span>荣耀618</span>
            </a>
          </div>
          <div class="home-nav-more-item">
            <a href="https://msale.vmall.com/pseries.html">
              <span>P40系列</span>
            </a>
          </div>
          <div class="home-nav-more-item">
            <a href="https://msale.vmall.com/smarthome2020.html">
              <span>安心居家</span>
            </a>
          </div>
          <div class="home-nav-more-item">
            <a href="https://msale.vmall.com/ptpd.html">
              <span>拼团</span>
            </a>
          </div>
        </div>
        <div class="home-more-page" v-if="showMoreNav"></div>
      </div>
      <div class="home-head-swiper">
        <home-head-swiper></home-head-swiper>
      </div>
      <div class="home-serve-nav">
        <home-serve-nav></home-serve-nav>
        <div class="home-news-swiper">
          <div class="home-news-left">
            <a href="https://m.vmall.com/content/category">
              <img src="../../public/imgs/logo_wapHeadNews.png" alt />
            </a>
          </div>
          <div class="home-news-body">
            <home-news-swiper></home-news-swiper>
          </div>
          <a class="home-swiper-right" href="https://m.vmall.com/content/index">更多</a>
        </div>
      </div>
    </div>
    <!-- 秒杀 -->
    <div class="homepage-seckill">
      <h3>
        <span>限时购</span>
        <span class="seckill-logo"></span>
        <home-seckill></home-seckill>
        <span>后结束</span>
      </h3>
      <home-discount-swiper></home-discount-swiper>
    </div>
    <!-- 广告投放区 -->
    <div class="homepage-ads">
      <div class="ads-imgs">
        <ul class="vertical">
          <li class="ads-left">
            <div class="normal">
              <a href>
                <img src="../assets/images/home-ads-p40.png" alt />
              </a>
            </div>
          </li>
        </ul>
        <ul class="vertical">
          <li class="ads-right">
            <div class="normal">
              <a href>
                <img src="../assets/images/home-ads-honor30.jpg" alt />
              </a>
            </div>
          </li>
          <li class="ads-right">
            <div class="normal">
              <a href>
                <img src="../assets/images/home-ads-honor30-5g.png" alt />
              </a>
            </div>
          </li>
        </ul>
        <ul class="horizon">
          <li class="ads-left">
            <div class="normal">
              <a href>
                <img src="../assets/images/home-ads-joy20p.png" alt />
              </a>
            </div>
          </li>
          <li class="ads-right">
            <div class="normal">
              <a href>
                <img src="../assets/images/home-ads-honorx10.jpg" alt />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="ads-end">
        <ul>
          <li>
            <a href>
              <img src="../assets/images/home-ads-end-joyz.png" alt />
              <p class="p-name">华为畅享Z 5G</p>
              <p class="p-promotion">最高优惠200|赠耳机</p>
              <p class="p-promotion">¥2199</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../assets/images/home-ads-end-honorplay4.png" alt />
              <p class="p-name">荣耀 Play4T Pro</p>
              <p class="p-promotion">全系优惠100元</p>
              <p class="p-promotion">
                ¥1399
                <del>¥1499</del>
              </p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../assets/images/home-ads-end-nova5z.png" alt />
              <p class="p-name">HUAWEI nova 5z</p>
              <p class="p-promotion">限时直降330元</p>
              <p class="p-promotion">
                ¥1299
                <del>¥1599</del>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精品推荐 -->
    <div class="homepage-recommend">
      <h2>精品推荐</h2>
      <div class="homepage-rcmd-body">
        <swiper class="swiper" :options="swiperOptionRcmd">
          <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-tag">
                  <svg
                    class="smaller-font"
                    width="100%"
                    height=".6rem"
                    style="background-color: #FF6A6E;"
                  >
                    <text
                      x="50%"
                      y="50%"
                      dy=".3em"
                      fill="#fff"
                      font-size=".45rem"
                      text-anchor="middle"
                    >3期分期免息</text>
                  </svg>
                </p>
                <p class="p-img">
                  <img
                    src="https://res.vmallres.com/pimages//product/6901443389308/428_428_C730B400846FD8140093D0747933D968E5F9573CB764DE1Cmp.png"
                  />
                </p>
                <p class="p-promotion">预订最高省200+赠配件</p>
              </div>
              <p class="rcmd-item-name">
                <span>HUAWEI MateBook D 15</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>4299
                </b>
              </p>
            </a>
          </swiper-slide>
          <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-img">
                  <img
                    src="https://res.vmallres.com/pimages//product/6901443401710/428_428_03930E56A7F816EBF7FC3C07C30B6DB7585E8E062E9EE39Cmp.png"
                  />
                </p>
                <p class="p-promotion">最高12息免息+赠品</p>
              </div>
              <p class="rcmd-item-name">
                <span>荣耀智慧屏X1</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>3299
                </b>
              </p>
            </a>
          </swiper-slide>
          <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-img">
                  <img
                    src="https://res.vmallres.com/pimages//product/6901443361557/428_428_9CA7B99629C486B82A64D8EBCCB6BF5BDB211AA893F42F55mp.png"
                  />
                </p>
                <p class="p-promotion">预订最高省600+12期免息</p>
              </div>
              <p class="rcmd-item-name">
                <span>华为智慧屏</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>6499
                </b>
              </p>
            </a>
          </swiper-slide>
          <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-tag">
                  <svg
                    class="smaller-font"
                    width="100%"
                    height=".6rem"
                    style="background-color: #FF6A6E;"
                  >
                    <text
                      x="50%"
                      y="50%"
                      dy=".3em"
                      fill="#fff"
                      font-size=".45rem"
                      text-anchor="middle"
                    >3期分期免息</text>
                  </svg>
                </p>
                <p class="p-img">
                  <img
                    src="https://res.vmallres.com/pimages//product/6901443367184/428_428_E874E2524201750AB57F280771AE25771C86545947A924FFmp.png"
                  />
                </p>
                <p class="p-promotion">预订最高省100+赠配件</p>
              </div>
              <p class="rcmd-item-name">
                <span>HUAWEI MateBook 13 锐龙版</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>4699
                </b>
              </p>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 手机 -->
    <div class="homepage-phone">
      <h2>手机</h2>
      <div class="phone-hot">
        <ul class="horizon">
          <li class="ads-left">
            <div class="normal">
              <a href>
                <div class="img-area">
                  <p class="p-tag">
                    <svg
                      class="smaller-font"
                      width="100%"
                      height=".6rem"
                      style="background-color: #FF6A6E;"
                    >
                      <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        fill="#fff"
                        font-size=".45rem"
                        text-anchor="middle"
                      >3期分期免息</text>
                    </svg>
                  </p>
                  <p class="p-img">
                    <img
                      src="https://res0.vmallres.com/pimages//product/6901443353279/428_428_F23055642D59B61C0038B9B6015570AC05A35A7E3838809Emp.png"
                    />
                  </p>
                  <p class="p-promotion">6期免息|赠配件好礼</p>
                </div>
                <p class="rcmd-item-name">
                  <span>HUAWEI Mate 30 Pro 5G</span>
                </p>
                <p class="p-price">
                  <b>
                    <em>¥</em>6399
                  </b>
                </p>
              </a>
            </div>
          </li>
          <li class="ads-right">
            <div class="normal">
              <a href>
                <div class="img-area">
                  <p class="p-tag">
                    <svg
                      class="smaller-font"
                      width="100%"
                      height=".6rem"
                      style="background-color: #FF6A6E;"
                    >
                      <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        fill="#fff"
                        font-size=".45rem"
                        text-anchor="middle"
                      >3期分期免息</text>
                    </svg>
                  </p>
                  <p class="p-img">
                    <img
                      src="https://res0.vmallres.com/pimages//product/6901443356867/428_428_98C86546D993926AA64531BD16224A1CB286A8D663EF4F4Emp.png"
                    />
                  </p>
                  <p class="p-promotion">优惠500 部分送无线充</p>
                </div>
                <p class="rcmd-item-name">
                  <span>荣耀V30 PRO</span>
                </p>
                <p class="p-price">
                  <b>
                    <em>¥</em>3399
                    <del>3899</del>
                  </b>
                </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="phone-hot">
        <ul class="horizon">
          <li class="ads-left">
            <div class="normal">
              <a href>
                <div class="img-area">
                  <p class="p-tag">
                    <svg
                      class="smaller-font"
                      width="100%"
                      height=".6rem"
                      style="background-color: #FF6A6E;"
                    >
                      <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        fill="#fff"
                        font-size=".45rem"
                        text-anchor="middle"
                      >3期分期免息</text>
                    </svg>
                  </p>
                  <p class="p-img">
                    <img
                      src="https://res0.vmallres.com/pimages//product/6901443387984/428_428_CA16AD0891C031C45C53FB3909E9FF609CCA6C46C2581A76mp.png"
                    />
                  </p>
                  <p class="p-promotion">享6期免息|整点赠手环</p>
                </div>
                <p class="rcmd-item-name">
                  <span>HUAWEI nova 7 SE 5G</span>
                </p>
                <p class="p-price">
                  <b>
                    <em>¥</em>2399
                  </b>
                </p>
              </a>
            </div>
          </li>
          <li class="ads-right">
            <div class="normal">
              <a href>
                <div class="img-area">
                  <p class="p-tag">
                    <svg
                      class="smaller-font"
                      width="100%"
                      height=".6rem"
                      style="background-color: #FF6A6E;"
                    >
                      <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        fill="#fff"
                        font-size=".45rem"
                        text-anchor="middle"
                      >3期分期免息</text>
                    </svg>
                  </p>
                  <p class="p-img">
                    <img
                      src="https://res0.vmallres.com/pimages//product/6901443315352/428_428_1559307034391mp.png"
                    />
                  </p>
                  <p class="p-promotion">最高直降600元</p>
                </div>
                <p class="rcmd-item-name">
                  <span>荣耀20 PRO</span>
                </p>
                <p class="p-price">
                  <b>
                    <em>¥</em>2099
                    <del>2699</del>
                  </b>
                </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="homepage-rcmd-body">
        <swiper class="swiper" :options="swiperOptionRcmd">
          <swiper-slide class="rcmd-item" v-for="(item,index) of phoneSwiper" :key="index">
            <a href>
              <div class="img-area">
                <p class="p-tag">
                  <svg
                    class="smaller-font"
                    width="100%"
                    height=".6rem"
                    style="background-color: #FF6A6E;"
                    v-if="item.installment"
                  >
                    <text
                      x="50%"
                      y="50%"
                      dy=".3em"
                      fill="#fff"
                      font-size=".45rem"
                      text-anchor="middle"
                    >3期分期免息</text>
                  </svg>
                </p>
                <p class="p-img">
                  <img :src="item.swiperImg[0]" />
                </p>
                <p class="p-promotion">{{item.desc}}</p>
              </div>
              <p class="rcmd-item-name">
                <span>{{item.name}}</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>
                  {{item.price}}
                  <del v-if="item.oldPrice">{{item.oldPrice}}</del>
                </b>
              </p>
            </a>
          </swiper-slide>
          <!-- <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-img">
                  <img
                    src="https://res0.vmallres.com/pimages//product/6901443404032/428_428_FAD0F5B8C88685D92682D2BD3BDA6641E23B2E2B7D891319mp.png"
                  />
                </p>
                <p class="p-promotion">最高优惠100元</p>
              </div>
              <p class="rcmd-item-name">
                <span>荣耀 Play4T</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>999
                  <del>1099</del>
                </b>
              </p>
            </a>
          </swiper-slide>
          <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-img">
                  <img
                    src="https://res0.vmallres.com/pimages//product/6901443354962/428_428_83E26E25EA9423FB41DCC2769579FBA747AD844EF9D08041mp.png"
                  />
                </p>
                <p class="p-promotion">最高优惠200</p>
              </div>
              <p class="rcmd-item-name">
                <span>华为畅享10</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>1299
                </b>
              </p>
            </a>
          </swiper-slide>
          <swiper-slide class="rcmd-item">
            <a href>
              <div class="img-area">
                <p class="p-tag">
                  <svg
                    class="smaller-font"
                    width="100%"
                    height=".6rem"
                    style="background-color: #FF6A6E;"
                  >
                    <text
                      x="50%"
                      y="50%"
                      dy=".3em"
                      fill="#fff"
                      font-size=".45rem"
                      text-anchor="middle"
                    >3期分期免息</text>
                  </svg>
                </p>
                <p class="p-img">
                  <img
                    src="https://res0.vmallres.com/pimages//product/6901443321339/428_428_1563503515663mp.png"
                  />
                </p>
                <p class="p-promotion">低至1099起</p>
              </div>
              <p class="rcmd-item-name">
                <span>荣耀9X</span>
              </p>
              <p class="p-price">
                <b>
                  <em>¥</em>1099
                  <del>1399</del>
                </b>
              </p>
            </a>
          </swiper-slide>-->
        </swiper>
      </div>
      <div class="channel-footer">
        <span>发现更多手机</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- copyright -->
    <copyright></copyright>
    <to-top :show="showTop"></to-top>
  </div>
</template>

<script>
import HomeHeadSwiper from "../components/HomeHeadSwiper.vue";
import HomeServeNav from "../components/HomeServeNav.vue";
import HomeNewsSwiper from "../components/HomeNewsSwiper.vue";
import HomeSeckill from "../components/HomeSeckill.vue";
import HomeDiscountSwiper from "../components/HomeDiscountSwiper.vue";
import Copyright from "../components/Copyright.vue";
import ToTop from "../components/ToTop.vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import Product from "../assets/manual-data.js";

export default {
  data() {
    return {
      showMoreNav: false, //
      topFixed: false, // 不固定'顶部搜索框和文字导航'
      showTop: false, // 不显示'回到顶部'

      swiperOptionRcmd: {
        slidesPerView: 2.8
      },
      swiperOptionSearch: {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        noSwiping: true
      }
    };
  },
  components: {
    HomeHeadSwiper,
    HomeServeNav,
    HomeNewsSwiper,
    HomeSeckill,
    HomeDiscountSwiper,
    Swiper,
    SwiperSlide,
    Copyright,
    ToTop
  },
  methods: {
    /* 首页滚轮事件 */
    homepageScroll() {
      let scrollTop = event.target.scrollTop;
      if (!localStorage.getItem("appRefuse")) {
        /* 隐藏appHint */
        if (scrollTop > 0) {
          this.$store.commit("appRefused");
          this.topFixed = true;
        }
        /* 显示apphint */
        if (scrollTop == 0) {
          this.$store.commit("appReceive");
          this.topFixed = false;
        }
      }
      /* 显示返回顶部 */
      if (scrollTop > 720) {
        this.showTop = true;
      }
      /* 隐藏返回顶部 */
      if (scrollTop <= 720) {
        this.showTop = false;
      }
    },
    /* 前往搜索页面 */
    goSearchPage() {
      this.$router.push("search");
    }
  },
  activated() {
    this.showTop = false;
  },
  computed: {
    phoneSwiper() {
      let list = [];
      for (let item of Product) {
        if (item.desc) {
          list.push(item);
        }
      }
      return list;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.homepage {
  width: 100%;
  font-size: 1rem;
  flex-grow: 1;
  overflow-y: auto;
  position: relative;
  background-color: #f9f9f9;
}
.homepage::-webkit-scrollbar {
  display: none;
}
/* 搜索栏及文字导航 */
.head-fixed-top {
  position: fixed;
  top: 0;
  z-index: 100;
  max-width: 100%;
}
/* 搜索栏 */
.search-box {
  height: 2rem;
  display: flex;
  align-items: center;
  z-index: 100;
  position: relative;
  background-color: #fff;
}
.search-logo-box {
  width: 3.05rem;
  height: 0.65rem;
  margin-left: 0.4rem;
  flex-shrink: 0;
  display: flex;
}
.search-logo-box img {
  max-width: 100%;
}
.search-input-area {
  margin-left: 0.4rem;
  flex-grow: 1;
  width: 50%;
  height: 1.6rem;
  background-color: rgba(155, 155, 155, 0.1);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  background-image: url(../../public/imgs/home-icon-search.png);
  background-size: 0.7rem 0.7rem;
  background-repeat: no-repeat;
  background-position: 0.4rem center;
}
.home-search-content {
  width: 100%;
  padding: 0 0.4rem 0 1.6rem;
  height: 1.6rem;
  font-size: 0.65rem;
  color: #b3b3b3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-search-content .swiper {
  z-index: 100;
  height: 1.6rem;
}
.search-box .swiper .swiper-item {
  height: 1.6rem !important;
  display: flex;
  align-items: center;
}
.search-box .swiper a {
  width: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.6rem;
  color: #4d4d4d;
}
/* 系统按钮(登录，消息) */
.sysbtn {
  flex-shrink: 0;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  width: 4.5rem;
}
.sysbtn img {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.3rem;
}
.sysbtn span {
  font-size: 0.65rem;
  color: #4c4c4c;
  margin: 0 0.3rem;
}
/* 顶部文字导航 */
.home-text-nav {
  width: 100%;
  height: 1.7rem;
  display: flex;
  align-items: center;
  z-index: 100;
  position: relative;
  background-color: #fff;
}
.home-nav-slide-box {
  flex-grow: 1;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 0.4rem;
}
.home-nav-slide-box::-webkit-scrollbar {
  display: none;
}
.home-nav-slider {
  height: 1.7rem;
  list-style-type: none;
  display: flex;
  align-items: center;
}
.home-nav-item {
  position: relative;
  height: 1.7rem;
  flex-shrink: 0;
}
.home-nav-item a {
  text-decoration: none;
  font-size: 0.7rem;
  color: #777;
  padding: 0 0.75rem;
}
.home-nav-item:first-child a {
  color: #cc0e11;
}
.home-nav-item:first-child a::before {
  content: "";
  position: absolute;
  left: 0.35rem;
  right: 0.45rem;
  bottom: 0.2rem;
  width: auto;
  height: 0.1rem;
  border-radius: 0.05rem;
  background-color: #cc0e11;
}
.home-nav-more {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 0.4rem;
}
.home-nav-more img {
  margin-top: 0.25rem;
  width: 0.5rem;
  height: 0.5rem;
}
/* 更多信息遮罩 */
.home-more-page {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.27);
}
.nav-all-title {
  padding-left: 0.75rem;
  height: 1.5rem;
  color: #777;
  font-size: 0.7rem;
}
.home-nav-gird {
  padding: 0.8rem 0.9rem 0 0.9rem;
  position: absolute;
  z-index: 100;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.6rem 0.6rem 0 0.6rem;
}
.home-nav-more-item {
  width: 5rem;
  height: 2.3rem;
  text-align: center;
}
.home-nav-more-item a {
  width: 100%;
  text-decoration: none;
  color: #333;
  border: 0.035rem solid #eaeaea;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 0.65rem;

  border-radius: 0.75rem;
  height: 1.5rem;
  text-align: center;
  display: inline-block;
}
.home-nav-more-item:first-child a {
  color: #ca141d;
  border: 0.035rem solid #ca141d;
}
.home-nav-more-item a span {
  display: inline-block;
  font-size: 0.65rem;
  width: 3.75rem;
  height: 1.5rem;
  line-height: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 服务导航 */
.home-serve-nav {
  background-image: url(../../public/imgs/home-serve-nav.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 0.2rem;
}
.home-news-swiper {
  margin: 0 0.9rem;
  height: 2rem;
  position: relative;
  margin: -0.2rem 0.7rem 0;
  display: flex;
  align-items: center;
}
.home-news-left {
  height: 2rem;
  flex-shrink: 0;
}
.home-news-left a {
  height: 2rem;
  width: auto;
  display: flex;
  align-items: center;
}
.home-news-left img {
  height: 0.6rem;
  width: auto;
}
.home-swiper-right {
  text-decoration: none;
  color: #999;
  font-size: 0.6rem;
}
.home-news-body {
  flex-grow: 1;
  width: 0;
  padding-right: 0.2rem;
}
/* 秒杀 */
.homepage-seckill {
  text-align: center;
  background-image: linear-gradient(-180deg, #f9f9f9 0%, #ffffff 100%);
}
.homepage-seckill h3 {
  padding: 0.7rem 0 0.5rem;
  position: relative;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homepage-seckill h3 span:first-child {
  display: block;
  float: left;
  font-size: 0.8rem;
  color: #4d4d4d;
  line-height: 0.8rem;
  font-weight: lighter;
}
.homepage-seckill .seckill-logo {
  height: 0.8rem;
  width: 0.8rem;
  background-image: url(../../public/imgs/home-seckill-light.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  margin: 0 0.15rem;
}
.homepage-seckill h3 span:last-child {
  font-size: 0.6rem;
  color: #9b9b9b;
  font-weight: normal;
  margin-left: 0.1rem;
}
/* 广告投放区 */
.homepage-ads {
  color: #333;
  padding: 0 0.3rem 0.7rem;
  background-color: #fff;
}
.normal a img {
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
}
.ads-imgs {
  display: flex;
  flex-wrap: wrap;
}
.ads-imgs .vertical {
  width: 50%;
}
.ads-right {
  margin-left: 0.1rem;
}
.horizon {
  display: flex;
}
.horizon li {
  width: 50%;
}
/* 广告底部 */
.ads-end {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  overflow: hidden;
  margin-top: 0.1rem;
}
.ads-end ul {
  display: flex;
  justify-content: space-between;
}
.ads-end li {
  background-color: #f9f9f9;
  width: 33.33%;
  margin-left: 0.1rem;
}
.ads-end a {
  text-decoration: none;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
}
.ads-end img {
  height: 3.6em;
  width: 3.6em;
  display: block;
  margin: 0.45rem 0;
}
.p-name {
  font-style: normal;
  font-weight: 400;
  font-size: 0.6rem;
}
.p-promotion {
  padding: 0.2rem 0 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  bottom: 1rem;
  background: none;
  font-size: 0.55rem;
  text-overflow: ellipsis;
  line-height: 1.2rem;
}
.p-promotion del {
  color: #9b9b9b;
}
/* 精品推荐 */
.homepage-recommend {
  margin-top: 0.5rem;
  background-color: #fff;
}
h2 {
  font-size: 0.9rem;
  color: #444;
  font-weight: normal;
  padding: 0.8rem 0 0.7rem;
  text-align: center;
}
.rcmd-item {
  margin-left: 0.3rem !important;
  width: 6.2rem !important;
  position: relative;
  top: 0;
}
.img-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  border-radius: 0.5rem;
}
.homepage-rcmd-body {
  padding: 0 0 0.85rem;
}
.homepage-rcmd-body .img-area {
  color: #9b9b9b;
  background: rgba(155, 155, 155, 0.1);
}
.p-tag {
  position: absolute;
  height: 0.6rem;
  width: 4.2rem;
  top: 0;
  left: 0.95rem;
  display: flex;
}
.p-img {
  width: 4.2rem;
}
.p-img img {
  width: 100%;
  margin: 1.05rem auto 0;
}
.p-promotion {
  padding: 0 0.55rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  bottom: 1rem;
  background: none;
  font-size: 0.55rem;
  text-overflow: ellipsis;
}
.rcmd-item-name {
  padding: 0.45rem 0.35rem 0;
  color: #333;
  font-size: 0.6rem;
  text-align: center;
}
.rcmd-item-name span {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.p-price {
  font-size: 0.65rem;
  color: #ca141d;
  padding: 0.3rem 0 0.8rem;
  text-align: center;
}
/* 手机 */
.homepage-phone {
  background-color: #fff;
  margin-top: 0.5rem;
  padding: 0.3rem 0.3rem 0.2rem;
}
.phone-hot .p-promotion {
  color: #9b9b9b;
  height: 1.2rem;
  background: rgba(155, 155, 155, 0.1);
}
.phone-hot .img-area .p-img {
  width: 100%;
}
.phone-hot .img-area img {
  height: 6.1rem;
  width: 6.1rem;
}
.phone-hot .p-promotion {
  margin-top: 0.3rem;
  padding: 0;
  width: 100%;
  text-align: center;
  border-radius: 0 0 0.5rem 0.5rem;
  font-size: 0.65rem;
}
.homepage-phone .phone-hot .p-price b {
  font-size: 0.65rem;
  font-weight: lighter;
}
.homepage-phone .homepage-rcmd-body {
  padding-bottom: 0;
}
.channel-footer {
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  color: #4a4a4a;
  height: 2.1rem;
  padding-bottom: 0.3rem;
  justify-content: center;
}
.homepage-phone .p-price del {
  color: #9b9b9b;
}
/* 版权 */
.homepage .body-footer {
  margin-top: 0.4rem;
}
</style>
