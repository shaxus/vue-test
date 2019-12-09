import axios from 'axios'
import store from '../store'

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
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor 拦截响应
instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.code == 200) {
    console.log('200');
    return response;
  } else  {
    if (response.data.code == 401) {
      console.log('dddd');
      localStorage.removeItem('jwt');
      store.dispatch('UserLogout');
      // this.$router.push('/login');
    }  else if(response.data.code == 403) {

    } else if(response.data.code == 404){

    } else if(response.data.code == 500){

    }
  }
}, function (error) {
  // Do something with response error
  console.log('6666');
  return Promise.reject(error);
});

export default instance;
