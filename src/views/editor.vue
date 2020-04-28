<template>
  <div class="editor">
    <div class="editor-operation">
      <el-button class="editor-back-btn" @click="back" >后退</el-button>
      <el-button class="editor-save-btn" type="primary" @click="saveArticle">保存文章</el-button>
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
      <vue-editor id="editor" v-model="content" useCustomImageHandler @imageAdded="handleImageAdded"  />
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

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
      article_id: ''
    }
  },
  created(){
    this.getArticleDetail()
  },
  mounted(){

  },
  methods: {
    back(){
      history.go(-1)
    },
    getArticleDetail(){
      if (this.$route.query.id) {
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
      }
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
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {

      console.log(file)
      console.log(Editor)

      var formData = new FormData();
      formData.append("image", file);

      axios({
        url: "https://fakeapi.yoursite.com/images",
        method: "POST",
        data: formData
      })
      .then(result => {
        let url = result.data.url; // Get url from response
        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })
      .catch(err => {
        console.log(err);
      });
    }
  }  
};
</script>

<style lang="less">
.editor {
  padding: 20px 40px 0 40px;

  .editor-title, .editor-author, .editor-description, .editor-content {
    margin-top: 30px;
  }
}
</style>