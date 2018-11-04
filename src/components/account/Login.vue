<template>
  <el-row>
    <p>请登录</p>
    <el-col :span="12" :offset="6" :xs="{span: 24, offset: 0}">
      <el-row class="line">
        <el-col>
          <el-input v-model="username" placeholder="学号/工号">
            <template slot="append">@fudan.edu.cn</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="line">
        <el-col>
          <el-input v-model="password" type="password" placeholder="密码"></el-input>
        </el-col>
      </el-row>
      <el-row class="line">
        <el-col :span="12" :offset="6">
          <el-button type="primary" id="submit-button" @click="do_login()">提交</el-button>
        </el-col>
      </el-row>
      <el-row class="line">
        <el-col :span="24">
          <span class="light-color">还没有账号？<router-link :to="{name: 'register'}">立即注册</router-link></span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from "@/api/api"
  import request from '@/api/request'

    export default {
      name: "Login",
      data() {
        return {
          username: "",
          password: ""
        }
      },
      methods: {
        do_login() {

          let vm = this

          let form_data = {
            username: this.username,
            password: this.password
          }

          request(vm, 'post', APIS.LOGIN_URL, form_data, false, response_data => {
            if (response_data.err_code == 0) {
              request(vm, 'get', APIS.GET_ACCOUNT_DETAIL_URL, null, true, response_data => {
                vm.$store.commit("update_user_info", response_data.data)
                vm.$store.commit("login")
                vm.$router.push({name: 'task-list'})
              })
            }
          })
        }
      }
    }
</script>

<style scoped>

  .line {
    padding-bottom: 20px;
  }

  #submit-button {
    width: 100%;
  }


</style>
