<template>
  <component :is="$store.state.myCart.length?componentName='FullCart':componentName='EmptyCart'"></component>
</template>

<script>
import EmptyCart from "./EmptyCart.vue";
import FullCart from "./FullCart.vue";

export default {
  data(){
    return {
      componentName:"FullCart",
    }
  },
  components: {
    EmptyCart:EmptyCart,
    FullCart:FullCart
  },
  activated () {
    this.$store.commit('currentPath', 'cart');
  }
};
</script>

<style scoped>

</style>