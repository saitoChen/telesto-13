<template>
  <div class="telesto-content">
    <div class="telesto-content-banner">
      <div class="banner-detail">
        <div class="banner-top">
          <div class="banner-date">
            <div class="banner-day">19</div>
            <div class="banner-month">April</div>
            <div class="banner-name">TELESTO-13 OF THE DAY</div>
          </div>
        </div>
        <div class="banner-description"></div>
      </div>
      <div class="banner-player"></div>
    </div>
    <div class="telesto-content-detail">
      <div class="detail-svg"></div>
      <div class="detail-count"></div>
      <div class="detail-more"></div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
@borderColor:  #ececec;

.telesto-content {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .telesto-content-banner {
    display: flex;
    height: 420px;

    .banner-player {
      width: 900px;
      background: url('../assets/img/bg1.jpg') no-repeat;
      background-size: cover;
    }

    .banner-detail {
      width: 400px;
      
      .banner-top {
        box-sizing: border-box;
        height: 160px;
        border-bottom: 1px solid @borderColor;

        .banner-date {
          width:130px;
          height: 100%;
        }

      }

      .banner-description {
        box-sizing: border-box;
        height: 260px;
        border-bottom: 1px solid @borderColor;
      } 

    }

  }

  .telesto-content-detail {
    display: flex;
    height: 140px;
    .detail-svg {
      flex-basis: 400px;
      height: 100%;
      border-right: 1px solid @borderColor;
    }
    .detail-count {
      flex-basis: 300px;
      height: 100%;
      border-right: 1px solid @borderColor;
    }
    .detail-more {
      flex: 1;
      height: 100%;
    }
  }
}
</style>