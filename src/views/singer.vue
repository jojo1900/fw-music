<template>
  <div class="singer">
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
  data() {
    return {
      data: []
    };
  },
  async created() {
    const result = await getSingerList();
    this.data = result;
    console.log(result);
  }
};
</script>

<style lang="scss" scoped>
.singer {
}
</style>
