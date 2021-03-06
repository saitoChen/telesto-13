import http from "../request/http";

const admin = {
  getAdminArticleList: function(params) {
    addToken();
    return http.get("/api/admin/getArticleList", params);
  },
  getAdminArticleDetail: function(params) {
    addToken();
    return http.get("/api/admin/getArticleDetail", params);
  },
  postAdminNewArticle: function(params) {
    addToken();
    return http.post("/api/admin/postArticle", params);
  },
  updateAdminArticle: function(params) {
    addToken();
    return http.put("/api/admin/updateArticle", params);
  },
  updateAdminBanner: function(params) {
    addToken();
    return http.post("/api/admin/banner", params);
  },
  deleteAdminBanner: function(params) {
    addToken();
    return http.delete("/api/admin/deleteImg", params);
  },
  getAdminTags: function(params){
    addToken()
    return http.get("/api/admin/tagsList", params)
  },
  postAdminNewTag: function(params) {
    addToken()
    return http.post("/api/admin/newTag", params)
  }
};

function hasToken() {
  return window.localStorage.getItem("token");
}

function addToken() {
  if (hasToken) {
    http.defaults.headers.common["Authorization"] = "Bearer " + hasToken();
  }
}

export default admin;
