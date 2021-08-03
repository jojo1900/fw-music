<template>
  <Scroll class="index-list" @scroll="onScroll" ref="scrollRef">
    <ul>
      <li v-for="group in data" :key="group.title" class="group">
        <h2 class="title">{{ group.title }}</h2>
        <ul>
          <li v-for="singer in group.list" :key="singer.id" class="singer">
            <img class="avatar" v-lazy="singer.pic" />
            <span class="name">{{ singer.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="fixed">
      <div class="title">{{ title }}</div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "@/components/base/scroll/scroll";
import useFixed from "./use-fixed";
export default {
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      title: "测试"
    };
  },
  setup(props, { emit }) {
    const {
      groupRef,
      onScroll,
      fixedTitle,
      fixedStyle,
      currentIndex
    } = useFixed(props);
  },
  methods: {
    getTitle() {}
  }
};
</script>

<style lang="scss" scoped>
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;

  .group {
    padding-bottom: 30px;
    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .singer {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
  .fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
      background: #333;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
