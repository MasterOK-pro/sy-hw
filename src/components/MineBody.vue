<template>
  <div class="mine-mid-body" @scroll="scroll">
    <div class="mid-body-top">
      <svg
        data-v-42b93e01
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        viewBox="0 0 360 219"
        xml:space="preserve"
        class="position-absolute"
        style="fill: url(&quot;#linear-gradient&quot;);"
      >
        <linearGradient
          data-v-42b93e01
          id="linear-gradient"
          gradientUnits="userSpaceOnUse"
          x1="29.2925"
          y1="-34.9094"
          x2="330.7075"
          y2="218.0078"
        >
          <stop data-v-42b93e01 offset="0" style="stop-color: rgb(236, 75, 52);" />
          <stop data-v-42b93e01 offset="1" style="stop-color: rgb(221, 28, 44);" />
        </linearGradient>
        <path
          data-v-42b93e01
          d="M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z"
          class="st0"
        />
      </svg>

      <div class="mine-topbar-box" :style="{opacity: backOpacity+''}">
        <div class="mine-topbar">
          <div class="mine-topbar-left" :style="{opacity: textOpacity+''}">
            <img src="../../public/imgs/app-mine-user-dflt.png" alt class="topbar-left-user" />
            <router-link to>登录/注册</router-link>
          </div>
        </div>
      </div>
      <div class="mine-topbar-right">
        <div>
          <van-icon name="setting-o" size="1.2rem" />
        </div>
        <div>
          <van-icon name="chat-o" size="1.2rem" />
        </div>
      </div>
      <div class="mid-body-top-dfltUser" @click="$router.push('login')">
        <img src="../../public/imgs/app-mine-user-dflt.png" alt />
        <div class="mid-body-top-login">
          <p>登录/注册</p>
          <p class="sign-in">
            <span></span>
            <span>签到领积分</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 代金券 -->
    <div class="mid-body-ticket">
      <ul class="ticket-list">
        <li class="ticket">
          <p class="ticket-count">-</p>
          <p class="ticket-title">积分</p>
        </li>
        <li class="ticket">
          <p class="ticket-count">-</p>
          <p class="ticket-title">优惠券</p>
        </li>
        <li class="ticket">
          <p class="ticket-count">-</p>
          <p class="ticket-title">代金券</p>
        </li>
      </ul>
    </div>
    <!-- 我的订单 -->
    <div class="mid-body-content">
      <div class="content-title">
        <span>我的订单</span>
        <span>
          <span>全部订单</span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="content-status">
        <a href class="content-status-item">
          <van-icon name="pending-payment" />
          <p>待付款</p>
        </a>
        <a href class="content-status-item">
          <van-icon name="send-gift-o" />
          <p>待收货</p>
        </a>
        <a href class="content-status-item">
          <van-icon name="comment-o" />
          <p>待评价</p>
        </a>
        <a href class="content-status-item">
          <van-icon name="refund-o" />
          <p>退换/退款</p>
        </a>
        <a href class="content-status-item">
          <van-icon name="description" />
          <p>回收单</p>
        </a>
      </div>
      <div class="content-adver-box">
        <div class="content-swiper">
          <van-swipe class="my-swipe" indicator-color="white" :autoplay="3000">
            <van-swipe-item>
              <img src="../../public/imgs/mine-adver-swiper-1.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../public/imgs/mine-adver-swiper-2.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../public/imgs/mine-adver-swiper-3.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!-- 会员中心 -->
    <div class="mid-body-content">
      <div class="content-title">
        <span>会员专享</span>
        <span>
          <span>更多会员权益</span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="content-adver-box vipright">
        <mine-vip-swiper :list="viprightList"></mine-vip-swiper>
      </div>
    </div>
    <!-- 我的VMALL -->
    <div class="mid-body-content vmall">
      <div class="content-title">
        <span>我的VMALL</span>
        <span></span>
      </div>
      <div class="content-status">
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-vip.png" alt />
          <p>会员频道</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-invite.png" alt />
          <p>邀请有礼</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-youxiang.png" alt />
          <p>优享购</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-yougouma.png" alt />
          <p>优购码</p>
        </a>
      </div>
      <div class="content-status">
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-tuangou.png" alt />
          <p>我的拼团</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-addrs.png" alt />
          <p>收货地址</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-book.png" alt />
          <p>预购记录</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-shop-qiyegou.png" alt />
          <p>企业购</p>
        </a>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="mid-body-content vmall">
      <div class="content-title">
        <span>我的服务</span>
        <span>
          <span>联系客服</span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="content-status">
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-wode.png" alt />
          <p>自助服务</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-tese.png" alt />
          <p>特色服务</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-lingshou.png" alt />
          <p>零售店</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-shiming.png" alt />
          <p>实名认证</p>
        </a>
      </div>
      <div class="content-status">
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-huanxin.png" alt />
          <p>以旧换新</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-baozhang.png" alt />
          <p>补购保障</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-dianchi.png" alt />
          <p>一口价换电池</p>
        </a>
        <a href class="content-status-item">
          <img src="../../public/imgs/mine-service-wenti.png" alt />
          <p>常见问题</p>
        </a>
      </div>
    </div>
    <!-- 华为生活 -->
    <div class="mid-body-content">
      <div class="content-title">
        <span>华为生活</span>
        <span></span>
      </div>
      <div class="content-adver-box vipright">
        <mine-live-swiper :list="viprightList"></mine-live-swiper>
      </div>
    </div>
    <h3>为您推荐</h3>
    <div class="mid-body-content">
      <ul class="content-adver-box recmd">
        <li class="recmd-item">
          <img src="../../public/imgs/mine-recmd-mate.jpg" alt />
        </li>
        <li class="recmd-item">
          <img src="../../public/imgs/mine-recmd-honor.jpg" alt />
        </li>
        <li class="recmd-item">
          <img src="../../public/imgs/mine-recmd-618.jpg" alt />
        </li>
      </ul>
    </div>
    <copyright></copyright>
    <to-top :show="showTop"></to-top>
  </div>
