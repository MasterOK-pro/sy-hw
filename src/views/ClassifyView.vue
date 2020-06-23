<template>
  <div class="classify">
    <!-- <div class="test" @click="toProduct">classify</div> -->
    <!-- app首页底部导航按钮 -->
    <div>
        <div class="header iconfont">
            <div class="search">
                <a href=""><img src="../assets/images/da.png" alt=""></a>
                <input type="text" placeholder="P40 pro">
            </div>
            <div class="icon">
                 <a href=""><img src="../assets/images/liao.png" alt=""></a>
            </div>
        </div>
        <div class="main">
            <div class="left">
                <ul class="list">
                    <li v-for="(item,index) in dataList" :key=index  >
                       <span :class="{'bor':clicked==index}"
                            @click="changeTab(index)">{{item}}</span>
                    </li>   
                </ul>
            </div>
            <div class="right">
                <component :is="componentName"></component>
                <!-- 组件一 -->
              
            </div>
        </div>
    </div>
    <home-page-footer></home-page-footer>
  </div>
</template>


<script>

 
import HomePageFooter from "../components/HomePageFooter.vue";
import Com0 from "../components/sub-components/com0.vue";
import Com1 from "../components/sub-components/com1.vue";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  components: {
    
    HomePageFooter: HomePageFooter,
    Com0:Com0,
    Com1:Com1,
        com2: {
            template: `
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="./images/a3.jpg" alt="">
                </a>
            </div>
           
            <div class="title">
                <span>荣耀 V系列</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀V30 5G</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀V30 PRO 5G </span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <!-- Mate -->
            <div class="title">
                <span>荣耀 HONOR系列</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀30 Pro 5G</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀30 Pro 5G </span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀30 Pro 5G</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/p2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>荣耀30 Pro 5G</span>
                        </p>
                    </div>  
                </li>
                <li>
                <div class="primary">
                    <p class="sub01">
                        <img src="images/p2.png" alt="">
                    </p>
                    <p class="content01">
                        <span>荣耀30 Pro 5G</span>
                    </p>
                         </div>  
                     </li>
                     <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                             </p>
                            <p class="content01">
                                 <span>荣耀30 Pro 5G</span>
                              </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <div class="title">
                <span>HUAWEI nove系列</span>
            </div>

            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI nova 7 Pro</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI nova 7 Pro</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI nova 7 Pro</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI nova 7 Pro</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI nova 7 Pro</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI nova 7 Pro</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
        </div>
            `
        },
        com3: {
            template: `
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="./images/a3.jpg" alt="">
                </a>
            </div>
           
            <div class="title">
                <span>HUAWEI P系列</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <!-- Mate -->
            <div class="title">
                <span>HUAWEI Mate系列</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/p2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                <div class="primary">
                    <p class="sub01">
                        <img src="images/p2.png" alt="">
                    </p>
                    <p class="content01">
                        <span>HUAWEI P40 Pro+</span>
                    </p>
                         </div>  
                     </li>
                     <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                             </p>
                            <p class="content01">
                                 <span>HUAWEI P40 Pro+</span>
                              </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <div class="title">
                <span>HUAWEI nove系列</span>
            </div>

            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
        </div>
            `
        },
        com4: {
            template:  `
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="./images/a6.jpg" alt="">
                </a>
            </div>
            <div class="boxa1">
                <a href="">
                    <img src="./images/a7.jpg" alt="">
                </a>
            </div>
           
            <div class="title">
                <span>手表</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI Watch GT 2</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI Watch GT 2</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI Watch GT 2</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀手表2</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀手表2</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>荣耀手表2</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为儿童手表</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为儿童手表</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为儿童手表</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为儿童手表</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为儿童手表</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为儿童手表</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <!-- Mate -->
            <div class="title">
                <span>手环</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为手环</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为手环</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>华为手环</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/w5.png" alt="">
                        </p>
                        <p class="content01">
                            <span>荣耀手环5</span>
                        </p>
                    </div>  
                </li>
                <li>
                <div class="primary">
                    <p class="sub01">
                        <img src="images/w5.png" alt="">
                    </p>
                    <p class="content01">
                        <span>荣耀手环5</span>
                    </p>
                         </div>  
                     </li>
                     <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/w5.png" alt="">
                             </p>
                            <p class="content01">
                                 <span>荣耀手环5</span>
                              </p>
                        </div>  
                    </li>
                    <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/w6.png" alt="">
                         </p>
                        <p class="content01">
                             <span>华为手环3</span>
                          </p>
                    </div>  
                </li>
                <li>
                <div class="primary">
                    <p class="sub01">
                        <img src="images/w6.png" alt="">
                     </p>
                    <p class="content01">
                         <span>华为手环3</span>
                      </p>
                </div>  
            </li>
            <li>
            <div class="primary">
                <p class="sub01">
                    <img src="images/w6.png" alt="">
                 </p>
                <p class="content01">
                     <span>华为手环3</span>
                  </p>
            </div>  
        </li>
                </ul>
            </div>
            
            `
        },
        com5: {
            template:`
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="./images/a8.jpg" alt="">
                </a>
            </div>
           
            <div class="title">
                <span>HUAWEI P系列</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p4.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <!-- Mate -->
            <div class="title">
                <span>HUAWEI Mate系列</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/p2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                <div class="primary">
                    <p class="sub01">
                        <img src="images/p2.png" alt="">
                    </p>
                    <p class="content01">
                        <span>HUAWEI P40 Pro+</span>
                    </p>
                         </div>  
                     </li>
                     <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p2.png" alt="">
                             </p>
                            <p class="content01">
                                 <span>HUAWEI P40 Pro+</span>
                              </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <div class="title">
                <span>HUAWEI nove系列</span>
            </div>

            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p3.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
        </div>
            `
        },
        com6: {
            template: `
                <div>组件6</div>
            `
        },
        com7: {
            template: `
                <div>组件7</div>
            `
        },
        com8: {
            template: `
                <div>组件8</div>
            `
        },

  },
  data(){
     return {
        dataList: ["新品", "华为手机", "荣耀手机", "笔记本&平板", "智能穿戴&VR", "智慧屏", "耳机音箱", "专属配件", "通用配件", "生态产品", "增值服务", "智能计算", ""],
        clicked: 0,
        // currentView: 'Com0',
        componentName:'Com0'

    }
  },
  methods:{
    toProduct(){
      this.$router.push("product");
    },
    changeTab(index) {
            this.clicked = index;
            this.componentName = 'Com' + index;
        }
  }
};
</script>

