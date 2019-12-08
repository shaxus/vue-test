<template>
    <!--注册组件-->
    <!--姓名-->
    <!--年龄-->
    <!--性别-->
    <!--邮箱-->
    <!--兴趣-->
    <!--居住地址-->
    <div class="container_reg">
      <el-form status-icon ref="form" :rules="rules"
               :hide-required-asterisk="show" :model="form" label-width="60px">
        <el-form-item label="姓名"  prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄"  prop="age">
          <el-input type="age" v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="男" checked></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="兴趣" prop="hobby">
          <el-checkbox-group v-model="form.hobby">
            <el-checkbox label="画画" name="huahua" ></el-checkbox>
            <el-checkbox label="跑步" name="sport" ></el-checkbox>
            <el-checkbox label="听音乐" name="music" ></el-checkbox>
            <el-checkbox label="看书" name="watchbook" ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="margin: 0 auto">
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    import Api from '../api/index.js'
    export default {
        name: "Register",
        data(){
          return{
            form: {
              name: '',
              age: '',
              sex:'',
              email:'',
              hobby:[],
              address:'',
              password:''
            },
            show: true,
            rules: {
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              password:[
                { required: true, message: '密码不能为空'},
                { type: 'string', message: ''}
              ],
              age: [
                { required: true, message: '年龄不能为空'},
                { type: 'number', message: '年龄必须为数字值'}
              ],
              sex: [
                { required: true, message: '请选则性别', trigger: 'change' }
              ],
              email: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ],
              hobby: [
                { type: 'array', required: true, message: '请至少选择一个兴趣', trigger: 'change' }
              ],
              address: [
                { required: true, message: '请输入有效地址', trigger: 'change' }
              ]
            }
          }
        },
        mounted(){
         // console.log(Api);
        },
        methods:{
          /**
           * 1.数据格式验证
           * 2.提交路径 api/register/
           * 3.不考虑拦截响应和请求。
           * 4.保存用户注册信息，并存住用户状态，登录。设置用户登录失效时间。
           */
          submitForm() {
            this.$refs['form'].validate((valid) => {
              if (valid) {
                //数据格式校验成功，提交
                const user = this.$refs['form'].model;
                Api.register(user).then(function (data) {
                  console.log(data);
                }).catch(function (err) {
                  console.log(err);
                });
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
        },
    }
</script>

<style scoped>
.container_reg{
  width: 380px;/*no*/
  height: 470px;/*no*/
  font-size: 14px;/*px*/
  margin: 100px 0;
}
</style>
