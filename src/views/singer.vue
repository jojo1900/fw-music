<template>
  <div class="singer">111</div>
</template>

<script>
import { getSingerList } from "../service/singer";
export default {
  name: "singer",

  async created() {
    const result = await getSingerList();
    console.log(result);
  }
};
</script>

<style lang="scss" scoped>
.singer {
}
</style>
