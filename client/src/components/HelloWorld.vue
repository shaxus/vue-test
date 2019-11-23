<template>
  <div class="hello">
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
      multiple
      ref="upload"
      action="string"
      :before-upload="onBeforeUploadImage"
      :http-request="UploadImage"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传rvt</div>
    </el-upload>
  </div>
  </div>
</template>

<script>
  import Per from '../utils/performance/index.js';
  import Screen from '../utils/h5-screen-orientation.js'
  import detectOrient from '../utils/detectOrient.js'
  import Api from '../api/index';
  // import Screen from '../utils/h5-screen-orientation.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode: "portrait",
      msg: 'Welcome to Your Vue.js App',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      loading: true,
      show: false
    }
  },
  beforeCreate() {

  },
  props: {

  },
  components: {

  },
  beforeCreate() {

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

  },
  methods:{
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    uploadFile() {
      setTimeout(()=>{
        Api.uploadFile('/api/upload').then(function (res) {
          console.log('chengong');
          console.log(res.data);
        }).catch(function (err) {
          console.log(err);
        });
      },500)
    },
    onBeforeUploadImage (file) {
      console.log(file)
    },
    UploadImage (param) {
      const formData = new FormData()
      formData.append('ModelName', param.file) // 要提交给后台的文件
      formData.append('projectFolder', this.routeProjectId) // 这个接口必要的项目id
      formData.append('subFolder', this.routeFloorId) // 这个接口必要的其他的id
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };
      Api.uploadFile('/api/upload',config).then(function (res) {
        console.log('chengong');
        console.log(res.data);
        param.onSuccess();
      }).catch(function (err) {
        console.log(err);
      });
      // UploadFiles(formData).then(response => {  // UploadFiles 是封装的接口
      //   if (response !== undefined) {
      //     Message({
      //       message: response.Msg,
      //       type: 'success',
      //       duration: 5 * 1000
      //     })
      //     param.onSuccess()
      //     // this.$store.state.basics.ShuxinTable = true
      //   }
      // })
    }
  },
  watch:{


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
