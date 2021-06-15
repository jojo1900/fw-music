<template>
  <m-header></m-header>
  <tab></tab>
  <!--  router-view 把路由对应的组件渲染出来-->
  <router-view></router-view>
</template>
<script>
import Header from "@/components/header/header";
import Tab from "@/components/tab/tab";
export default {
  components: {
    MHeader: Header,
    Tab
  }
};
</script>
