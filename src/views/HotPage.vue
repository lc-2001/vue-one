<!--
针对/hotpage这条路径页面显示出来的
在这个组件中，通过子组件注册的方式，要显示的Hot.vue这个组件
-->
<template>
  <div class="com-page">
    <Hot />
  </div>
</template>
<script>
import Hot from "@/components/Hot";
export default {
  data() {
    return {};
  },
  components: {
    Hot,
  },
};
</script>
<style scoped></style>
