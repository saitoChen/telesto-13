<template>
  <swiper class="swiper" :style="{width: width }" :options="swiperOption">
    <swiper-slide  
      v-for="(swiper, index) in swiperData" 
      :key="index" 
    >
      <img v-if="swiper.img" :src="swiper.img" alt="png" />
    </swiper-slide>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  props: ['swiperData', 'width'],
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 10000
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="less">
.swiper {
  flex-basis: 320px;
  height: 60px;
  .swiper-slide {
    cursor: pointer;
  }
}
</style>