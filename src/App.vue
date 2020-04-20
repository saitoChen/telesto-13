<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@bgColor: #ececec;

#app {
  font-family: Good Pro Condensed,Roboto, PingFangSC-regular, Microsoft YaHei, Helvetica Neue,Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: @bgColor;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
