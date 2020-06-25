<template>
  <div class="hot">
    <div class="title">热门搜索</div>
    <div class="hot-box">
      <a href="https://m.vmall.com/product/ord-2601010222703.html" class="hot-item top3">畅享20 Pro</a>
      <a href="https://m.vmall.com/product/ord-2601010220301.html" class="hot-item top3">P40 Pro +</a>
      <a href="https://m.vmall.com/product/10086397382774.html" class="hot-item">荣耀10X</a>
      <a class="hot-item top3">荣耀平板V6</a>
      <a class="hot-item">P40 Pro</a>
      <a class="hot-item">Mate30 Pro 5G</a>
      <a class="hot-item">荣耀30</a>
      <a class="hot-item">NOVA7 5G</a>
      <a class="hot-item">Play4T</a>
      <a class="hot-item">P40</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hot {
  padding: 0.8rem;
  margin-bottom: 0.4rem;
  background-color: #fff;
}
.title {
  color: #333;
  padding: 0.25rem 0 0.1rem;
  font-size: 0.65rem;
  font-weight: bold;
}
.hot-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.hot-item {
  max-width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 1.2rem;
  font-size: 0.6rem;
  color: #333;
  padding: 0 0.6rem;
  margin: 0.35rem 0 0.35rem 0.4rem;
  background-color: #f9f9f9;
  border-radius: 0.2rem;
}
.top3 {
  color: rgb(207, 10, 44);
}
</style>