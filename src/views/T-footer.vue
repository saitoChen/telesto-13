<template>
  <div class="telesto-footer" >
    <div class="ad-player">
      <swiperPlayer :swiperData="swiperData" />
    </div>
    <div class="beianhao">{{ text }}</div>
  </div>
</template>
<script>
import swiperPlayer from '../components/Base/swiper/swiper'
export default {
  components: {
    swiperPlayer
  },
  data(){
    return {
      swiperData: [
        {
          img: require('../assets/img/header/ad.png'),
          url: '#'
        },
        {
          img: require('../assets/img/header/Easy-Todo.png'),
          url: '#'
        }
      ],
      text: `苏ICP备20019769号`
    }
  }
}
</script>
<style lang="less">
@fontColor: #8795A1;
.telesto-footer {
  line-height: 40px;
  font-size: 12px;
  color: @fontColor;
  text-align: right;
}
</style>