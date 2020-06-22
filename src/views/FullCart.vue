<template>
  <div class="full-cart-container">
    <!-- 头部 -->
    <div class="full-cart-header">
      <p>购物车</p>
      <span class="edit">编辑</span>
    </div>

    <!-- 中间 -->
    <div class="middle">
      <div class="sc-pro-area" v-for="(item,index) in cartList " :key="item.price">
        <div class="pro-coupon">
          <i class="icon-coupon"></i>
          <p>领券直减10</p>
          <span>领券</span>
        </div>

        <div class="pro-panels">
          <label for class="checkbox">
            <input class="item-checkbox" @change="itemSelect" type="checkbox" />
          </label>
          <div class="sc-pro-href">
            <p class="p-img">
              <img :src="item.img" alt />
            </p>
            <div class="sc-pro-info">
              <p class="p-name">
                <span>{{item.desc}}</span>
              </p>
              <p class="sku-line">
                <span class="fonts">{{item.config}}</span>
              </p>
              <div class="promotion-line">
                <div class="promotion-item">
                  <span>分期免息</span>
                </div>
              </div>
              <div class="price-line">
                <div class="p-price">
                  <b>
                    <small>￥</small>
                    <span>{{item.price}}</span>
                  </b>
                </div>

                <span class="input-number">
                  <div class="minus" @click="reduce(index)"></div>
                  <input type="text" readonly :value="item.count" />
                  <div class="add" @click="add(index)"></div>
                </span>
              </div>
              <div class="discount-line">
                <p class="limit">限购20件</p>
              </div>
              <div class="sc-pro-other">
                <p class="other-title">服务</p>
                <div class="pro-other-cont">
                  <div class="p-guarantee">
                    <span class="border">碎屏宝</span>
                    <span class="border">延长宝</span>
                  </div>
                  <i class="icon-more"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <div class="input-wrap">
        <input class="footer-check select-all" @change="allSelect" type="checkbox" />
        <span class="sc-all">全选</span>
      </div>
      <div class="price">
        <label for>总计：</label>
        <span>￥{{totalPrice}}</span>
      </div>
      <div class="action-right">
        <a href class="action-btn">结算({{totalCount}})</a>
      </div>
    </div>
    <HomePageFooter></HomePageFooter>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";

