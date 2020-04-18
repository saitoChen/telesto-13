<template>
  <div class="telesto-header">
    <div class="telesto-header-leftbar">Telesto-13</div>
    <div class="telesto-header-searchbar">Search</div>
    <div class="telesto-header-rightbar"></div>
  </div>
</template>
<script>
export default {
  
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
  }

  .telesto-header-searchbar {
    flex: 1;
    line-height: 60px;
    text-align: left;
    border-right: 1px solid #ddd;
  }

  .telesto-header-rightbar {
    flex-basis: 320px;
    background: url('../assets/img/ad.png') no-repeat;
  }
}
</style>