<template>
  <ul>
      <li v-for="(item, index) of list" :key="index">
          <router-link :to='"/product?name="+item'>{{getPartName(item)}}</router-link>
      </li>
  </ul>
</template>

<script>
export default {
    props:['list'],
    methods: {
        getPartName (msg) {
            return msg.split(' ').splice(0,3).join(' ');
        }
    }
}
</script>

<style scoped>
ul{
    background-color: #ffffff;
    list-style-type: none;
    overflow-y: auto;
}
li{
    padding: 0 0.6rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.7rem;
    border-bottom: 1px solid #d2d2d2;
}
li a{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>