<template>
<<<<<<< HEAD
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
=======
  <div class="hello" v-loading="loading">
    <div v-if="show">
        <div>你好</div>
    </div>
    <el-upload
      class="upload-demo"
      action="/api/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary" @click="uploadFile">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
  </div>
</template>

<script>
  import Per from '../utils/performance/index.js';
<<<<<<< HEAD
  import Screen from '../utils/h5-screen-orientation.js'
  import detectOrient from '../utils/detectOrient.js'
  const xScreen = new Screen();
=======
  import Api from '../api/index';
  // import Screen from '../utils/h5-screen-orientation.js'
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode: "portrait",
<<<<<<< HEAD
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate() {
    detectOrient();
    window.addEventListener('resize',detectOrient);
=======
      msg: 'Welcome to Your Vue.js App',
      show: false,
     loading: true,
      user: {name:'shaxu',age:12},
      imageUrl: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  props: {

  },
  components: {

  },
  beforeCreate() {

>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
  },
  created() {

  },
  components:{
    // Button,
    // Select
  },
  mounted() {
    Per.getPerformanceTiming();
<<<<<<< HEAD
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
=======
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
      Api.uploadFile('/api/upload').then(function (res) {
        console.log('chengong');
        console.log(res.data);
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  watch:{

>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
<<<<<<< HEAD
    width: 150px;
    height: 64px; /*px*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
  }
=======
    width: 200px;
    height: 100px; /*px*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
  }


  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
</style>
