<!--
针对/sellerpage这条路径显示出来的
在这个组件中，通过组件注册的方式，要显示Seller.vue这个组件
-->
<template>
  <div class="com-page">
    <seller></seller>
  </div>
</template>
<script>
import Seller from '@/components/Seller'
export default {
  components: {
    Seller
  }
}
</script>
<style scoped>
</style>
