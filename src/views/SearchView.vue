<template>
  <div class="search-view">
    <div class="search-box">
      <div class="search-logo-box">
        <img src="../assets/images/back2.png" 
        alt @click="goBack"/>
      </div>
      <div type="text" class="search-input-area">
        <span></span>
        <input type="text" name="" id="" 
        class="search-content"
        placeholder="P40 Pro +"
        maxlength="200"
        @input="input"
        v-model="inputMsg">
        <i :class="{close:inputMsg}" @click="inputMsg=''"></i>
        <!-- <div class="search-content"></div> -->
      </div>
      <div class="sysbtn">
        <span>搜索</span>
      </div>
    </div>
    <div class="alternative">
      <component :is="compName"></component>
    </div>
  </div>
</template>

<script>
import Hot from '../components/search-page/Hot.vue'
import SearchList from '../components/search-page/SearchList.vue'

export default {
  data () {
    return {
      compName: 'hot',
      inputMsg: ''
    }
  },
  components: {
    Hot,
    SearchList
  },
  methods: {
    input () {
      // console.log()
    },
    /* 点击返回 */
    goBack () {
      this.$router.go(-1);
    }
  },
  watch: {
    inputMsg (newVal) {
      if (newVal) {
        this.compName = 'search-list'
      } else {
        this.compName = 'hot';
      }
    }
  }
};
</script>

<style scoped>
.search-view {
  width: 100%;
  height: 100%;
}
.search-box {
  height: 2rem;
  display: flex;
  align-items: center;
  z-index: 100;
  position: relative;
  background-color: #fff;
}
.search-logo-box {
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.8rem;
  flex-shrink: 0;
  display: flex;
}
.search-logo-box img {
  max-width: 100%;
}
.search-input-area {
  margin-left: 0.4rem;
  flex-grow: 1;
  width: 50%;
  height: 1.6rem;
  background-color: rgba(155, 155, 155, 0.1);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  background-image: url(../../public/imgs/home-icon-search.png);
  background-size: 0.7rem 0.7rem;
  background-repeat: no-repeat;
  background-position: 0.4rem center;
  position: relative;
}
.search-content {
  width: 100%;
  margin: 0 0.4rem 0 1.6rem;
  height: 1.6rem;
  font-size: 0.65rem;
  color: #b3b3b3;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background-color: transparent;
}
.search-content .swiper {
  z-index: 100;
  height: 1.6rem;
}
.search-box .swiper .swiper-item {
  height: 1.6rem !important;
  display: flex;
  align-items: center;
}
.search-box .swiper a {
  width: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.6rem;
  color: #4d4d4d;
}
/* 系统按钮(登录，消息) */
.sysbtn {
  flex-shrink: 0;
  padding: 0.4rem;
  display: flex;
  align-items: center;
}
.sysbtn img {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.3rem;
}
.sysbtn span {
  font-size: 0.65rem;
  color: #4c4c4c;
  margin: 0 0.3rem;
}
input::-webkit-input-placeholder{
  color: #b3b3b3;
}
.close{
    display: block;
    height: .9rem;
    width: .9rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAvhJREFUeAHt209q20AUx/HY2fsAxj1Qd04JFJp9dz1Nz9BFF71MoZCuG3wBrxP3vaCBaUC2NNa8P+UrELZsSfPm85Ms0Mg3N0wIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIINAgsNvt3m+32z/DvG/YRddNpK59qU9r7dpYtfNV9b7rW+3c6XTaDY08r1arh8Ph8L1roxN3LrV9lNq+yeq3uonU9iS1vZu4+VWrra/aun3jW+2wdrx9F8ts+RZ/mb1O34tlAF+krOeqNPcQRvC1Rq3VZHo95SxaOh6Pj5vN5re0dSdzCV5f7/Rz+f6XRR2ljTH84afxR1mv96tZANoRRY4QwgV80+uSaQARQoiErx7mAXiGEA3fLQCPECLiuwZgGUJUfPcALEKIjB8igJ4hRMcPE0CPEDLghwpgyRCy4IcLYIkQMuGHDOCaELLhhw2gJYSM+KEDmBNCVnzto9mAjDbWOp0D1n3WgylDG6EGfM71O0UA2oGREF6GzpXb27qYBl+LdbkZpw3PnUZuZesBVB9EqfDVIE0AWmwVwgdZrOH165dI48xa0JSpPnWnrM86CwukOgNGrgOFRM8Il+HNUkDLa5oARvD1InySufwcuY0xt+DrNil+gkbw9YL7SWfpR6inLeaEEf4MOIP/+mBXdWEO8bTFHHxdN3QAl/BLZzOHEDaAqfjZQwgZwFz8zCGEC6AVP2sIoQK4Fj9jCGECWAo/WwghAlgaP1MI7gH0ws8SgmsAvfEzhOAWgBV+9BBcArDGjxyCeQBe+FFDMA3AGz9iCGYBCP5enl7Qv//UbbqN4V64gfdTvn8sgfV8tRwP+BoFv4Dq/5R1HFmW/xlPkGWt1WSyDKDukNuRXxeh70dCeLtat2WzANbr9Wc52p6G+T7Kv+SrEO5LfVprN3F2jAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMB/LfAXJre/5S4XFQkAAAAASUVORK5CYII=) no-repeat 50%;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: absolute;
    right: 0.6rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
</style>