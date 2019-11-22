<template>
  <div class="hello" v-loading="loading">

  </div>
</template>

<script>
  import Per from '../utils/performance/index.js';
  import Screen from '../utils/h5-screen-orientation.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode: "portrait",
      msg: 'Welcome to Your Vue.js App',
     loading: true
    }
  },
  components:{
    // Button,
    // Select
  },
  mounted() {
    Per.getPerformanceTiming();
    this.loading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 150px;
    height: 64px; /*px*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
  }
</style>
