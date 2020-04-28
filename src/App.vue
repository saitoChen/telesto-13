<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@bgColor: #ececec;

#app {
  font-family: PingFangSC-regular, Microsoft YaHei, Helvetica Neue,Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  color: #2c3e50;
  background-color: #fff;
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
