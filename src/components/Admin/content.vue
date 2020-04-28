<template>
  <div class="admin-content">
    <div class="admin-left-bar">
      <ul class="admin-menu">
        <li class="admin-menu-items" :style="{color: index === activeIndex ? `#8e44ad` : ''}" v-for="(item, index) in menuList" :key="index" @click="handleMenu(index, item)">{{ item.name }}</li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeIndex: -1,
      menuList: [
        {
          name: '首页',
          path: 'adminHome'
        },
        {
          name: '文章管理',
          path: 'adminArticle'
        },
        {
          name: '数据管理',
          path: 'adminData'
        }
      ]
    }
  },
  methods: {
    handleMenu(index, item){
      this.activeIndex = index
      this.$router.push(`/admin/${item.path}`).catch(err => {})
    }
  }
}
</script>
<style lang="less">
.admin-content {
  display: flex;
  .admin-left-bar {
    width: 300px;
    min-height: calc(100vh - 60px);
    border-right: 1px solid #ddd;
    .admin-menu {
      .admin-menu-items {
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
        &:hover {
          color: #8e44ad;
        }
      }
    }
  }
}
</style>