<template>
  <div id="app">
    <div class="wrap">
      <!-- 上部 -->
      <div class="header">
        <div class="center">
          <div class="head-logo">
            <a href>
              <img src="../../public/imgs/denglu-huawei-logo.png" alt />
            </a>
          </div>
        </div>
        <div class="header-line">
          <p>华为账号</p>
        </div>
        <p class="tips">登录华为账号以使用云空间，华为应用及更多服务</p>
      </div>
      <!-- 主体 -->
      <div class="centent">
        <div class="main iconfont">
          <div class="countryCode">
            <div class="c-left">
              <span>国家/地区</span>
            </div>
            <div class="c-right">
              <span>中国 +86</span>
              <span class="c-icon">
                <van-icon name="arrow" size="20" />
              </span>
            </div>
          </div>
          <div class="phone">
            <input type="text" placeholder="手机号" />
          </div>
          <div class="verify">
            <input type="text" placeholder="短信验证码" />
            <div class="get-verify">获取验证码</div>
          </div>
          <div class="btn-wrap">
            <div class="btn-login">登录/注册</div>
          </div>
          <div class="password">
            <strong>密码登录</strong>
          </div>
        </div>
      </div>
      <!-- 下部 -->
      <div class="footer">
        <div class="other-way">
          <span>其他方式登录</span>
        </div>
        <div class="second-picture">
          <div class="p1 pic">
            <img src="../../public/imgs/denglu-qq.png" alt />
          </div>
          <div class="p2 pic">
            <img src="../../public/imgs/denglu-zhifu.png" alt />
          </div>
        </div>
        <div class="footer-end">
          <div class="problem">遇到问题</div>
          <div class="privacy">隐私声明</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .wrap {
            width: 100%;
            height: 633px;
           
        }
        /* 上部样式 */
        .header {
            width:  100%;
            height: 175px;
          
            padding: 16px 24px 24px ;
        }
        .center {
            width: 327px;
            height: 56px;
        }
        .head-logo {
            width: 40px;
            height: 40px;
            margin: 0 auto;
        }
        .head-logo>a>img{
            width: 100%;
            height: 100%;
        }
        .header-line{
            text-align: center;
            font-size: 24px;
            color: #191919;
            font-weight:550;
        }
        .tips{
            font-size: 14px;
            color: rgba(0, 0, 0, 0.5);
            margin: 4px 0px 0px;
            text-align: center;
        }
        /* 主体样式 */
        .centent {
            width:  100%;
            height: 360px;
          
        }
        .main{
            width: 327px;
            height: 412px;
            margin: 0 auto;
        }
        .countryCode {
            width: 327px;
            height: 40px;
            display: flex;
            justify-content:space-between;
            line-height: 40px;
            color: #191919;
        }

        .c-left {
            width: 72px;
            height: 40px;
        }
        .c-right {
            width: 92px;
            height: 40px;
            color: rgba(0, 0, 0, 0.5);
        }
        .phone {
            width: 327px;
            height: 38px;
          
            margin-top:20px;
            border-bottom: 1px solid #191919;
        }
        .phone input {
            display: inline-block;
            width: 327px;
            height: 38px;
            outline: none;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .verify {
            width: 327px;
            height: 38px;
           
            margin-top:30px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .verify input {
            display: inline-block;
            width: 100px;
            height: 38px;
            outline: none;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          
        }
        .get-verify {
            width: 98px;
            height: 38px;
          color: rgba(0, 125, 255, 0.2);
            line-height: 38px;
            text-align: center;
        }
        .btn-wrap{
            width: 327px;
            height: 36px;
       
            margin-top:30px;

        }
        .btn-login {
            width:327px;
            height: 36px;
            margin: 0 auto;
            background-color:rgb(235, 167, 170) ;
            color: white;
            border-radius: 20px;
            text-align: center;
            line-height: 36px;
        }
      .password {
          width: 327px;
          height: 24px;
        color: #007dff;
          text-align: center;
          line-height: 24px;
          margin-top: 16px;
          margin-bottom: 24px;
      }
      /* 下部样式 */
      .footer {
          width:  100%;
          height: 128px;
          position: fixed;
          /* background-color: chartreuse; */
        
      }
      .other-way {
          width:  100%;
          height: 18px;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
          margin-bottom: 12px;
          font-size: 14px;
          /* background-color: coral; */
      }
      .second-picture {
          width:  100%;
          height: 40px;
          display: flex;
          justify-content: center;
         
      }
      .second-picture .pic{
        width:68px;
        height: 40px;
        text-align: center;
        margin-bottom: 24px;
      }
      .second-picture img {
         width: 40px;
         height: 40px;    
      }
      .footer-end {
          width:  100%;
          height: 18px; 
          margin-top: 10px;
          display: flex;
          justify-content: center;
      }
      .problem {
          width: 100px;
          height: 18px;
          padding: 0px 16px;
          line-height: 18px;
          color: #007dff;
      }
      .privacy {
          width: 100px;
          height: 18px;
          padding: 0px 16px;
          border-left:1px solid black ;
          line-height: 18px;
          color: #007dff;
      }
</style>
