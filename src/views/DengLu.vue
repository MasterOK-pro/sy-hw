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
          <p class="zhang">华为账号</p>
        </div>
        <p class="tips">登录华为账号以使用云空间，华为应用及更多服务</p>
      </div>
      <!-- 主体 -->
      <div class="centent">
          <component :is="componentName" @click="changDeng"></component>

        <!-- <div class="main iconfont">
          <div class="countryCode">
            <div class="c-left">
              <span>国家/地区</span>
            </div>
            <div class="c-right">
              <span>中国 +86</span>
              <span class="c-icon">  ></span>
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
            <strong @click="changDeng(index)">密码登录</strong>
          </div>
        </div> -->
      </div>
      <!-- 下部 -->
      <div class="footer">
        <div class="other-way">
          <span>其他方式登录</span>
        </div>
        <div class="second-picture">
          <div class="p1 pic">
            <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=209207&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&client_id=209207&redirect_uri=https://hwid1.vmall.com/CAS/qq/return&response_type=code&state=RJPwmPSW9ZEYn3GsPpcicSGLKGPukxEP&scope=get_user_info,add_topic,add_one_blog,add_album,upload_pic,list_album,add_share,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idollist,add_idol,del_ido,get_tenpay_addr">
                <img src="../../public/imgs/denglu-qq.png" alt />
            </a>
          
          </div>
          <div class="p2 pic">
            <a href="https://mclient.alipay.com/gateway/exterfaceAssign.htm?partner=2088801218625919&alipay_exterface_invoke_assign_sign=_wz4r_h_s_k4_lnjm_jvap_gp_mx_y_ki3_n7_yev_z_k_pet_s_kh_fxz_a_o_c_ip2q8_r_o1j_n_q%3D%3D&service=wap.user.common.login&_input_charset=UTF-8&sign=0058499594bed33dbea438d7b017db2e&return_url=https%3A%2F%2Fhwid1.vmall.com%2FCAS%2Falipay%2Freturn%3FloginChannel%3D7000000%26loginUrl%3Dhttps%253A%252F%252Fhwid1.vmall.com%252FCAS%252Fmobile%252Fstandard%252FwapLogin.html%26service%3Dhttps%253A%252F%252Fhwid1.vmall.com%252FAMW%252Fportal%252FuserCenter%252Findex.html%26reqClientType%3D7%26state%3DymNAHngpkLCmfLxkxLeaw5SZtXgLLdU8&return_url_failed=https%3A%2F%2Fhwid1.vmall.com%2FCAS%2Fmobile%2Fstandard%2FwapLogin.html&sign_type=MD5&alipay_exterface_invoke_assign_model=home&alipay_exterface_invoke_assign_target=commonLogin.htm&alipay_exterface_invoke_assign_client_ip=180.117.243.3">
              <img src="../../public/imgs/denglu-zhifu.png" alt />
            </a>
            
          </div>
        </div>
        <div class="footer-end">
          <div class="problem">
            <a
              href="https://id1.cloud.huawei.com/AMW/encounterProblems/index.html?reqClientType=26&loginChannel=26000002&countryCode=cn&loginUrl=https%3A%2F%2Fid1.cloud.huawei.com%2FCAS%2Fmobile%2Fstandard%2FwapLogin.html&lang=zh-cn&themeName=huawei&service=https%3A%2F%2Fm.vmall.com%2Faccount%2Fcaslogin%3Furl%3Dhttps%253A%252F%252Fm.vmall.com%252Fpersonal"
            >遇到问题</a>
          </div>
          <div class="privacy">
            <a
              href="https://id1.cloud.huawei.com/AMW/portal/agreements/accPrivacyStatement/zh-cn_accPrivacyStatement.html?version=china&reqClientType=26&loginChannel=26000002"
            >隐私声明</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deng0 from "../components/Deng0.vue";
