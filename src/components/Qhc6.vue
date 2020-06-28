<template>
  <div class="zujian1">
    <div class="boxa1">
      <a href>
        <img src="../assets/images/a3.jpg" alt />
      </a>
    </div>
    <!-- 笔记本 -->
    <div class="title">
      <span>耳机音箱</span>
    </div>
    <div class="con">
      <ul>
        <li v-for="(item, index) of list" :key="index" @click='$router.push("product?name="+item.name)'>
          <div class="primary">
            <p class="sub01">
              <img :src="item.swiperImg[0]" alt />
            </p>
            <p class="content01">
              <span>{{item.name.split(' ').splice(0,1)[0]}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Product from "../assets/manual-data.js";

export default {
  computed: {
    list () {
      let arr = [];
      for (let item of Product) {
        if (item.classify == 'book') {
          arr.push (item);
        }
      }
      return arr;
    }
  }
};
</script>
 
<style scoped>
/* 组件一 */
.zujian1 {
  overflow: hidden;
  height: 100%;
  overflow-y: auto;
}
.boxa1 {
  width: 252px;
  height: 70px;
  margin: 8px 8px 0px 12.5px;
}
.boxa2 {
  width: 252px;
  height: 70px;
  margin: 8px 8px 0px 12.5px;
}
.zujian1 .boxa1 a {
  display: inline-block;
  width: 252px;
  height: 70px;
}
.zujian1 img {
  width: 100%;
  height: 100%;
}

/* 标题之下 */
.title {
  width: 273px;
  height: 42px;
  /* background-color: sandybrown; */
  text-align: center;
  line-height: 42px;
}
.con {
  width: 250px;
  /* height: 562px; */
  /* background-color: slateblue; */
  margin-left: 12px;
}
.con ul {
  width: 250px;
  /* height: 562px; */
  display: flex;
  justify-content: space-between;
  /* background-color: tomato; */
  flex-wrap: wrap;
}

.con img {
  width: 100%;
  height: 100%;
}
.sub01 {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.primary {
  width: 66px;
  height: 94px;
  margin: 8px auto;
  /* background-color: thistle; */
}
.content01 {
  font-size: 12px;
  text-align: center;
  margin: 8px 0px;
}
</style>
