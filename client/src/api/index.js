
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
    uploadFile() {
      return new Promise((resolve,reject) => {
        Vue.axios.post('http://localhost:3000/api/upload',{},{ headers: {
            // Accept: "application/json",
            // "Content-Type": "multipart/form-data"
          }}).then((response) => {
          resolve(response);
        })
      })
    }
}
