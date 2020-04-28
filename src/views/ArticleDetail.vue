<template>
  <div class="article-page">
    <div class="article-close" @click="back">X</div>
    <div class="article">
      <div class="article-author">{{article.author}}</div>
      <div class="article-time">{{article.create_time}}</div>
      <div class="article-title">{{article.title}}</div>
      <div class="article-content" v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      article: {}
    }
  },
  created(){
    this.renderArticle(this.$route.query.id)
  },
  methods: {
    back (){
      history.go(-1)
    },
    renderArticle(id){
      this.$api.article.getArticleDetail({
        params: {
          article_id: id
        }
      })
      .then(res => {
        if(res.success) {
          this.article = res.data
        }
      })
    }
  }
}
</script>
<style lang="less">
@fontColor: #8795A1;
.article-page {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1rem 1.4rem;
  box-sizing: border-box;
  font-size: 16px;
  color: #22292F;
  .article-close {}
  .article {
    margin: 0 auto;
    width: 9rem;
    padding-bottom: 1.6rem;
    .article-author, .article-time {
      color: @fontColor;
      margin-bottom: 5px;
    }
    .article-title {
      margin: 20px 0;
      font-size: 24px;
    }

    .article-content {
      line-height: 30px;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }
}
</style>