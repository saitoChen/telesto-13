import axios from 'axios'
import Vue from 'vue'

const service = axios.create({
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    put: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  withCredentials: true,
  timeout: 10000,
  transformRequest: [function (data) {
      data = JSON.stringify(data)
      return data
  }],
  transformResponse: [function (data) {
    if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
    }
    return data
  }],

})

// 请求拦截器
service.interceptors.request.use(    
  config => {        
      /* const token = store.state.token;        
      token && (config.headers.Authorization = token);      */   
      return config;    
  },    
  error => Promise.error(error))

// 响应拦截器
service.interceptors.response.use(    
  // 请求成功
  res => Promise.resolve(res.data),  
  // 请求失败
  error => {
      if (error.response.status === 401) {
        window.location.hash = `#/login`
      }
      return Promise.reject(error);
    }
);

export default service