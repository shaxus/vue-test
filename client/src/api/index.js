
import Vue from 'vue'

export default {
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
    uploadFile(url) {
      return new Promise((resolve,reject) => {
        Vue.axios.post(url).then((response) => {
          resolve(response);
        })
      })
    }
}
