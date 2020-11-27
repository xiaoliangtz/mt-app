<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            auto-complete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary"
            @click="submitForm('registerForm')"
            class="btn"
          >同意以下协议并注册</el-button>
        </el-form-item>
      </el-form>
      <div class="term">
        <a href="#">《美团用户服务协议》</a>
        <a href="#">《美团隐私政策》</a>
      </div>
    </div>
    <footer>
      <p>©meituan.com  京ICP证070791号  京公网安备11010502025545号</p>
    </footer>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  data () {
    let validateUser = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入用户名'));
      }else if (value.length < 4 || value.length > 16) {
        callback(new Error('用户名必须为4-16位的字母数字下划线组成'));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入密码'));
      } else {
        if(this.registerForm.rePassword !== '') {
          this.$refs.registerForm.validateField('rePassword');
        }
        callback();
      }
    };
    let validateRePassword = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入确认密码'));
      } else if(value !== this.registerForm.password) {
        callback(new Error('两次密码输入的不一样欸!'));
      } else {
        callback();
      }
    }
    return {
      registerForm: {
        userName: '',
        password: '',
        rePassword: '',
      },
      strengthClass: '',
      rules: {
        userName: [{ validator: validateUser,trigger: 'blur' }],
        pass: [{ validator: validatePassword, trigger: 'blur' }],
        rePassword: [{ validator: validateRePassword, trigger: 'blur' }],
      }
    }
  },
  methods: {
    input () {
      let regStr = /(\w)+/g;
      let regNum = /(\d)+/g;
      let reg = /_/g;
      let password = this.registerForm.password;
      let strength = password.match(regStr) && password.match(regNum) && password.match(reg);

      if(password.length > 20 || (password.length > 6 && strength)) {
        this.strengthClass = 'strong';
      } else if (password.length < 6) {
        this.strengthClass = 'week';
      } else if (!password) {
        this.strengthClass = '';
      } else {
        this.strengthClass = 'normal';
      }
    },
    submitForm (formName) {
      // console.log(this);
      this.$refs[formName].validate(valid => {
        if(valid) {
          api.register({
            params: this.registerForm,
          }).then(res => {
            // console.log(res);
            if(res.status === 'success') {
              this.$router.push({name: 'login'});
            }else {
              alert(res.data.msg);
            }
          })
        } else {
          console.log('error submit');
          return false;
        }
      })
    }
  }
}
</script>
<style lang="scss">
 @import '@/assets/css/register/index.scss';
</style>