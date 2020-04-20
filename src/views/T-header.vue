<template>
  <div class="telesto-header">
    <div class="telesto-header-leftbar">Telesto-13</div>
    <div class="telesto-header-searchbar">Search</div>
    <div class="telesto-header-rightbar">
      <HeaderSwiper :width="320"  :swiperData="swiperData" />
    </div>
  </div>
</template>
<script>
import HeaderSwiper from '../components/Base/swiper'
export default {
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
      ]
    }
  },
  components: {
    HeaderSwiper
  }
}
</script>
<style lang="less">
.telesto-header {
  position: fixed;
  display: flex;
  width: 1300px;
  height: 60px;
  background-color: #fff;

  .telesto-header-leftbar {
    text-align: center;
    line-height: 60px;;
    flex-basis: 200px;;
    border-right: 1px solid #ddd;
    width: 200px;
    height: 60px;
    font-weight: 700;
  }

  .telesto-header-searchbar {
    flex: 1;
    line-height: 60px;
    text-align: left;
    border-right: 1px solid #ddd;
  }

  .telesto-header-rightbar {
    flex-basis: 320px;
  }
}
</style>