</template>

<script>
import MineVipSwiper from "./MineVipSwiper.vue";
import MineLiveSwiper from "./MineLiveSwiper.vue";
import Copyright from "./Copyright";
import ToTop from "./ToTop.vue";

export default {
  mounted() {
    let ticketTop = document.querySelector(".mid-body-ticket");
    this.ticHeight = ticketTop.getBoundingClientRect().bottom;
    this.ticHeight = Math.round(this.ticHeight);

    let topBar = document.querySelector(".mine-topbar");
    /* 计算1rem的像素值 */
    this.rem = topBar.getBoundingClientRect().height / 2;
    this.rem = Math.round(this.rem);

    this.ticHeight -= 2 * this.rem;
  },
  data() {
    return {
      showTop: false, // 不显示'返回顶部'
      viprightList: [
        {
          value: 100,
          desc: "华为品牌100元优惠券"
        },
        {
          value: 200,
          desc: "荣耀V30 200元优惠券"
        },
        {
          value: 10,
          desc: "【礼券】荣耀手机 10元优惠券"
        },
        {
          value: 250,
          desc: "华为品牌 畅享10 Plus 250元优惠券"
        }
      ],
      backOpacity: 0,
      textOpacity: 0,
      /* 奖券底部到页面顶的高度 */
      ticHeight: 0,
      /* 1rem像素值 */
      rem: 0
    };
  },
  components: {
    MineVipSwiper,
    MineLiveSwiper,
    Copyright,
    ToTop
  },
  methods: {
    scroll() {
      let bottomUsr = this.rem * 3;
      let scrollTop = event.target.scrollTop;

      /* 计算代金券顶部至视窗头的距离 */
      let ticketTop = document.querySelector(".mid-body-ticket");
      let ticTop = ticketTop.getBoundingClientRect().top;
      /* 代金券底部 */
      let ticBottom = ticTop + 3.4 * this.rem;
      // console.log(ticTop,this.textOpacity);

      /* 计算topBarBox透明度 */
      if (ticBottom >= 2 * this.rem) {
        this.backOpacity =
          (this.ticHeight - ticBottom + 2 * this.rem) / this.ticHeight;
      }
      if (ticBottom <= 2 * this.rem) {
        this.backOpacity = 1;
      }
      /* 计算'登录注册'透明度 */
      if (ticTop <= 2 * this.rem) {
        this.textOpacity = (2 * this.rem - ticTop) / (2 * this.rem);
      }
      if (ticTop < 0) {
        this.textOpacity = 1;
      }
      if (ticTop > 2 * this.rem) {
        this.textOpacity = 0;
      }
      /* '回到顶部'显示控制 */
      if (scrollTop > 720) {
        this.showTop = true;
      }
      if (scrollTop <= 720) {
        this.showTop = false;
      }
    }
  }
};
</script>

