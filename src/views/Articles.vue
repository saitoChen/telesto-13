<template>
  <div class="articles">
    <ArticlesList :mode="'list'" :list='articlesList' />
  </div>
</template>
<script>
import ArticlesList from '../components/Articles/articlesList'
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
      this.$api.article.getArticleList().then(res => {
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