export default {
  components: {
    HomePageFooter: HomePageFooter
  },
  data() {
    return {
      totalCount:0,
      totalPrice:0,
      cartList: [
        {
          img: require("../assets/images/cart-img-1.png"),
          desc:
            "荣耀X10 麒麟820双模5G九频 90Hz全速屏 RYYB高感光摄影 6GB+128GB（竞速蓝）",
          config: " 竞速蓝,全网通 6GB+128GB,官方标配",
          price: "2199",
          count: 1
        },
        {
          img: require("../assets/images/cart-img-2.png"),
          desc:
            "荣耀30 Pro 50倍超稳远摄 超感光高清夜拍 双模5G 麒麟990 5G SoC 8GB+128GB 幻夜黑",
          config: " 幻夜黑,Pro 8GB+128GB,官方标配",
          price: "3999",
          count: 1
        },
        {
          img: require("../assets/images/cart-img-3.png"),
          desc: "HUAWEI P40 5G 全网通 8GB+128GB（零度白）",
          config: " 零度白,5G全网通 8GB+128GB,官方标配",
          price: "4488",
          count: 1
        }
      ]
    };
  },
  methods: {
    reduce(index) {
      if (this.cartList[index].count > 1) {
        this.cartList[index].count--;
      }
    },
    add(index) {
      if (this.cartList[index].count < 20) {
        this.cartList[index].count++;
      }
    },
    allSelect(e) {
      let selectAll = document.querySelector(".select-all");
      let itemCheckbox = document.querySelectorAll(".item-checkbox");
      // console.log(e.target);
      if (e.target.checked) {
        itemCheckbox.forEach(function(item) {
          item.checked = true;
        });
      } else {
        itemCheckbox.forEach(function(item) {
          item.checked = false;
        });
      }
    },
    itemSelect(e) {
      let flag = true;
      let itemCheckbox = document.querySelectorAll(".item-checkbox");
      let selectAll = document.querySelector(".select-all");
      if (e.target.checked){
          e.target.parentElement.classList.add("item-selected");
      } else {
          e.target.parentElement.classList.remove("item-selected");
      }
      itemCheckbox.forEach(function(item) {
        if (!item.checked) {
          flag = false;
        }
      });
      selectAll.checked = flag;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.full-cart-container {
  height: 100%;
  background-color: rgb(249, 249, 249);
  display: flex;
  flex-direction: column;
}

/* 头部 */
.full-cart-header {
  height: 2rem;
  width: 100%;
  max-width: 100%;
  max-width: 100%;
  background-color: #fff;
  padding: 0 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.full-cart-header p {
  display: block;
  line-height: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #553e3e;
  font-weight: 400;
  width: 90%;
}

.edit {
  font-size: 0.75rem;
  color: #888;
  margin-left: -0.8rem;
}

.middle {
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  max-width: 100%;
  padding: 0.4rem 0.6rem 3rem 0.6rem;
}

.sc-pro-area {
  margin-bottom: 0.4rem;
  padding: 0.65rem 0 0.8rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
  height: 11.8rem;
}

.pro-coupon {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.4rem 0.15rem 1.8rem;
  height: 1rem;
  color: #333;
}

.icon-coupon {
  width: 1.25rem;
  height: 0.85rem;
  margin-right: 0.2rem;
  background-image: url("../assets/images/quan.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  color: #333;
}

.pro-coupon p {
  font-size: 0.6rem;
  flex-grow: 1;
}

.pro-coupon span {
  padding: 0.1rem 0.55rem;
  font-size: 0.65rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.7rem;
  border: solid 1px rgba(51, 51, 51, 0.3);
  margin-left: 1.65rem;
}

.pro-panels {
  position: relative;
  padding: 0.3rem 0.4rem 0.5rem 1.8rem;
}

.checkbox {
  position: absolute;
  padding: 1.8rem 0.3rem 1.5rem 0.5rem;
  left: 0;
  top: 0;
  z-index: 2;
}

.sc-pro-href {
  display: flex;
  flex-direction: row;
}

.p-img {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
}

.p-img img {
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: top;
}

.sc-pro-info {
  margin-left: 0.3rem;
  flex-grow: 1;
}

.p-name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.p-name span {
  font-size: 0.65rem;
  position: relative;
  word-break: break-all;
  word-wrap: break-word;
  display: block;
  top: 0;
  color: #333;
}

.sku-line {
  margin-top: 0.3rem;
}

.fonts {
  font-size: 0.55rem;
  word-break: break-all;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.promotion-line {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}

.promotion-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.3rem;
  margin-right: 0.2rem;
  height: 0.7rem;
  margin-bottom: 0.2rem;
  font-size: 0.5rem;
  color: #ef5a62;
  border: 1px solid rgba(202, 20, 29, 0.3);
  border-radius: 0.45rem;
  position: relative;
}

.price-line {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.p-price b {
  font-size: 0.75rem;
  color: #ca141d;
  font-weight: bold;
}

b small {
  font-size: 0.55rem;
}

.input-number {
  color: #333;
  text-align: center;
  min-width: 1em;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 1.55em;
  position: relative;
  border-radius: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.minus {
  height: 1.2rem;
  width: 1.2rem;
  background-size: 200% 100%;
  background-image: url("../assets/images/minus1.png");
  background-repeat: no-repeat;
  cursor: pointer;
}

.input-number input {
  width: 1.65rem;
  height: 100%;
  line-height: 100%;
  font-size: 0.65rem;
  border: none;
  color: #333;
  text-align: center;
}

.add {
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
  background-size: 200% 100%;
  background-image: url("../assets/images/add1.png");
}

.discount-line {
  color: #ca141d;
  font-size: 0.5rem;
  word-break: break-all;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 0.3rem;
}

.sc-pro-other {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.3rem;
}

.other-title {
  font-size: 0.55rem;
  color: #666;
  height: 1.2rem;
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
}

.pro-other-cont {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.p-guarantee {
  width: 6.4rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
}

.border {
  border: 0.5px solid #b2b3b4;
  color: #333;
  border-radius: 0.1335rem;
  text-align: center;
  font-size: 0.55rem;
  padding: 0.15rem 0.3rem;
  margin-right: 0.3rem;
  line-height: 1.2;
}

.icon-more {
  display: block;
  margin-left: 0.8rem;
  background: url("../assets/images/elip3.png");
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;
  width: 1.2rem;
  height: 1.2rem;
}

.footer {
  width: 100%;
  max-width: 100%;
  height: 3rem;
  background-color: #fff;
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.input-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* 设置input的样式 */
input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  -webkit-appearance: none;
  border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
}

input[type="checkbox"]:checked {
  background: url("../assets/images/checkbox.png");
  background-size: 100% 200%;
  background-position: bottom;
  background-repeat: no-repeat;
}

.footer-check {
  margin-left: 1rem;
}

.sc-all {
  font-size: 0.65rem;
  color: #999;
  padding-left: 0.4rem;
}

.price {
  margin-left: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.price label {
  font-size: 0.75rem;
  vertical-align: middle;
  padding-top: 0.05rem;
}

.price span {
  color: #ca141d;
  font-size: 0.85rem;
  font-weight: bold;
  vertical-align: middle;
  padding-top: 0.05rem;
}

.action-right {
  margin-right: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.action-btn {
  width: 4.5rem;
  color: #fff;
  background-image: linear-gradient(90deg, #e43e2d, #ca141d);
  font-size: 0.75rem;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  text-align: center;
}
</style>