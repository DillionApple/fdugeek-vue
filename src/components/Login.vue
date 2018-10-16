<template>
  <el-row>
    <p>无需注册，学号登录</p>
    <el-col :span="12" :offset="6" :xs="{span: 24, offset: 0}" :lg="{span:6, offset: 9}">
      <el-row class="line">
        <el-col>
          <el-input v-model="username" placeholder="学号"></el-input>
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
    </el-col>
  </el-row>
</template>

<script>

  import APIS from "@/api/api"

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

          this.axios.defaults.withCredentials = true
          this.axios.post(APIS.LOGIN_URL, {
              username: this.username,
              password: this.password
          }, {withCredentials: true}).then(response => {
            vm.axios.get(APIS.GET_ACCOUNT_DETAIL_URL, {withCredentials: true}).then(response => {
              console.log(response.data.data)
              vm.$store.commit("update_user_info", response.data.data)
              vm.$store.commit("login")
              vm.$router.push({name: "main"})
            })
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
