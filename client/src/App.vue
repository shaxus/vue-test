<template>
  <div id="app">
<<<<<<< HEAD
    <img src="./assets/logo.png">
=======
    <!--<img src="./assets/logo.png">-->
    <el-button
      type="primary"
      @click="openFullScreen"
      v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </el-button>
    <el-button
      type="primary"
      @click="openFullScreen">
      服务方式
    </el-button>
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
<<<<<<< HEAD
  mounted() {
=======
  data(){
    return {
      loading: true,
      fullscreenLoading: false
    }
  },
  created() {
    // this.openFullScreen();
  },
  mounted() {
    // this.loading = false;
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
    if (this._isMobile()) {
      // alert('手机端');
      // 移动端首页路由
      // this.$router.replace('/homeAndroid');
    }else {
      // alert('pc端');
      // pc端首页路由
      // this.$router.replace('/Home');
    }
  },
  methods: {
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
<<<<<<< HEAD
=======
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
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
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
