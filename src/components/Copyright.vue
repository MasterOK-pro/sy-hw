<template>
  <div class="copyright-body">
      <p class="login">
        <a href>登录</a>
        <a href="https://club.huawei.com/thread-1144534-1-1.html">反馈</a>
      </p>
      <p class="device">
        <a href>
          <img src="../../public/imgs/mine-footer-client.png" alt />
          <span>客户端</span>
        </a>
        <a href class="active">
          <img src="../../public/imgs/mine-footer-touch.png" alt />
          <span>触屏版</span>
        </a>
        <a href>
          <img src="../../public/imgs/mine-footer-pc.png" alt />
          <span>电脑版</span>
        </a>
      </p>
      <p class="copyright">
        <a
          target="_self"
          href="https://consumer.huawei.com/minisite/cloudservice/vmall/privacy-statement.htm?country=CN&language=zh_CN"
          class="top3"
        >隐私协议</a>
        <a
          target="_self"
          href="https://consumer.huawei.com/minisite/cloudservice/vmall/terms.htm?country=CN&language=zh_CN"
          class="top3"
        >用户协议</a>
        <a
          target="_self"
          href="https://consumer.huawei.com/minisite/cloudservice/vmall/cookies.htm?country=CN&language=zh_CN"
          class="top3"
        >关于Cookie</a>
        <br />
        <span>
          Copyright 2012-
          <span class="space"></span>VMALL.COM 版权所有
        </span>
        <br />
        <a
          href="https://res.vmallres.com/pimages///sale/2019-04/Vhy8y3yxVJXg0FE74dh0.png"
          target="_self"
        >营业执照</a>
        <span>备案主体编号：44201919072182</span>
        <br />
        <a href="http://beian.miit.gov.cn/" target="_self">粤公网安备 44190002003939号</a>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002003939"
          target="_self"
        >粤公网安备 44190002003939号</a>
        <br />
        <span>增值电信业务经营许可证：粤B2-20190762</span>
      </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 页面底部版权相关 */
.copyright-body,
.copyright-body a {
  padding: 0 0.15rem;
  background-color: #fff;
  color: #9b9b9b;
}
.copyright-body p {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.copyright-body p:last-child {
  display: block;
  text-align: center;
}
/* 登录行 */
.copyright-body .login {
  height: 2rem;
  border-bottom: 1px solid #eaeaea;
}
.copyright-body .login a {
  display: inline-block;
  width: 3.5rem;
  text-align: center;
  color: #333;
  font-size: 0.7rem;
}
.copyright-body .login a:first-child::before {
  content: "";
  width: 1px;
  height: 1rem;
  background-color: #eaeaea;
  position: absolute;
  top: 0.5rem;
  left: 50%;
}
/* 设备行 */
.copyright-body .device {
  padding: 0.5rem 0;
}
.copyright-body .device a {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  margin-left: 1.8rem;
}
.copyright-body .device a:first-child {
  margin-left: 0;
}
.device img {
  width: 1.8rem;
  height: 1.8rem;
}
.device a.active {
  color: #4d4d4d!important;
}
.device a span {
  font-size: 0.6rem;
}
.copyright-body .copyright {
  padding: 0.25rem 0 0.9rem;
  font-size: 0.6rem;
}
.copyright a {
  font-size: 0.6rem;
}
.copyright .top3 {
  padding: 0 0.5rem;
  margin-bottom: 0.3rem;
  position: relative;
}
.copyright a,
.copyright span {
  padding: 0 0.2rem;
}
.copyright .top3:nth-child(2)::before {
  content: "";
  width: 1px;
  height: 0.5rem;
  background-color: #eaeaea;
  position: absolute;
  top: 0.25rem;
  left: 0%;
}
.copyright .top3:nth-child(2)::after {
  content: "";
  width: 1px;
  height: 0.5rem;
  background-color: #eaeaea;
  position: absolute;
  top: 0.25rem;
  right: 0%;
}
</style>