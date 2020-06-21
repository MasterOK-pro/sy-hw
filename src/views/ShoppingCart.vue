<template>
  <div class="shopping-cart-container">
      <!-- 头部 -->
      <div class="header">购物车</div>
      <!-- 中部 -->
      <div class="middle">
          <div class="empty-cart">

          </div>
      </div>


    <!-- 底部 -->
      <div class="footer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shopping-cart-container{
    height: 100%;
    background:rgb(249,249,249);
    display: flex;
    flex-direction: column;
    position: relative;
}

.header{
    padding: 0 .8rem;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .9rem;
    color: #191919;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #fff;
}

.middle{
    flex-grow: 1;
    /* background: coral; */
    overflow: hidden;
}

.footer{
    height: 2.5rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: coral;
}

.empty-cart{
    display: flex;
    flex-direction: column;
    padding: 1.6rem 0;
    justify-content: center;
}

</style>