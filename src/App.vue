<template>
  <m-header></m-header>
  <tab>
    <router-view></router-view>
  </tab>
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
