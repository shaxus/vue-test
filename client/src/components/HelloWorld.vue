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
    <!--<mt-button type="default">default</mt-button>-->
    <!--<mt-button type="primary">primary</mt-button>-->
    <!--<mt-button type="danger">danger</mt-button>-->
  <div class="hello" v-loading="loading">
    <div v-if="show">
        <div>你好</div>
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="/api/upload"
      :http-request="myUpload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
	 <!--<el-upload-->
      <!--class="upload-demo"-->
      <!--ref="upload"-->
      <!--:action="uploadAction"-->
      <!--:http-request="myUpload"-->
      <!--:on-success="handleSuccess"-->
      <!--:on-error="handleError"-->
      <!--:auto-upload="false"-->
      <!--:with-credentials="false">-->
      <!--<el-button slot="trigger" size="small" type="primary" icon="el-icon-document">选取文件</el-button>-->
      <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" icon="el-icon-upload">上传到服务器</el-button>-->
      <!--<div slot="tip" class="el-upload__tip">只能上传<b>apk</b>文件，且文件以“<b>版本号_76</b>”命名<br/>若目标文件已上传过，则此环节可略去</div>-->
    <!--</el-upload>-->
  </div>
  </div>
</template>

<script>
  import LoginPw from '@/components/LoginPw';
  import Check from '@/components/Check';
  import InputTest from '@/components/InputTest';
  import SocketVue from '@/components/SocketVue';
  import Register from '@/components/Register';
  import Per from '../utils/performance/index.js';
  import Screen from '../utils/h5-screen-orientation.js'
  import detectOrient from '../utils/detectOrient.js'
  import {uploadImg} from '../utils/upload/index'
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
      sth:true,
      canEdit: true
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
  //   checkValue(checked){
  //     //sth = $event.target.checked
  //     this.sth = checked;
  //     submitUpload(){
	//       this.myUpload();
  //     },
  //
  //   uploadFile() {
  //     setTimeout(()=>{
  //       Api.uploadFile('/api/upload').then(function (res) {
  //         console.log('chengong');
  //         console.log(res.data);
  //       }).catch(function (err) {
  //         console.log(err);
  //       });
  //     },500)
  //   },
  //   showInfo(value){
  //     this.msgs = value;
  //   },
  //   updateText(value){
  //     this.foo = value;
  //   }
  //   myUpload(content) {
  //   console.log('dddd');
  //     let form = new FormData();
  //     form.append("imageFile", content.file);
  //     Api.uploadFile(form).then(res => {   //uploadImg为接口
  //       const data = res.data;
  //       if (data.code === 200) {
  //         this.$message({
  //           message: "上传成功",
  //           type: "success"
  //         });
  //         // this.basic.url = data.data.path;
  //         // this.basic.room_main_img_id = data.data.id;
  //       } else {
  //         // this.$message.error(data.message);
  //         console.log('dddd');
  //       }
  //     });
  //   },
  //   beforeUpload(file) {
  //     let picRule = "image/png,image/jpeg,image/gif";
  //     const isLt2M = file.size / 1024 / 1024 < 2;
  //     if (!picRule.includes(file.type)) {
  //       this.$message.error("上传图片只能是 JPG，png，gif 格式!");
  //       return;
  //     }
  //   },
  //   // UploadImage (param) {
  //   //   const formData = new FormData()
  //   //   formData.append('ModelName', param.file) // 要提交给后台的文件
  //   //   formData.append('projectFolder', this.routeProjectId) // 这个接口必要的项目id
  //   //   formData.append('subFolder', this.routeFloorId) // 这个接口必要的其他的id
  //   //   let config = {
  //   //     headers: { 'Content-Type': 'multipart/form-data' }
  //   //   };
  //   //   Api.uploadFile('/api/upload',config).then(function (res) {
  //   //     console.log('chengong');
  //   //     console.log(res.data);
  //   //     param.onSuccess();
  //   //   }).catch(function (err) {
  //   //     console.log(err);
  //   //   });
  //   //   // UploadFiles(formData).then(response => {  // UploadFiles 是封装的接口
  //   //   //   if (response !== undefined) {
  //   //   //     Message({
  //   //   //       message: response.Msg,
  //   //   //       type: 'success',
  //   //   //       duration: 5 * 1000
  //   //   //     })
  //   //   //     param.onSuccess()
  //   //   //     // this.$store.state.basics.ShuxinTable = true
  //   //   //   }
  //   //   // })
  //   // }
  //
	// // myUpload(content) {
  //   // var form = new FormData();
  //   // form.append("file", content.file);
  //   // this.$axios.post(content.action, form).then(res=>{
  //    //    if(res.data.code != 0) {
  //    //        content.onError('文件上传失败, code:' + res.data.code)
  //    //    } else {
  //    //        content.onSuccess('文件上传成功！')
  //    //    }
  //   // }).catch(error=>{
  //    //       if (error.response) {
  //    //            content.onError('文件上传失败,' + error.response.data);
  //    //        } else if(error.request) {
  //    //            content.onError('文件上传失败，服务器端无响应')
  //    //        } else {
  //    //            content.onError('文件上传失败，请求封装失败')
  //    //        }
  //   // });
	// // }
  // }
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
