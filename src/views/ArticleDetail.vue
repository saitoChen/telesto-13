<template>
  <div class="article-page">
    <div class="article-close" @click="back">
      <i  class="iconfont iconclose"></i>
    </div>
    <div class="article">
      <div class="article-author">{{article.author}}</div>
      <div class="article-time">{{article.create_time}}</div>
      <div class="article-title">{{article.title}}</div>
      <div class="article-content" v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
import {formateDate} from '../utils/moment'
export default {
  data(){
    return {
      article: {}
    }
  },
  created(){
    if (this.$route.query.id) {
      this.renderArticle(this.$route.query.id)
    }
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
          res.data.create_time = formateDate(res.data.create_time)
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
  .article-close {
    cursor: pointer;
    i {
      font-size: 32px;
      color: #22292F;
    }
  }
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
      font-weight: 800;
    }

    .article-content {
      width: 9rem;
      line-height: 30px;
      font-size: 18px;
      letter-spacing: 2px;
      p, img, pre, ol, ul {
        width: 100%;
      }
      ol, ul {
        padding-left: 27px;
      }
      pre {
        background-color: #23241f;
        color: #f8f8f2;
        overflow: visible;
        white-space: pre-wrap;
        margin-bottom: 5px;
        margin-top: 5px;
        padding: 5px 10px;
        border-radius: 3px;
      }
      code {
        background-color: #f0f0f0;
        border-radius: 3px;
      }
    }
  }
}
</style>