<template>
  <div class="telesto-home-page">
    <header class="telesto-home-header">
      <TelestoHeader />
    </header>
    <div class="telesto-home-content"></div>
    <footer class="telesto-home-footer">
      <TelestoFooter />
    </footer>
  </div>
</template>

<script>
import TelestoHeader from './T-header'
import TelestoFooter from './T-footer'
export default {
  name: 'Home',
  components: {
    TelestoHeader,
    TelestoFooter
  }
}
</script>
<style lang="less">
.telesto-home-page {
  width: 100%;
  font-family: "Good Pro Condensed,Roboto,PingFangSC-regular,Microsoft YaHei, Helvetica Neue,Helvetica, sans-serif";
  .telesto-home-header {
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 99;
  }
  .telesto-home-content {
    width: 1300px;
    height: 700px;
    margin: 0 auto;
    padding-top: 136px;
  }
  .telesto-home-footer {
    display: flex;
    justify-content: center;
    align-content: cneter;
    width: 1300px;
    height: 60px;
    background-color: #404040;
    margin: 0 auto;
  }
}
</style>