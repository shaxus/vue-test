<template>
  <div class="hello">
  <!--<Input class="" v-loading="loading">-->
    <!--<div v-if="show">-->
        <!--<div>你好</div>-->
    <!--</div>-->
    <!--<LoginPw v-bind="user">-->
      <!--register-->
    <!--</LoginPw>-->
    <!--<Check ref="Check1">-->
      <!--<template #header>-->
        <!--<h1>nihao</h1>-->
      <!--</template>-->
      <!--<template #default>-->
        <!--<h2>wowoowo</h2>-->
      <!--</template>-->
      <!--<template #footer>-->
        <!--<h3>;;;;</h3>-->
      <!--</template>-->
      <!--&lt;!&ndash;在父组件里使用子组件数据&ndash;&gt;-->
      <!--<template #siji="slotProps">-->
        <!--{{ slotProps.user.firstName }}-->
      <!--</template>-->
    <!--</Check>-->
    <!--&lt;!&ndash;<InputTest v-model="sth"></InputTest>&ndash;&gt;-->
    <!--<InputTest :checked="sth" @input="checkValue"></InputTest>-->
    <!--<span>{{sth}}</span>-->
    <!--<SocketVue :msgs="msgs" :foo="foo" @xianshi="showInfo" @update-text="updateText"></SocketVue>-->
    <!--<Register></Register>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import LoginPw from '@/components/LoginPw';
  import Check from '@/components/Check';
  import InputTest from '@/components/InputTest';
  import SocketVue from '@/components/SocketVue';
  import Register from '@/components/Register';
  import Per from '../utils/performance/index.js';
  import Api from '../api/index';
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode: "portrait",
      msg: 'Welcome to Your Vue.js App',
      msgs:'haol',
      foo:'my-aa',
      loading: true,
      show: false,
      slotProps:{user:{firstName:'zjje',lastName:'nin'}},
      user:{
        name:'shaxu',
        age:12,
        email:'952754681@qq.com'
      },
      shaxu:'submit',
      form: {
        name: '',
        age: ''
      },
      sth:true
    }
  },
  components:{
    LoginPw,
    Check,
    InputTest,
    SocketVue,
    Register
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
    this.loading = false;

    // Api.checkRes(this.$data.user).then(function (res) {
    //   console.log(res.data);
    // }).catch(function (err) {
    //   console.log(err);
    // });
    // Api.checkLog(this.$data.user).then(function (res) {
    //   console.log(res.data);
    // }).catch(function (err) {
    //   console.log(err);
    // });

  //  this.$refs.Check1.sum();
    // this.checkValue(this.sth);
  },
  methods:{
    checkValue(checked){
      //sth = $event.target.checked
      this.sth = checked
    },
    showInfo(value){
      this.msgs = value;
    },
    updateText(value){
      this.foo = value;
    }
  },
  watch:{


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 410px;/*no*/
    height: 520px; /*no*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
    margin: 0 auto;
    background: skyblue;
  }
</style>
