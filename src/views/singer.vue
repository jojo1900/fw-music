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
    this.data = result.singers;
  }
};
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
}
</style>
