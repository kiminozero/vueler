<template>
  <div class="login-box">
    <h3 class="login-title">Login</h3>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="UserName" prop="name">
        <el-input v-model="ruleForm.name" placeholder="input user name"></el-input>
      </el-form-item>
      <el-form-item label="PassWord" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="input pass word"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入Username'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('name');
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('pass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: 'input username', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
        //   { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { required: true, message: 'input password', trigger: 'change' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
        //   { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
        var data = this.$qs.stringify(this.ruleForm)
        var vm = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
        //   alert('submit!');
          this.axios.post('http://localhost:1323/login', data)
          .then(function(response){
              console.log(response.data)
              if (response.data == 'ok') {
                  vm.$router.push('/Home')
              }
          })
        } else {
          this.$message.error('input not valid')
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.login-box {
  width: 500px;
  height: 400px;
  border: 1px solid #dcdfe6;
  margin: 150px auto;
  padding: 20px 30px 20px 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #dcdfe6;
}
.login-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>