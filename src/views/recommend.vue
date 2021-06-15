<template>
  <div class="recommend">
    <Loading v-if="loading" />
    <div class="slider-wrapper">
      <div class="slider-content">
        <Slider :sliders="sliders" v-if="sliders.length > 0"></Slider>
      </div>
    </div>
    <scroll>
      <div class="recommend-content">
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌曲推荐</h1>
          <ul>
            <li
              v-for="item in albums"
              class="item"
              :key="item.id"
              @click="selectItem(item)"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.pic" />
              </div>

              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{ item.title }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import { getRecommend } from "@/service/recommend";
import Slider from "@/components/base/slider/slider";
import Scroll from "@/components/base/scroll/scroll";
import Loading from "@/components/base/loading/loading";
export default {
  name: "recommend",
  components: {
    Slider,
    Scroll,
    Loading
  },
  data() {
    return {
      sliders: [],
      albums: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    const result = await getRecommend();
    this.loading = false;
    this.sliders = result.sliders;
    this.albums = result.albums;
    console.log(result.sliders);
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
