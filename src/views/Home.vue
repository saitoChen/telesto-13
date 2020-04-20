<template>
  <div class="telesto-home-page">
    <header class="telesto-home-header">
      <TelestoHeader />
    </header>
    <div class="telesto-home-content">
      <router-view />
    </div>
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
@fontColor: #22292F;
.telesto-home-page {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1rem 1.4rem;
  box-sizing: border-box;
  font-size: 20px;
  color: @fontColor;

  .telesto-home-header {
    width: 100%;
  }

  .telesto-home-content {
    margin-top: 48px;
    margin-left: 80px;
    padding-left: .2rem;
  }

  .telesto-home-footer {
    position: fixed;
    bottom: 6px;
    right: 0;
    padding-right: 1rem;
    z-index: 99;
  }
}
</style>