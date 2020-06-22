<template>
  <div class="classify">
    <div class="test" @click="toProduct">classify</div>
    <!-- app首页底部导航按钮 -->
    <home-page-footer></home-page-footer>
  </div>
</template>

<script>
import HomePageFooter from "../components/HomePageFooter.vue";

export default {
  components: {
    HomePageFooter: HomePageFooter,
    com0: {
            template: `
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="../assets/images/a1.jpg" alt="">
                </a>
            </div>
            <div class="boxa2">
                <a href="">
                    <img src="../assets/images/a2.jpg" alt="">
                </a>
            </div>

           <!-- 轮播 -->
            
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href=""><img src="./images/1.png" alt=""></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="./images/2.png" alt=""></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="./images/3.png" alt=""></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="./images/4.png" alt=""></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="./images/5.png" alt=""></a>
                    </div>
                </div>
            </div>
            <!-- 轮播结束 -->
            <div class="title">
                <span>手机</span>
            </div>
            <div class="con">
                <ul>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                    <li>
                        <div class="primary">
                            <p class="sub01">
                                <img src="images/p1.png" alt="">
                            </p>
                            <p class="content01">
                                <span>HUAWEI P40 Pro+</span>
                            </p>
                        </div>  
                    </li>
                </ul>
            </div>
            <!-- 笔记本 -->
            <div class="title">
            <span>智慧屏&笔记本</span>
        </div>
        <div class="con">
            <ul>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏 V65i</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏 X65</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b3.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏 V55i</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b2.png" alt="">
                        </p>
                        <p class="content01">
                            <span>HUAWEI P40 Pro+</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b3.png" alt="">
                        </p>
                        <p class="content01">
                            <span>MateBook14 2020款</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b3.png" alt="">
                        </p>
                        <p class="content01">
                            <span>荣耀笔记本 14 </span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b3.png" alt="">
                        </p>
                        <p class="content01">
                            <span>MateBook D 14</span>
                        </p>
                    </div>  
                </li>
            </ul>
        </div>
            `
        },

        com1: {
            template: `
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="./images/h1.png" alt="">
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
        currentView: 'com0'
    }
  },
  methods:{
    toProduct(){
      this.$router.push("product");
    }
  }
};
</script>

<style scoped>
.classify {
  height: 100%;
  font-size: 1rem;
  color: green;
  display: flex;
  flex-direction: column;
}
.test {
  margin-top: 50px;
  flex-grow: 1;
}
</style>>
