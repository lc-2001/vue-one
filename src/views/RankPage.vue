<!--
针对于 /rankpage这条路径而显示
在这个组件中，通过子组件注册的方式，要显示Rank.vue这个组件
-->
<template>
  <div class="com-page">
   <Rank/>
  </div>
</template>
<script>
import Rank from '@/components/Rank'
export default {
  data() {
    return {

    }
  },
  components: {
    Rank
  }
}
</script>
<style scoped>
</style>
