<template>
  <div class="editor">
    <div class="editor-operation">
      <el-button class="editor-back-btn" @click="back">后退</el-button>
      <el-button class="editor-save-btn" type="primary" @click="save">保存文章</el-button>
    </div>
    <div class="editor-title">
      <el-input class="editor-title-input" v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <div class="editor-banner">
      <div class></div>
      <el-upload
        action="/api/admin/banner/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :headers="headers"
        :on-success="handleImgSuccess"
        :file-list="imgList"
        multiple="false"
        limit="1"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>
    <div class="editor-author">
      <el-input class="editor-author-input" v-model="author" placeholder="请输入作者"></el-input>
    </div>
    <div class="editor-description">
      <el-input
        type="textarea"
        :rows="2"
        class="editor-description-input"
        v-model="description"
        placeholder="请输入摘要"
      ></el-input>
    </div>
    <div class="editor-tag">
      <el-tag
        :key="tag"
        v-for="tag in article_tags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{tag.tag_name}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="tagVisible"
        v-model="tagValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleTagConfirm"
        @blur="handleTagConfirm"
      ></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      <el-button v-if="article_tags.length == 0" @click="getArticleTags" class="button-refresh-tag" size="small">从已有tag中选择</el-button>
    </div>
    <div class="editor-content">
      <vue-editor
        id="editor"
        v-model="content"
        useCustomImageHandler
        @image-added="handleImageAdded"
      />
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { create_id } from "../utils/create"
import axios from "axios";

export default {
  components: {
    VueEditor
  },

  data() {
    return {
      content: "",
      title: "",
      author: "",
      description: "",
      article_id: "",
      article_status: "add",
      dialogImageUrl: "",
      dialogVisible: false,
      banner: "",
      headers: "",
      imgList: [],
      // all tags
      all_tags: [],
      // current Article tags
      article_tags: [],
      tagVisible: false,
      tagValue: ""
    };
  },
  created() {
    if (this.$route.query.id) {
      this.getArticleDetail();
      this.article_status = "update";
    } else {
      this.getArticleTags()
    }
    this.addToken();
  },
  methods: {
    handleClose(tag) {
      this.article_tags.splice(this.article_tags.indexOf(tag), 1);
    },

    showInput() {
      this.tagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    addNewTag({tag_id, tag_name}){
      this.$api.admin.postAdminNewTag({
        tag_id,
        tag_name
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        alert("标签添加失败")
      })
    },
    handleTagConfirm() {
      let tagValue = this.tagValue;
      let curTagId = create_id()
      if (tagValue) {
        this.article_tags.push({
          tag_id: curTagId,
          tag_name : tagValue
        });
      }
      this.addNewTag({
        tag_id: curTagId,
        tag_name : tagValue
      })
      this.tagVisible = false;
      this.tagValue = "";
    },
    addToken() {
      let token = window.localStorage.getItem("token");
      if (token) {
        this.headers = {
          Authorization: "Bearer " + token
        };
      }
    },
    handleImgSuccess(res, file) {
      this.banner = res.data.paths;
    },
    handleRemove(file, fileList) {
      let path = file.url;
      let banner_name = path.split("imgs")[1].slice(1);
      this.removeImg(banner_name);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    removeImg(name) {
      this.$api.admin
        .deleteAdminBanner({
          params: {
            name
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    back() {
      history.go(-1);
    },
    save() {
      if (this.$route.query.id) {
        this.updateArticle();
      } else {
        this.saveArticle();
      }
    },
    getArticleDetail() {
      this.$api.admin
        .getAdminArticleDetail({
          params: {
            article_id: this.$route.query.id
          }
        })
        .then(res => {
          let { title, description, author, content, banner, tag_ids } = res.data;
          this.content = content;
          this.title = title;
          this.description = description;
          this.author = author;
          if (banner) {
            this.imgList = [{ url: banner }];
          }
          if (tag_ids.length > 0) {
            this.article_tags = tag_ids
          }
        });
    },
    getArticleTags(){
      this.$api.admin.getAdminTags().then(res => {
        this.article_tags = res.data.tags
      })
    },
    saveArticle() {
      this.$api.admin
        .postAdminNewArticle({
          create_time: +new Date(),
          author: this.author,
          title: this.title,
          description: this.description,
          content: JSON.stringify(this.content),
          banner: this.banner,
          tag_ids: JSON.stringify(this.article_tags)
        })
        .then(res => {
          if (res.success) {
            this.$message({
              message: "保存成功",
              type: "success"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: "保存失败，请重新尝试",
            type: "error"
          });
        });
    },
    updateArticle() {
      this.$api.admin
        .updateAdminArticle({
          article_id: this.$route.query.id,
          author: this.author,
          title: this.title,
          description: this.description,
          content: JSON.stringify(this.content),
          banner: this.banner,
          tag_ids: JSON.stringify(this.article_tags)
        })
        .then(res => {
          if (res.success) {
            this.$message({
              message: "保存成功",
              type: "success"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: "保存失败，请重新尝试",
            type: "error"
          });
        });
    },
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var param = new FormData();
      param.append("image", file);
      axios
        .post("/api/admin/postImg/", param, {
          headers: {
            "Content-Type": "multipart/form-data",
            common: {
              Authorization: "Bearer " + window.localStorage.getItem("token")
            }
          }
        })
        .then(response => {
          /* Editor.insertEmbed(cursorLocation, "image", response.data.data.path); */
          setTimeout(() => {
            Editor.insertEmbed(
              cursorLocation,
              "image",
              response.data.data.path
            );
          }, 1000);
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
  padding: 20px 40px 80px 40px;
  .editor-title,
  .editor-author,
  .editor-description,
  .editor-content,
  .editor-banner,
  .editor-tag {
    margin-top: 30px;
  }
  .editor-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
}
</style>