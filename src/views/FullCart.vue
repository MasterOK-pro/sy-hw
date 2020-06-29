<template>
  <div class="full-cart-container">
    <!-- 头部 -->
    <div class="full-cart-header">
      <p>购物车</p>
      <span class="edit" v-if="myShow" @click="myClick">编辑</span>
      <span class="edit" v-else @click="myClick2">完成</span>
    </div>

    <!-- 中间 -->
    <div class="middle">
      <div class="sc-pro-area" v-for="(item,index) in cartList " :key="index">
        <div class="pro-coupon">
          <i class="icon-coupon"></i>
          <p>领券直减10</p>
          <span>领券</span>
        </div>

        <div class="pro-panels">
          <label for class="checkbox">
            <input class="item-checkbox" v-model="item.checked" type="checkbox" @click="checkBoxTest"/>
          </label>
          <div class="sc-pro-href">
            <p class="p-img">
              <img :src="item.img" alt @click="toPro(index)" />
            </p>
            <div class="sc-pro-info">
              <p class="p-name">
                <span>{{item.name}}</span>
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
                  <input type="text" readonly v-model="item.count" />
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
    <div v-if="myShow" class="footer">
      <div class="input-wrap">
        <input
          class="footer-check select-all"
          v-model="allChecked"
          @change="allSelect"
          type="checkbox"
        />
        <span class="sc-all">全选</span>
      </div>
      <div class="price">
        <label for>总计：</label>
        <span>￥{{totalPrice}}</span>
      </div>
      <div class="action-right">
        <a href class="action-btn count">结算({{totalCount}})</a>
      </div>
    </div>
    <div v-else class="footer">
      <div class="input-wrap">
        <input
          class="footer-check select-all"
          v-model="allChecked"
          @change="allSelect"
          type="checkbox"
        />
        <span class="sc-all">全选</span>
      </div>
      <div class="action-right">
        <a class="action-btn del" @click="dltItem">删除</a>
      </div>
    </div>
    <HomePageFooter></HomePageFooter>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";
import Product from "../assets/manual-data.js";

export default {
  components: {
    HomePageFooter: HomePageFooter
  },
  data() {
    return {
      allChecked: true,
      myShow:true
    };
  },

  computed: {
    totalPrice: function() {
      let totalPrice = 0;
      this.cartList.map(item => {
        if (item.checked === true) {
          totalPrice += parseFloat(item.price) * item.count;
        }
      });
      let allChecked = this.cartList.length > 0;
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].checked === false) {
          allChecked = false;
          break;
        }
      }
      this.allChecked = allChecked;
      return totalPrice;
    },
    totalCount: function() {
      let totalCount = 0;
      this.cartList.map(item => {
        if (item.checked === true) {
          totalCount += item.count;
        }
      });
      this.$store.commit("totalCount",totalCount);
      return totalCount;
    },

    myProduct(){
      let list = [];
      for(let item of Product){
        if(item.name){
          list.push(item);
        }
      }
      return list;
    },
      cartList(){
          return this.$store.state.myCart;
      }
  },
  mounted() {

  },
  methods: {
    checkBoxTest () {
      // console.log (this.$store.state.myCart);
    },
    toPro(index){
      this.$router.push({path:"Product",query:{name:this.cartList[index].name}});
      // this.$route.meta.title = this.myProduct[index].name;
      document.title = this.myProduct[index].name;
      console.log(this.$route.query.name);
    },
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
    allSelect() {
      let allSelected = true;
      //只有商品都选中且全选按钮为true时，全选才选中
      this.cartList.map(item => (allSelected = item.checked && allSelected));
      // 若全选为false，则商品都不选中
      this.cartList.map(item => (item.checked = !allSelected));
    },
     myClick(){
      this.myShow =false;
      this.cartList.map(item =>{
        item.checked = false;
      })
      this.allChecked = false;
    },
    myClick2(){
      this.myShow =true;
    },
    dltItem () {
      this.$store.commit ('dltItem');
      for (let item of this.cartList) {
        if ( !item.checked ) {
          this.allChecked = false;
          break;
        }
      }
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

.action-btn.count {
  width: 4.5rem;
  color: #fff;
  background-image: linear-gradient(90deg, #e43e2d, #ca141d);
  font-size: 0.75rem;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  text-align: center;
}
.action-btn.del{
  width: 4.5rem;
  color: #333;
  background-color: #fff;
  border: 1px solid rgba(51,51,51,.3);
    font-size: 0.75rem;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  text-align: center;
}
</style>
