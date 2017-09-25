<template lang="html">
  <div class="gpts-admin-login">
    <div class="admin-login-form">
      <el-row :gutter="10">
        <el-col :xs="2" :sm="6" :md="8" :lg="8">
          <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
        <el-col :xs="20" :sm="12" :md="8" :lg="8">
          <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm login-container">
            <h3 class="pannel-title">
              <span>管理员登录</span>
            </h3>
            <el-form-item label="用户名" prop="username">
              <el-input size="small" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input size="small" type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item class="submit-btn">
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :xs="2" :sm="6" :md="8" :lg="8">
          <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
// import validatorUtil from '@/utils/valid'
import rules from '@/utils/rules'
export default {
  name: 'Signin',
  data () {
    return {
      rules: {
        username: rules.username,
        password: rules.password
      }

    }
  },
  computed: {
    ...mapGetters([
      'loginForm'
    ])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.loginForm)
          await this.$store.dispatch('signin', this.loginForm)
          this.$router.push({name: 'Index'})
        } else {
          console.log('登录失败，校验不通过')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    // console.log('store: ', this)
  }
}
</script>

<style lang="scss">
.admin-login-form {

  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;

  .submit-btn {
    text-align: left;
  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box; // margin: 180px auto;
    padding: 25px 35px 10px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .pannel-title {
      /*font-size: 14px;*/
      margin: 0;
      margin-bottom: 15px;
      border-bottom: 1px solid #f1f1f1;
    }

    .pannel-title span {
      color: #20A0FF;
      border-bottom: 1px solid #20A0FF;
      display: inline-block;
      padding: 5px 0;
      margin-bottom: -1px;
    }
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
}
</style>
