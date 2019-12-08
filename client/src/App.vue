<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--&lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;-->
    <!--<el-button-->
      <!--type="primary"-->
      <!--@click="openFullScreen"-->
      <!--v-loading.fullscreen.lock="fullscreenLoading">-->
      <!--指令方式-->
    <!--</el-button>-->
    <!--<el-button-->
      <!--type="primary"-->
      <!--@click="openFullScreen">-->
      <!--服务方式-->
    <!--</el-button>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      loading: true,
      fullscreenLoading: false
    }
  },
  created() {
    // this.openFullScreen();
  },
  methods: {
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 1)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
