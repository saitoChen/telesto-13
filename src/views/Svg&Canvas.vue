<template>
  <div class="svg">
    <ul v-if="svgList.length > 0" class="svg-list">
      <li class="svg-items" v-for="(svg, index) in svgList" :key="index"></li>
    </ul>
    <div class="no-svg">暂无内容</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      svgList: []
    }
  }
}
</script>
<style lang="less">
  @fontColor: #8795A1;
  .svg {
    width: 12rem;
    min-height: 400px;

    .no-svg {
      font-size: 16px;
      color: @fontColor;
    }
  }
</style>