<template>
  <div class="homepage">
    <div class="homepage-head">
      <!-- 搜索栏 -->
      <div class="search-box">
        <div class="search-logo-box">
          <img src="../../public/imgs/logo_vmall-text.png" alt />
        </div>
        <div type="text" class="search-input-area">
          <span></span>
          <div class="home-search-content"></div>
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
      <div class="home-head-swiper">
        <home-head-swiper></home-head-swiper>
      </div>
      <div class="home-serve-nav">
        <home-serve-nav></home-serve-nav>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeadSwiper from '../components/HomeHeadSwiper.vue'
import HomeServeNav from '../components/HomeServeNav.vue'

export default {
  data() {
    return {
      showMoreNav: false
    };
  },
  components: {
    HomeHeadSwiper,
    HomeServeNav
  }
};
</script>

<style scoped>
.homepage {
  font-size: 1rem;
  flex-grow: 1;
  overflow: auto;
  position: relative;
}
.homepage::-webkit-scrollbar {
  display: none;
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
  word-break: break-all;
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
.home-serve-nav{
  background-image: url(../../public/imgs/home-serve-nav.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 0.2rem;
}
</style>