import Deng1 from "../components/Deng1.vue";
export default {
  components: {
    Deng0: Deng0,
    Deng1: Deng1
  },
  data() {
    return {
      
      clicked: 0,
      // currentView: 'Com0',
      componentName: "Deng0"
    };
  },
  methods:{
      changDeng(index){
          this.componentName = "Deng"+index;
          if (index==0) {
            document.title = '华为账号-短信验证码登录'
          }
          if (index==1) {
            document.title = '华为账号-登录'
          }
          console.log(this.$route)
      }
  }
};
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrap {
  width: 100%;
  height: 100%;
  background-color: white;
}
/* 上部样式 */
.header {
  width: 100%;
  height: 8.75rem;

  padding: 16px 24px 24px;
}
.center {
  width: 16.5rem;
  height: 2.8rem;
}
.head-logo {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
}
.head-logo > a > img {
  width: 100%;
  height: 100%;
}
.header-line>.zhang{
   width: 16.5rem;
  text-align: center;
  font-size: 24px;
  color: #191919;
  font-weight: 600;
}
.tips {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  margin: 4px 0px 0px;
  text-align: center;
}
/* 主体样式 */
.centent {
  width: 100%;
  height: 18rem;
}
.main {
  width: 16.5rem;
  height: 20.6rem;
  margin: 0 auto;
}
.countryCode {
  width: 15.6rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  color: #191919;
  font-size: 16px;
}

.c-left {
  width: 15.6rem;
  height: 2rem;
}
.c-right {
  width: 5.6rem;
  height: 2rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
}
.c-right .c-ion {
  font-size: 20px;
  display: inline-block;
  font-weight: 900;
  color: red;
}
.phone {
  width: 16.35rem;
  height: 1.9rem;
  font-size: 16px;
  margin-top: 20px;
  border-bottom: 1px solid #191919;
}
.phone input {
  display: inline-block;
  width: 16.5rem;
  height: 1.9rem;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
 
}
.verify {
  width: 16.5rem;
  height: 1.9rem;
  font-size: 16px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
 
}
.verify input {
  display: inline-block;
  width: 13rem;
  height: 1.9rem;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
}
.get-verify {
  width: 5rem;
  height: 1.9rem;
  color: rgba(0, 125, 255, 0.2);
  line-height: 38px;
  text-align: center;
}
.btn-wrap {
  width: 16.5rem;
  height: 1.8rem;

  margin-top: 1.5rem;
}
.btn-login {
  width: 16.5rem;
  height: 1.8rem;
  margin: 0 auto;
  background-color: rgb(235, 167, 170);
  color: white;
  border-radius: 20px;
  text-align: center;
  line-height: 36px;
}
.password {
  width: 16.5rem;
  height: 24px;
  color: #007dff;
  text-align: center;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 14px;
}
/* 下部样式 */
.footer {
  width: 18rem;
  height: 6.4rem;
  position: fixed;
  bottom: 0px;
  /* background-color: chartreuse; */
}
.other-way {
  width: 18rem;
  height: 0.9rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);

  font-size: 14px;
  margin: 0 auto;
  /* background-color: coral; */
}
.second-picture {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.second-picture .pic {
  width: 3.4rem;
  height: 2rem;
  text-align: center;
  margin-bottom: 24px;
}
.second-picture img {
  width:2rem;
  height:2rem;
}
.footer-end {
  width: 100%;
  height: 18px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 14px;
}
.problem {
  width: 10rem;
  height: 0.9rem;
  padding: 0px 16px;
  line-height: 18px;
  text-align: center;
  font-weight: 700 !important;
  padding-left: 5rem;
}
.problem a {
  color: #007dff;
}
.privacy {
  width: 10rem;
  height: 18px;
  padding: 0px 16px;
  border-left: 1px solid black;
  line-height: 18px;
  text-align: center;
  font-weight: 700 !important;
  padding-right: 5rem;
}
.privacy a {
  color: #007dff;
}
</style>
