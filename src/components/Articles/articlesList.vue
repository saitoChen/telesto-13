<template>
  <ul class="articles__list">
    <li class="articles__items" v-for="( article, index ) in list" :key="index" >
      <div class="article__items-top">
        <div class="articles__items-time">{{ article.create_time }}</div>
        <div v-if="article.tag_ids.length > 0" class="articles__items-split">.</div>
        <ul v-if="article.tag_ids.length > 0"  class="articles__items-tags">
          <li class="items-tag" v-for="(tag, index) in article.tag_ids" :key="index">{{tag.tag_name}}</li>
        </ul>
      </div>
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
import {formateDate} from '../../utils/moment'
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
  watch: {
    list: {
      handler(val){
        if (val.length > 0) {
          val.forEach(item => {
            item.create_time = formateDate(item.create_time)
          })
        }
      },
      immediate: true
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
    .article__items-top {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      font-size: 13px;
      color: @fontColor;
      .articles__items-split {
        margin: -8px 4px 0 4px;
        font-size: 18px;
      }
      .articles__items-tags {
        display: flex;
        list-style-type: none;
        font-size: 13px;
        .items-tag:after {
          content: '/'
        }
        .items-tag:last-child {
          &:after{
            content: ''
          }
        }
      }
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
      font-size: 13px;
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