<template>
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
  </div>
</template>

<script>
  import Per from '../utils/performance/index.js';
  import Api from '../api/index';
  // import Screen from '../utils/h5-screen-orientation.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode: "portrait",
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

  },
  created() {

  },
  components:{
    // Button,
    // Select
  },
  mounted() {
    Per.getPerformanceTiming();
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
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
</style>
