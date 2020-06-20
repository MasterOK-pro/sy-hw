<template>
  <div class="homepage">
      <div class="homepage-content">
          <div class="search-box">
              <div class="search-logo-box">
                  <img src="" alt="">
              </div>
              <input type="text" class="search-input-area">
              <div class="sysbtn">
                  <img src="" alt="">
                  <img src="" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
    .homepage{
        font-size: 1rem;
        flex-grow: 1;
        overflow: auto;
    }
    .homepage::-webkit-scrollbar{
        display: none;
    }
    /* 搜索栏 */
    .search-box{
        height: 2rem;
        display: flex;
        align-items: center;
    }
</style>>
