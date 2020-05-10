<template>
  <div class="svg">
    <ul v-if="svgList.length > 0" class="svg-list">
      <li class="svg-items" v-for="(svg, index) in svgList" :key="index">
        <div class="svg-description">
          <a :href="svg.svg_url" class="svg-base-desc svg-source">源码</a>
          <a :href="svg.img_url" v-if="svg.img_url"  class="svg-base-desc svg-img-source">源码</a>
          <i class="iconfont iconreset" @click="stop" />
          <i class="iconfont" :class="{'iconplay': !play, 'iconstop':play}" @click="play=true" />
        </div>
        <div class="svg-show">
          <component :is="svg.component" :play="play" />
        </div>
      </li>
    </ul>
    <div v-if="svgList.length <= 0" class="no-svg">暂无内容</div>
  </div>
</template>
<script>
import SvgCheck from './check'
export default {
  data(){
    return {
      play: false,
      svgList: [
        {
          svg_url: 'http://jsrun.net/F62Kp/edit',
          img_url: '',
          component: 'SvgCheck'
        }
      ]
    }
  },
  components: {
    SvgCheck
  },
  methods: {
    start(){
      this.play = true
    },
    stop(){
      this.play = false
    }
  }
}
</script>
<style lang="less">
  @fontColor: #8795A1;
  .svg {
    width: 12rem;
    min-height: 400px;
    .svg-list {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      .svg-items {
        width: 200px;
        height: 220px;
        margin: 10px;
        border: 1px solid #2c3e50;
        .svg-description {
          display: flex;
          align-items: center;
          width: 100%;
          height: 20px;
          padding: 4px;
          font-size: 12px;
          .svg-base-desc {
            display: block;
            margin-right: 20px;
            width: 60px;
            height: 100%;
            color: #fff;
            text-align: center;
            line-height: 20px;
            border-radius: 6px;
            cursor: pointer;
          }
          .svg-source {
            background-color: #2c3e50;
          }
          .svg-img-source {
            background-color: #7E04AD;
          }
          .iconfont {
            margin-right: 8px;
            cursor: pointer;
          }
          .iconreset {
            margin-top: 2px;
            font-size: 12px;
          }
          .iconplay {
            font-size: 18px;
            color: #47BF8C;
          }
        }
        .svg-show {
          width: 200px;
          height: 200px;
        }
      }

    }
    .no-svg {
      font-size: 16px;
      color: @fontColor;
    }
  }
</style>