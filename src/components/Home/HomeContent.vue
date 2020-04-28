<template>
  <div class="telesto-content">
    <ArticlesList :list='articlesList' />
  </div>
</template>
<script>
import ArticlesList from '../Articles/articlesList'
export default {
  components: {
    ArticlesList
  },
  data(){
    return {
      articlesList: []
    }
  },
  created(){
    this.renderList()
  },
  methods: {
    renderList(){
      this.$api.article.getArticleList({
        params: {
          isHomePage: true
        }
      }).then(res => {
        console.log(res)
        if (res.success) {
          this.articlesList = res.data.list
        }
      })
    }
  }
}
</script>
<style lang="less">

</style>