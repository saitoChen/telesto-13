<template>
  <ul class="articles__list">
    <li class="articles__items" v-for="( article, index ) in list" :key="index" >
      <div class="articles__items-time">{{ now }}</div>
      <div class="articles__items-title" :style="{fontSize: mode === 'list' ? '18px' : '24px' }"  @click="toArticle(article.article_id)" >{{ article.title }}</div>
      <div v-if="mode === 'sub'" class="articles__items-description">{{ article.description }}</div>
      <div v-if="mode === 'sub'" class="articles__items-more">
        <span class="articles__more" @click="toArticle(article.article_id)" >阅读这篇文章</span>
      </div>
    </li>
    <div v-if="mode === 'sub'" class="articles__all" @click="toArticleList">
      点击查看更多文章
    </div>
  </ul>
</template>
<script>
import {nowDate} from '../../utils/moment'
export default {
  props: {
    'list': {
      type: Array,
      default: []
    },
    'mode': {
      type: String,
      default: 'sub'
    }
  },
  data(){
    return {
      now: `${nowDate().year}年${nowDate().month}月${nowDate().day}日`
    }
  },
  methods: {
    toArticle(id){
      this.$router.push({path: '/articleDetail/detail', query: { id }})
    },
    toArticleList(){
      this.$router.push({path: '/articles'})
    }
  }
}
</script>
<style lang="less">
@fontColor: #8795A1;
.articles__list {
  width: 7.5rem;
  list-style-type: none;
  text-align: left;
  .articles__items {
    margin-bottom: 30px;
    .articles__items-time {
      margin-bottom: 6px;
      font-size: 14px;
      color: @fontColor;
    }
    .articles__items-title {
      cursor: pointer;
      font-size: 24px;
      font-weight: 600;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .articles__items-description {
      width: 7.5rem;
      margin-top: 10px;
      font-size: 16px;
    }
    .articles__items-more {
      margin-top: 10px;
      cursor: pointer;
      font-size: 14px;
      color: @fontColor;
      .articles__more:hover {
        text-decoration: underline;
      }
    }
  }
  .articles__all {
    cursor: pointer;
    margin-bottom: 40px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>