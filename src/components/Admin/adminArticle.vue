<template>
  <div class="admin-article">
    <div class="admin-article-header">
      <el-button type="primary" @click="createArticle">新建文章</el-button>
    </div>
    <div class="admin-article-content">
      <el-table
      :data="articleData"
      style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
        >
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
import {formateDate}  from '../../utils/moment'
export default {
  data(){
    return {
      articleData: []
    }
  },
  created(){
    this.renderArticleList()
  },
  methods: {
    renderArticleList(){
      this.$api.admin.getAdminArticleList().then(res => {
        res.data.list.map(item => item.create_time = formateDate(item.create_time))
        this.articleData = res.data.list
      })
    },
    handleClick(row){
      this.$router.push({name: 'editor', query: { id: row.article_id }})
    },
    createArticle(){
      this.$router.push('/editor')
    }
  }
}
</script>
<style lang="less">
.admin-article {
  width: 100%;
  padding: 10px;
  .admin-article-content {
    margin-top: 50px;
  }
}
</style>