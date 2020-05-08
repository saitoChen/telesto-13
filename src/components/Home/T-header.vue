<template>
  <div class="telesto-header">
    <div class="telesto-header__info">
      <div class="telesto-header__avator"></div>
      <div class="telesto-header__name" @click="toPath('')">Telesto</div>
    </div>
    <nav class="telesto-nav">
      <ul class="telesto-nav__list">
        <li class="telesto-nav__items" v-for="(nav, index) in navs" :key="index" @click="toPath(nav.path)">{{nav.name}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
    return {
      navs: [
        {
          name: 'HOME',
          path: 'homePage'
        },
        {
          name: 'ARTICLES',
          path: 'articles'
        },
        {
          name: 'SVG&CANVAS',
          path: 'svg&canvas'
        }
      ]
    }
  },
  methods: {
    toPath(path){
      this.$router.push(`/${path}`).catch(data => {  })
    }
  }
}
</script>
<style lang="less">
@focusFontColor: #22292F;
.telesto-header {
  padding: 0 .2rem;
  .telesto-header__info {
    display: flex;
    align-items: center;
    margin-left: 80px;
    .telesto-header__avator {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      background: url('/giphy.gif') no-repeat;
      background-size: cover;
    }
    .telesto-header__name {
      cursor: pointer;
      font-size: 30px;
      font-weight: 800;
    }
  }
  .telesto-nav {
    margin-top: 18px;
    font-size: 14px;
    font-weight: 600;
    color: #8795A1;
    ul {
      display: flex;
      padding-left: 80px;
      list-style-type: none;
      .telesto-nav__items {
        margin-right: 20px;
        cursor: pointer;
        &:hover{
          color: @focusFontColor;
        }
      }
    }
  }
}
</style>