<template>
  <div class="shopping-cart-container">
    <!-- 头部 -->
    <div class="header">购物车</div>
    <!-- 中部 -->
    <div class="middle">
      <div class="empty-cart">
        <div class="empty-cart-header">
          <div class="empty-cart-img"></div>
          <p class="empty-cart-title">您的购物车没有商品</p>
        </div>
        <div class="empty-cart-footer" @click="toHome">去购物</div>
      </div>

      <!-- 热门推荐 -->
      <div class="system-pro-list">
        <header class="h">
          <span>热销推荐</span>
        </header>
        <div class="b">
          <ul>
            <li v-for="item in promtList" :key="item.name">
              <p class="p-img">
                <img :src="item.img" />
              </p>
              <p class="p-name">{{item.name}}</p>
              <p class="p-price">
                <b>
                  <small>￥</small>
                  <span>{{item.price}}</span>
                </b>
              </p>
              <i class="add-to-cart" @click="toProdcut(item.name)"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <HomePageFooter></HomePageFooter>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";
export default {
  components: {
    HomePageFooter: HomePageFooter
  },
  methods:{
      toHome(){
          this.$router.push("/");
      },
      toProdcut(msg){
          this.$router.push("product?name="+msg);
      }
  },
  data() {
    return {
      promtList: [
        {
          img: require("../assets/images/pro-1.png"),
          name: "HUAWEI P40 Pro",
          price: "6488"
        },
        {
          img: require("../assets/images/pro-2.png"),
          name: "荣耀30 Pro",
          price: "3999"
        },
        {
          img: require("../assets/images/pro-3.png"),
          name: "HUAWEI Mate 30 Pro 5G",
          price: "6399"
        },
        {
          img: require("../assets/images/pro-4.png"),
          name: "荣耀9X",
          price: "2199"
        },
        {
          img: require("../assets/images/pro-5.png"),
          name: "HUAWEI nova 7 Pro 5G",
          price: "3699"
        },
        {
          img: require("../assets/images/pro-6.png"),
          name: "华为麦芒8",
          price: "2399"
        }
      ]
    };
  }
};
</script>

<style scoped>
.shopping-cart-container {
  height: 100%;
  background: rgb(249, 249, 249);
  display: flex;
  flex-direction: column;
  position: relative;
}

.header {
  padding: 0 0.8rem;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #191919;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fff;
}

.middle {
  flex-grow: 1;
  overflow: auto;
}

/* .footer {
  height: 2.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgb(249, 249, 249);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
} */

.empty-cart {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.empty-cart-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.empty-cart-title {
  padding-top: 0.4rem;
  width: 13rem;
  font-size: 0.7rem;
  color: #999;
  line-height: 1rem;
}
.empty-cart-img {
  height: 5rem;
  width: 5rem;
  background-image: url("../assets/images/empty-cart.png");
  background-size: 100% auto;
}

.empty-cart-footer {
  border: 1px solid rgba(51, 51, 51, 0.3);
  color: #666;
  font-size: 0.65rem;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  min-width: 4.5rem;
  margin-top: 0.5rem;
}

/* 热门推荐 */
.system-pro-list {
  margin-bottom: 3rem;
}

.h {
  padding-top: 0 0.8rem;
  margin-bottom: 0.8rem;
  text-align: center;
}

.h span {
  font-size: 0.8rem;
  color: #333333;
  font-weight: bold;
}

.b {
  padding: 0 0.4rem;
}

ol ul {
  list-style: none;
}
.b ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.b ul li {
  width: 45%;
  background-color: #fff;
  margin: 0 0 0.3rem 0.3rem;
  border-radius: 0.5rem;
  padding: 0.75rem 0.4rem 0.5rem;
  text-align: center;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 11.25rem;
}

.p-img {
  color: #333;
  height: 6.5rem;
  width: 6.5rem;
}

.p-img img {
  width: 100%;
  height: 100%;
}

.p-name {
  font-size: 0.6rem;
  padding: 0.75rem 0 0.3rem;
}

.p-price b {
  color: #ca141d;
  line-height: 1.2;
  font-weight: bold;
}
.p-price b span {
  font-size: 0.75rem;
}
small {
  font-size: 0.55rem;
}

.add-to-cart {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  background-image: url("../assets/images/pro-cart.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>