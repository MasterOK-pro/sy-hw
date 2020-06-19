<template>
  <div class="mine-mid-body">
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

      <div class="mine-topbar">
        <div class="mine-topbar-left">
          <img src="../../public/imgs/app-mine-user-dflt.png" alt class="topbar-left-user" />
          <router-link to>登录/注册</router-link>
        </div>
        <div class="mine-topbar-right">
          <div>
            <van-icon name="setting-o" size="1.2rem" />
          </div>
          <div>
            <van-icon name="chat-o" size="1.2rem" />
          </div>
        </div>
      </div>
      <div class="mid-body-top-dfltUser">
        <img src="../../public/imgs/app-mine-user-dflt.png" alt />
        <div class="mid-body-top-login">
          <p>登录/注册</p>
          <p class="sign-in">
            <span>@</span>
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
    <div class="mid-body-order">
      <div class="order-title">
        <span>我的订单</span>
        <span>
          <span>全部订单</span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="order-status">
        <a href class="order-status-item">
          <van-icon name="pending-payment" />
          <p>待付款</p>
        </a>
        <a href class="order-status-item">
          <van-icon name="send-gift-o" />
          <p>待收货</p>
        </a>
        <a href class="order-status-item">
          <van-icon name="comment-o" />
          <p>待评价</p>
        </a>
        <a href class="order-status-item">
          <van-icon name="refund-o" />
          <p>退换/退款</p>
        </a>
        <a href class="order-status-item">
          <van-icon name="description" />
          <p>回收单</p>
        </a>
      </div>
      <div class="order-adver-box">
        <div class="order-swiper">
          <van-swipe class="my-swipe"
          
          indicator-color="white">
            <van-swipe-item>
              <img src="../../public/imgs/mine-adver-swiper-1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../public/imgs/mine-adver-swiper-2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../public/imgs/mine-adver-swiper-3.jpg" alt="">
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mine-mid-body {
  flex-grow: 1;
  overflow: auto;
}

/* 组件顶部 */
.mid-body-top {
  height: 9.75rem;
  /* position: relative; */
}
/* svg样式 */
.position-absolute {
  position: absolute;
  top: 0;
}
/* 登录页顶栏 */
.mine-topbar {
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(231, 60, 49);
  box-sizing: content-box;
  position: fixed;
  top: 0;
  z-index: 9;
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
.mine-topbar-left img {
  max-height: 100%;
  margin-right: 0.5em;
}

/* 顶栏右侧部分 */
.mine-topbar-right {
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-size: 0.5rem;
  color: #fff;
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
  max-height: 100%;
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
.mid-body-order {
  background: #fff;
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  margin-left: 0.45rem;
  margin-right: 0.45rem;
  padding: 0 0.5rem 0.5rem;
  overflow: hidden;
}
/* 订单标题 */
.order-title {
  height: 2rem;
  display: flex;
  justify-content: space-between;
  font: 0.7rem/2rem normal;
  font-weight: bold;
}
.order-title > span:last-child {
  font-size: 0.6rem;
  font-weight: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
}
/* 订单状态 */
.order-status {
  display: flex;
}
.order-status-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-status-item {
  color: #666;
  font-size: 1.5rem;
  padding-top: 0.25rem;
}
.order-status-item p:last-child {
  margin-top: 0.45rem;
  font-size: 0.6rem;
}
/* 订单轮播广告 */
.order-adver-box {
  width: calc(100% + 1rem);
  height: 4.5rem;
  margin-top: 0.4rem;
  margin-left: -0.5rem;
  border-radius: 0.25rem;
}
.my-swipe{
  height: 4.5rem;
  padding: 0 0.5rem;
}
.van-swipe-item {
  max-width: 100%;
  border-radius: 0.25rem 0.25rem;
  overflow: hidden;
}
.van-swipe-item img{
  max-height: 100%;
}
</style>