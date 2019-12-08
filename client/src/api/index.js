
import Vue from 'vue'
import axios from 'axios'
const instance = axios.create();
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('jwt');
instance.defaults.headers.post['Content-Type'] = 'application/json';
// Vue.axios.default.headers.post['Contemt-Type'] = 'application/json';

// Add a request interceptor 拦截请求
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(localStorage.getItem('jwt')){
    instance.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('jwt').replace(/(^\")|(\"$)/g,'')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor 拦截响应
instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.code == 200) {
    return response;
  } else {
    if (response.data.code == 401) {
      localStorage.removeItem('jwt');
      this.$router.push('/Login');
    }  else {
      throw new Error(res.data.msg);
    }
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default {
    register(data){
      return new Promise((resolve,reject) => {
        Vue.axios.post('/api/register/',data).then((response) => {
          resolve(response);
        });
      });
    },
    login(data){
      return new Promise((resolve,reject) => {
        Vue.axios.post('/api/login/',data).then((response) => {
          resolve(response);
        });
      });
    },
    checkRes(data) {
      return new Promise((resolve,reject) => {
        Vue.axios.get('/api/test/').then((response) => {
          resolve(response);
        });
      });
    },
    checkLog(data) {
      return new Promise((resolve,reject) => {
        Vue.axios.post('/api/test2',data).then((response) => {
          resolve(response);
        })
      })
    },
    uploadFile(url,config) {
      return new Promise((resolve,reject) => {
        Vue.axios.post(url).then((response) => {
          resolve(response);
        })
      })
    }
}
