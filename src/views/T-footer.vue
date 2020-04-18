<template>
  <div class="telesto-footer" v-html="text"></div>
</template>
<script>
export default {
  data(){
    return {
      text: `苏ICP备20019769号 &nbsp;|&nbsp; Telesto-13 &nbsp;|&nbsp; 土卫十三`
    }
  }
}
</script>
<style lang="less">
.telesto-footer {
  line-height: 60px;
  color: #fff;
}
</style>