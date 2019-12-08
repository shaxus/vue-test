<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      action="http://localhost:3000/api/upload"
      name="shaxu"
      :headers="headers"
      :before-upload="beforeAvatarUpload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
    export default {
        name: "UploadFiles",
        data(){
          return{
            imgQuality: 0.5,
            headers: { 'ContentType': 'multipart/form-data;charset=UTF-8' },
          }
        },
        methods:{
          dataURItoBlob(dataURI, type) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for(var i = 0; i < binary.length; i++) {
              array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], {type: type});
          },
          beforeAvatarUpload(file) {
            const _this = this;
            return new Promise(resolve => {
              const reader = new FileReader()
              const image = new Image()
              image.onload = (imageEvent) => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const width = image.width * _this.imgQuality;
                const height = image.height * _this.imgQuality;
                canvas.width = width;
                canvas.height = height;
                context.clearRect(0, 0, width, height);
                context.drawImage(image, 0, 0, width, height);
                const dataUrl = canvas.toDataURL(file.type);
                const blobData = _this.dataURItoBlob(dataUrl, file.type);
                resolve(blobData)
              }
              reader.onload = (e => { image.src = e.target.result; });
              reader.readAsDataURL(file);
            })
          },
          uploadFile() {

          },
          // UploadImage (param) {
          //   const formData = new FormData()
          //   formData.append('ModelName', param.file) // 要提交给后台的文件
          //   formData.append('projectFolder', this.routeProjectId) // 这个接口必要的项目id
          //   formData.append('subFolder', this.routeFloorId) // 这个接口必要的其他的id
          //   let config = {
          //     headers: { 'Content-Type': 'multipart/form-data' }
          //   };
          //   Api.uploadFile('http://localhost:3000/api/upload',config).then(function (res) {
          //     console.log(res.data);
          //   }).catch(function (err) {
          //     console.log(err);
          //   });
          //   // UploadFiles(formData).then(response => {  // UploadFiles 是封装的接口
          //   //   if (response !== undefined) {
          //   //     Message({
          //   //       message: response.Msg,
          //   //       type: 'success',
          //   //       duration: 5 * 1000
          //   //     })
          //   //     param.onSuccess()
          //   //     // this.$store.state.basics.ShuxinTable = true
          //   //   }
          //   // })
          // }
        }
    }
</script>
<style scoped>

</style>
