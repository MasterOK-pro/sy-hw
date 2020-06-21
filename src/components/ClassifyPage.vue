<template>
  <div class="classify-page">
    <div class="header iconfont">
      <div class="search">
        <span>&#xe682;</span>
        <input type="text" placeholder="P40 pro" />
      </div>
      <div class="icon">
        <span>&#xe65e;</span>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <ul class="list">
          <li v-for="(item,index) in dataList" :key="index">
            <span :class="{'bor':clicked==index}" @click="changeTab(index)">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <component :is="currentView"></component>
        <!-- 组件一 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
        components: {
        com0: {
            template: `
            <div class="zujian1">
            <div class="boxa1">
                <a href="">
                    <img src="../assets/images/b1.png" alt="">
                </a>
            </div>
            <div class="boxa2">
                <a href="">
                    <img src="./images/a2.jpg" alt="">
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
            <div class="bijiben">
                笔记本
            </div>
            <ul class="ben-list">
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
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
                    <img src="./images/a1.jpg" alt="">
                </a>
            </div>
            <div class="boxa2">
                <a href="">
                    <img src="./images/a2.jpg" alt="">
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
            <!-- 笔记本 -->
            <div class="bijiben">
                笔记本
            </div>
            <ul class="ben-list">
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
                <li>
                    <div class="primary">
                        <p class="sub01">
                            <img src="images/b1.png" alt="">
                        </p>
                        <p class="content01">
                            <span>华为智慧屏</span>
                        </p>
                    </div>  
                </li>
            </ul>
        </div>
            `
        },
        com2: {
            template: `
                <div>组件2</div>
            `
        },
        com3: {
            template: `
                <div>组件3</div>
            `
        },
        com4: {
            template: `
                <div>组件4</div>
            `
        },
        com5: {
            template: `
                <div>组件5</div>
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
    data () {
        return {
        dataList: ["新品", "华为手机", "荣耀手机", "笔记本&平板", "智能穿戴&VR", "智慧屏","耳机音箱","专属配件","通用配件","生态产品","增值服务","智能计算",""],
        clicked: 0,
        currentView: 'com0'
    }
    } ,
    methods: {
        changeTab(index){
            this.clicked = index;
            this.currentView = 'com' + index;
        }
    }
};
</script>

<style>
.classify-page{
    flex-grow: 1;
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
    height: 573px;   
}
/* 左半部 */
.left {
    width: 102px;
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
    width: 273px;
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
.right {
    width: 273px;
    height: 573px;
    /* background-color: rgb(17, 163, 189); */
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
.zujian1 img {
    width: 100%;
    height: 100%;
}
/* 轮播插件 */
.swiper-container {
    width: 273px;
    height: 40px;
    margin: 0 auto;
    /* background-color: red; */
}

.swiper-container .swiper-slide{
    width: 79px;
    height: 40px;
    margin-left: 5px;
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
    height: 562px;
    /* background-color: slateblue; */
    margin-left: 12px;
}
.con ul {
    width: 250px;
    height: 562px;
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

/* 笔记本 */
.bijiben {
    width: 273px;
    height: 17px;
    /* background-color: wheat; */
    margin: 16px 0px 8px 0px;
    text-align: center;
}
.ben-list{
    width: 250px;
    height: 337px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
}
</style>