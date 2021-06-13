<!--
针对/mappage这条路径页面显示出来的
在这个组件中，通过子组件注册的方式，要显示的Map.vue这个组件
-->
<template>
  <div class="com-page">
    <Map></Map>
  </div>
</template>
<script>
import Map from '@/components/Map'
export default {
  data() {
    return {

    }
  },
  components: {
    Map
  }
}
</script>
<style scoped>
</style>
