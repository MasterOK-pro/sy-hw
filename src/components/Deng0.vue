<template>
  <div class="main iconfont">
    <div class="countryCode">
      <div class="c-left">
        <span>国家/地区</span>
      </div>
      <div class="c-right">
        <span class="c-area">中国 +86</span>
        <span class="c-icon">
          <img src="../../public/imgs/denglu-right.png" alt />
        </span>
      </div>
    </div>
    <div class="phone">
      <input type="text" placeholder="手机号" @input="inputFunction()" />
    </div>
    <div class="verify">
      <input type="text" placeholder="短信验证码" />
      <div :class="{active:isActive,'get-verify':isGet}">获取验证码</div>
    </div>
    <div class="btn-wrap">
      <div class="btn-login">登录/注册</div>
    </div>
    <div class="password">
      <strong @click="changDeng(1)">密码登录</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isGet: true
    };
  },
  methods: {
    changDeng(index) {
      this.$emit("click", index);
    },
    inputFunction() {
      this.isActive = true;
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
  justify-content: space-around;
  line-height: 40px;
  color: #191919;
  font-size: 16px;
}

.c-left {
  width: 15.6rem;
  height: 2rem;
}
.c-right {
  width: 6.6rem;
  height: 2rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  position: relative;
}
.c-right .c-icon {
  font-size: 20px;
  position: absolute;
  top: 3px;
  right: -5px;
}
.c-area {
  position: absolute;
   right:16px;
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
  height: 24px;
  color: #007dff;
  text-align: center;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 14px;
}
.active {
  color: blue;
}
</style>