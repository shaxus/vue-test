<template>
  <div class="hello">
    <!--<mt-button type="default">default</mt-button>-->
    <!--<mt-button type="primary">primary</mt-button>-->
    <!--<mt-button type="danger">danger</mt-button>-->
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  import Per from '../utils/performance/index.js';
  import Screen from '../utils/h5-screen-orientation.js'
  import detectOrient from '../utils/detectOrient.js'
  const xScreen = new Screen();
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode: "portrait",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate() {
    detectOrient();
    window.addEventListener('resize',detectOrient);
  },
  created() {

  },
  components:{
    // Button,
    // Select
  },
  mounted() {
    Per.getPerformanceTiming();
    // detectOrient();
    // window.addEventListener('resize',detectOrient);
    // 强制竖屏
    // xScreen.lock({
    //   mode: 'portrait',
    //   $wrapper: document.getElementById('J_portrait'),
    //   zIndex: 302,
    // });

    // xScreen.inform({
    //   mode: 'landscape',
    //   id: 'J_landscapeTips',
    // })
    // 竖屏提醒
    // xScreen.inform({
    //   mode: 'portrait',
    //   id: 'J_portraitTips',
    //   text: '竖屏浏览体验更好喔！',
    //   logo: './img/portrait_logo.png',
    // })
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
