<!--
针对/stock这条路径显示出来的
在这个组件中，通过组件注册的方式，要显示StockPage.vue这个组件
-->
<template>
  <div class="com-page">
    <stock />
  </div>
</template>
<script>
import Stock from '@/components/Stock'
export default {
  data() {
    return {

    }
  },
  components: {
    Stock
  }
}
</script>
<style scoped>
</style>
