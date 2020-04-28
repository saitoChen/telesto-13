import http from '../request/http'

const user = {
  login: function(params){
    return http.post('/api/login', params)
  }
}

export default user