<style scoped>
.mine-mid-body::-webkit-scrollbar {
  display: none;
}
.mine-mid-body ul {
  list-style: none;
}

/* 组件顶部 */
.mid-body-top {
  height: 9.75rem;
  position: relative;
}
/* svg样式 */
.position-absolute {
  position: absolute;
  top: -2rem;
}
/* 登录页顶栏 */
.mine-topbar-box {
  height: 2rem;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(255, 59, 48, 0.1) 0%,
      rgba(255, 0, 103, 0.1) 100%
    ),
    linear-gradient(rgba(202, 20, 29, 0.4), rgba(202, 20, 29, 0.4)),
    linear-gradient(143deg, #e41f2b 0%, #ff7346 100%);
  background-blend-mode: normal, normal, normal;
  position: fixed;
  top: 0;
  z-index: 99;
}
.mine-topbar {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
}

/* 顶栏左侧部分 */
.mine-topbar-left {
  height: 1.2rem;
  margin-left: 0.9rem;
  display: flex;
  align-items: center;
}
.mine-topbar-left a {
  font-size: 0.8rem;
  text-decoration: none;
  color: #fff;
  line-height: 100%;
}
.topbar-left-user {
  width: 1.2rem;
  margin-right: 0.5em;
}

/* 顶栏右侧部分 */
.mine-topbar-right {
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-size: 0.5rem;
  color: #fff;
  position: absolute;
  right: 0;
  position: fixed;
  top: 0;
  padding: 0.4rem 0;
  z-index: 999;
}
.mine-topbar-right div {
  padding-right: 0.5rem;
}
/* 默认用户(未登录时) */
.mid-body-top-dfltUser {
  height: 3rem;
  margin: 2rem auto 4.75rem 0.9rem;
  display: flex;
  align-items: center;
  position: relative;
}
.mid-body-top-dfltUser img {
  height: 3rem;
  width: 3rem;
}
.mid-body-top-login {
  margin-left: 0.45rem;
  color: #fff;
}
.mid-body-top-login p {
  cursor: pointer;
}
/* 签到元素 */
.mid-body-top-login > .sign-in {
  height: 1rem;
  font-size: 0.6rem;
  margin-top: 0.3rem;
  padding: 0.15rem 0.25rem 0.15rem 0.3rem;
  background-color: rgb(207, 49, 44);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
}
.sign-in > span:first-child {
  display: block;
  width: 0.7rem;
  height: 0.7rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABwCAMAAAB8U0MtAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMA9vzw2xDeDdXBkAfz4q1XKevPl4k+CsrFZ2IVNAS4tLFQTUW7p0gsJeVwX6CCfi8uHh111AfAAAAB0ElEQVRYw+3X626jMBAFYCAJmHsWCAQScm96Sbu77Xn/d6vHTasW0hhTVWoqnz+jjPVJFjZEY+j8ztxEy//N3l3AxlLoAqzRmlnAlRT+AdBojXnL/Q746Lm2bVsA7I8JecvktUivT7l1AGnMsu2eBugQa96CGTolOnUMqBzHoYfjfMyct6a8bnm1W3DIuyPJUx0A1qcwAcLGUs6BJ4VzNtw21yaR50jg57kUuN/3gv4KSHtAfwEgUIf5DjwLZZi75NhMCvdhuH7XdqbkEnISGPLF+K07enG0IIO3vFqHV1eQK4STwbVFshK9WUJuOup2AWKSKN+c63S9OWsh74wZEy7vfuU2JokH4Xa5yl3dkxRZ+GqXfHuUS1/17ZgE5CJyalDIqO7zPo6zsr7ET8c5OOVwc979s4DbVtcDj3k24Fm14A315ZkYrVRd5F/jRK6vhubZ2NHE0NHRuYTouUPPHXru+E7oZyErRbWTSgWm4Dkca6wAAwK7Y10owEFf6BGIe2zVf2DFgWo2TKqffY6/Fm5Wy5h+xwXLfAUYg6fknmqqAAtA/HmsqJp1d8gA8dFZqsKMgHfc8r3CVv3UNO9pgitZ6OVKx1HXeu7Qc4fOl/IMGP3M8KZ8O7sAAAAASUVORK5CYII=)
    no-repeat bottom center;
  background-size: 100%;
  margin-right: 0.1rem;
}
.sign-in > span:last-child {
  margin-left: 0.1rem;
}
/* 代金券 */
.mid-body-ticket {
  height: 3.4rem;
  margin: -2.65rem 0.45rem;
  text-align: center;
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  margin-left: 0.45rem;
  margin-right: 0.45rem;
  padding: 0 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 9;
}
.ticket-list {
  list-style-type: none;
  padding: 0.7rem 0;
  display: flex;
}
.ticket {
  flex-grow: 1;
}
.ticket-list .ticket:nth-child(2) {
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
}
.ticket-count {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  color: #444;
}
.ticket-title {
  font-size: 0.6rem;
  color: #444;
}
/* 我的订单 */
.mid-body-content {
  background: #fff;
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  margin-left: 0.45rem;
  margin-right: 0.45rem;
  padding: 0 0.5rem 0.5rem;
  overflow: hidden;
}
/* 订单标题 */
.content-title {
  height: 2rem;
  display: flex;
  justify-content: space-between;
  font: 0.7rem/2rem normal;
  font-weight: bold;
}
.content-title > span:last-child {
  font-size: 0.6rem;
  font-weight: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
}
/* 订单状态 */
.content-status {
  display: flex;
  justify-content: space-between;
}
.content-status-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-status-item {
  color: #666;
  font-size: 1.5rem;
  padding-top: 0.25rem;
}
.content-status-item p:last-child {
  margin-top: 0.45rem;
  font-size: 0.6rem;
  width: 2.75rem;
  text-align: center;
}
/* 订单轮播广告 */
.content-adver-box {
  width: 100%;
  height: 4.5rem;
  margin-top: 0.4rem;
  margin-left: -0.5rem;
  border-radius: 0.25rem;
  position: relative;
}
.my-swipe {
  width: 100%;
  height: 4.5rem;
  padding: 0 0.5rem;
}
.van-swipe-item {
  width: 100%;
  padding-right: 0.5rem;
}
.van-swipe-item img {
  width: 100%;
  border-radius: 0.25rem 0.25rem;
}
.van-swipe__indicators {
  bottom: 0.2rem !important;
  left: 85% !important;
}
/* vmall样式 */
.vmall .content-status-item {
  width: 25%;
}
.vmall .content-status:first-child {
  margin-top: 0.3rem;
}
.vmall .content-status:last-child {
  margin-top: 0.75rem;
}
.vmall .content-status-item img {
  max-width: 2rem;
  max-height: 2rem;
}
/* 为您推荐 */
.content-adver-box.recmd {
  height: fit-content;
  padding: 0 0.5rem;
}
.mine-mid-body h3 {
  height: 2.5rem;
  font-size: 0.8rem;
  color: #333;
  text-align: center;
  line-height: 2.5rem;
}
.recmd-item {
  max-width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f8f8f8;
}
.recmd .recmd-item:last-child {
  border: none;
  padding-bottom: 0;
}
.recmd-item img {
  width: 100%;
  border-radius: 0.2rem;
}
</style>