import http from '../request/http'

const articles = {
  getArticleList: function(params){
    return http.get('/api/article/getArticleList', params)
  },
  getArticleDetail: function(params){
    return http.get('/api/article/getArticleDetail', params)
  }
}

export default articles