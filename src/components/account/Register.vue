<template>
  <el-row v-loading="loading">
    <el-row v-if="!register_success">
      <p>通过学邮进行注册</p>
      <el-col :span="12" :offset="6" :xs="{span: 24, offset: 0}">
        <el-row class="line">
          <el-input v-model="username" placeholder="学号/工号">
            <template slot="append">@fudan.edu.cn</template>
          </el-input>
        </el-row>
        <el-row class="line">
          <el-input v-model="password1" type="password" placeholder="密码"></el-input>
        </el-row>
        <el-row class="line">
          <el-input v-model="password2" type="password" placeholder="重复输入密码"></el-input>
        </el-row>
        <el-row class="line">
          <el-col :span="12" :offset="6">
            <el-button type="primary" id="submit-button" @click="do_register">提交</el-button>
          </el-col>
        </el-row>
        <el-row class="line">
          <span class="light-color">已有账号？<router-link :to="{name: 'login'}">立即登录</router-link></span>
        </el-row>
      </el-col>
    </el-row>
    <el-row v-else>
      <h1>注册成功！</h1>
      <h3>请前往<a href="https://mail.fudan.edu.cn" target="view_window">学邮进行验证</a></h3>
    </el-row>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

    export default {
      name: "Register",
      data() {
        return {
          loading: false,
          username: "",
          password1: "",
          password2: "",
          register_success: false
        }
      },
      methods: {
        do_register() {
          let vm = this

          if (vm.password1 != vm.password2) {
            const h = vm.$createElement
            vm.$notify({
              title: "提示",
              message: h('div', {style: 'color: red'}, "两次密码不一致")
            })
            return
          }
          let reg = /(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)(?![\!@#\$%\^&\*_]+$)(^[a-zA-Z0-9\!@#\$%\^&\*_]{6,20}$)/;
          if (!reg.test(vm.password1)) {
            const h = vm.$createElement;
            vm.$notify({
              title: "提示",
              message: h('div', {style: 'color: red'}, "请使用6-20位密码，且必须含有大写字母，小写字母，数字和特殊符号中的至少两种")
            });
            return
          }


          request(vm, 'post', APIS.REGISTER_URL, {'username': vm.username, 'password': vm.password1}, false, response_data => {
            if (response_data.err_code == 0) {
              vm.register_success = true
            }
          })
        }
      }
    }
</script>

<style scoped>

  .line {
    margin-bottom: 20px;
  }

  #submit-button {
    width: 100%;
  }

</style>
