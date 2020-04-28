<template>
  <div class="login">
    <div class="sign-in-wrapper">
      <div class="sign-in-header">
        <div class="sign-in-title">Login</div>
      </div>
      <div class="sign-in-content">
        <el-input maxlength="13" class="sing-in-username" v-model="username" placeholder="请输入用户名"></el-input>
        <el-input type="password" maxlength="13" class="sing-in-password" v-model="password" placeholder="请输入密码"></el-input>
        <div class="warnning-content" >
          <span v-if="warn">{{ warn }}</span>
        </div>
      </div>
      <div class="sign-in-footer">
        <el-button class="sign-in-button" @click="login" type="primary">确认</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username: '',
      password: '',
      warn: ''
    }
  },
  methods: {
    login(){
      this.loginVaildate()
      this.$api.user.login({
        username: this.username,
        password: this.password
      })
      .then(res => {
        if (res.success) {
          this.$message({
            message: '登陆成功',
            type: 'success'
          });
          window.localStorage.setItem('token', res.token)
          this.$router.push('/admin/adminHome')
        } else {
          this.$message({
            message: '登陆失败',
            type: 'error'
          });
        }
      })
    },
    loginVaildate(){
      if (!this.username) {
        this.warn = '用户名不能为空'
        this.resetInput()
        return false
      }
      if (!this.password) {
        this.warn = '密码不能为空'
        this.resetInput()
        return
      }
      this.warn = ''
    },
    resetInput(){
      this.username = ''
      this.password = ''
    }
  }
}
</script>
<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  .sign-in-wrapper {
    width: 340px;
    height: 370px;
    padding: 10px;
    background:#fff;
    border-radius: 10px ;

    .sign-in-header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #ddd;
      .sign-in-title {
        font-size: 32px;
        font-weight: 600;
      }
    }

    .sign-in-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 30px;

      .sing-in-username, .sing-in-password {
        width: 280px;
        margin-top: 20px;
      }

      .warnning-content {
        width: 280px;
        height: 16px;
        margin-top: 18px;
        text-align: center;
        font-size: 12px;
        color: red;
      }
    }

    .sign-in-footer {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .sign-in-button {
        width: 280px;
        height: 40px;
        background: linear-gradient(120deg,#8e44ad,#2980b9);
      }
    }
  }
}
</style>