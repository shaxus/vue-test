<template>
    <div class="login-class">
      <el-form status-icon :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passwd">
          <el-input type="password" v-model="ruleForm.passwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Longin",
        data(){
          return {
            ruleForm: {
              name:'',
              passwd: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 5, max: 7, message: '长度在 5 到 7 个字符', trigger: 'blur' }
              ],
              passwd: [
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]
            }
          }
        },
        mounted(){

        },
        methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                console.log('submit!');
                this.$store.dispatch('UserLogin',this.ruleForm);
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
            localStorage.removeItem('jwt');
            this.$store.dispatch('UserLogout');
          }
        }
    }
</script>

<style scoped>
.login-class{
  width:300px;/*no*/
  height:200px;/*no*/
  font-size: 14px;/*px*/
}
</style>
