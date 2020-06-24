<template>
  <div class="main iconfont">
    <div class="phone">
      <input type="text" placeholder="手机号/邮件地址/华为号" :value="usrName"/>
    </div>

    <div class="verify">
      <input type="password" placeholder="密码" :value="usrPws"/>
    </div>

    <div class="duanxing">
      <div class="dx-l">
        <span @click="changDeng(0)">短信验证码登录</span>
      </div>
      <div class="dx-r">忘记密码</div>
    </div>

    <div class="btn-wrap">
      <div class="btn-login" @click="login">登录</div>
    </div>
    <div class="password">
      <strong>
        <a
          href="https://id1.cloud.huawei.com/CAS/mobile/standard/register/wapRegister.html?reqClientType=26&loginChannel=26000002&countryCode=cn&loginUrl=https%3A%2F%2Fid1.cloud.huawei.com%2FCAS%2Fmobile%2Fstandard%2FwapLogin.html&lang=zh-cn&themeName=huawei&service=https%3A%2F%2Fm.vmall.com%2Faccount%2Fcaslogin%3Furl%3Dhttps%253A%252F%252Fm.vmall.com%252Fpersonal#/wapRegister/userAgreement"
        >注册账号</a>
      </strong>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usrName: '',
      usrPws: ''
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.usrInfo;
    }
  },
  methods: {
    changDeng(index) {
      this.$emit("click", index);
    },
    login() {
      if ( (this.usrName==this.userInfo.name) && (this.usrPws==this.userInfo.pwd) ) {
        this.$store.commit ('login');
        localStorage.setItem ('login',JSON.stringify(true));
      }
    }
  }
};
</script>

<style scoped>
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
  background-color: white;
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
  height: 1.8rem;
  margin: 0.8rem auto;
  background-color: rgb(242, 242, 242);
  color: white;
  border-radius: 20px;
  text-align: center;
  line-height: 1.8rem;
  font-size: 0.8rem;
}
.password a {
  color: #007dff;
}

.duanxing {
  width: 15.6rem;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  margin: 16px 5px;
  font-size: 14px;
  color: #007dff;
}
</style>