<style scoped>
/* .classify {
  height: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}
.test {
  margin-top: 50px;
  flex-grow: 1;
} */


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
li {
    list-style: none;
}
/* 上部 */
.header{
    width: 375px;
    height: 42px;
    /* background-color: pink; */
    padding-top: 5px;
    padding-left: 15px;
    display: flex;
}
.search {
    width: 304px;
    height: 30px;
    background-color: rgba(245, 245, 245);
    border-radius: 16px;  
    border:1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    
}
.search span {
  font-size: 20px;
  padding-left: 8px;
  line-height: 28px;
}

.search input{
    display: inline-block; 
    height: 28px;
   position: absolute;
   left: 33px;
    width: 230px;
    border: none;
    background-color: rgba(245, 245, 245);
    
}
.icon {
    /* background-color: silver; */
    width: 37px;
    height: 25px;
    margin-top: 4px ;
    margin-left: 5px ;
    font-size: 25px;
    margin-left: 10px;
}



/* 主体 */
.main {
    display: flex;
    width: 375px;
    height: 623px;   
}
/* 左半部 */
.left {
    width: 92px;
    /* height: 718px; */
    /* background-color: rgb(222, 228, 141); */
    height: 100%;
    overflow-y: auto;
      
}
/* 隐藏滚动条 */
.left::-webkit-scrollbar {
    display: none;
}

/* 右半部 */
.right {
    width: 300px;
    height: 573px;
    /* background-color: aqua; */
    
    
}
.left>.list>li {
    width: 102px;
    height: 50px;
    padding: 16px 0px;
    padding-left: 16px; 
    font-size: 13.5px;  
}
.left>.list>li span.bor{
    border-right:2px solid orangered;
}
/* .left>.list>li span:hover{
    border-right:2px solid orangered;
} */

.bor {
    border-right:2px solid orangered;
}

.left>.list>li span {
    display: inline-block;
    /* border-right:1px solid orangered; */
    width: 86px;
    height: 18px;
    /* background-color: palegoldenrod; */
}

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
.zujian1 .boxa1 a{
    display: inline-block;
    width: 252px;
    height: 70px;
}
.zujian1 img {
    width:252px;
    height: 70px;
}
/* 轮播插件 */
/* .swiper-container {
    width: 273px;
    height: 40px;
    margin: 0 auto;
    background-color: red;
}

.swiper-container .swiper-slide{
    width: 79px;
    height: 40px;
    margin-left: 5px;
} */
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
.sub01{
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


</style>>
