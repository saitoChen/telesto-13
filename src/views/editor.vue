<template>
  <div class="editor">
    <div class="editor-operation">
      <el-button class="editor-back-btn" @click="back" >后退</el-button>
      <el-button class="editor-save-btn" type="primary" @click="save">保存文章</el-button>
    </div>
    <div class="editor-title">
      <el-input class="editor-title-input" v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <div class="editor-author">
      <el-input class="editor-author-input" v-model="author" placeholder="请输入作者"></el-input>
    </div>
    <div class="editor-description">
      <el-input type="textarea" :rows="2" class="editor-description-input" v-model="description" placeholder="请输入摘要"></el-input>
    </div>
    <div class="editor-content">
      <vue-editor id="editor" v-model="content" useCustomImageHandler @image-added="handleImageAdded"  />
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from 'axios'

export default {
  components: { 
    VueEditor
  },

  data(){
    return {
      content: '',
      title: '',
      author: '',
      description: '',
      article_id: '',
      article_status: 'add'
    }
  },
  created(){
    if (this.$route.query.id) {
      this.getArticleDetail()
      this.article_status = 'update'
    }
  },
  mounted(){

  },
  methods: {
    back(){
      history.go(-1)
    },
    save() {
      if (this.$route.query.id) {
        this.updateArticle()
      } else {
        this.saveArticle()
      }
    },
    getArticleDetail(){
      this.$api.admin.getAdminArticleDetail({
        params: {
          article_id: this.$route.query.id
        }
      })
      .then(res => {
        let {title, description, author, content} = res.data
        this.content = content
        this.title = title
        this.description = description
        this.author = author
      })
    },
    saveArticle(){
      this.$api.admin.postAdminNewArticle({
        create_time: +new Date(),
        author: this.author,
        title: this.title,
        description: this.description,
        content: JSON.stringify(this.content)
      })
      .then(res => {
        if (res.success) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        }
      })
      .catch(err => {
        this.$message({
          message: '保存失败，请重新尝试',
          type: 'error'
        })
      })
    },
    updateArticle() {
      this.$api.admin.updateAdminArticle({
        article_id: this.$route.query.id,
        author: this.author,
        title: this.title,
        description: this.description,
        content: JSON.stringify(this.content)
      })
      .then(res => {
        if (res.success) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        }
      })
      .catch(err => {
        this.$message({
          message: '保存失败，请重新尝试',
          type: 'error'
        })
      })
    },
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var param = new FormData();
      param.append("image", file);
      axios.post('/api/admin/postImg/', param ,{
        headers:{
          "Content-Type": "multipart/form-data" ,
          "common" : {
            Authorization: "Bearer " + window.localStorage.getItem('token')
          }
        }
      })
      .then(response=>{
        /* Editor.insertEmbed(cursorLocation, "image", response.data.data.path); */
        setTimeout(() => {
          Editor.insertEmbed(cursorLocation, "image", response.data.data.path);
        }, 1000)
      })
      .catch(err => {
        console.log(err)
      })     
    }
  }  
};
</script>

<style lang="less">
.editor {
  padding: 20px 40px 80px 40px;
  .editor-title, .editor-author, .editor-description, .editor-content {
    margin-top: 30px;
  }
}
</style>