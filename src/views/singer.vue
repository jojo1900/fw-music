<template>
  <div class="singer" v-loading="loading">
    <IndexList :data="data"></IndexList>
  </div>
</template>

<script>
import { getSingerList } from "../service/singer";
import IndexList from "../components/index-list/index-list.vue";
export default {
  name: "singer",
  components: {
    IndexList
  },
  computed: {
    loading() {
      return this.data.length === 0;
    }
  },
  data() {
    return {
      data: []
    };
  },
  async created() {
    const result = await getSingerList();
    const o = {
      id: 1202,
      name: "陈🐷君",
      mid: "",
      pic: "../assets/images/chenzhujun.jpg"
    };
    result.singers[3].list.push(o);
    this.data = result.singers;
  }
};
</script>

<style lang="scss" scoped>
.singer {
  // min-height: 500px;
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
}
</style>
