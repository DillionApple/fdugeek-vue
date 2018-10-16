<template>
  <el-row :gutter="20" class="root">
    <el-col :span="4" :xs="12" class="logo">
      <router-link to="/main">
        <img class="logo-icon" src="/static/logo.png">
      </router-link>
    </el-col>
    <el-col :span="6" :offset="14" :xs="{span: 12, offset: 0}">
      <div v-if="$store.state.logined">
        <router-link to="/account/">
          {{ this.$store.state.user_info.nickname }}
        </router-link>
        <el-button type="primary" @click="do_logout">登出</el-button>
      </div>
      <div v-else>
        <router-link to="/login">
          <el-button type="primary">
            登录
          </el-button>
        </router-link>
        <router-link to="/login">
          <el-button type="success">
            注册
          </el-button>
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from "@/api/api"

    export default {
      name: "MainHeader",
      methods: {
        do_logout () {
          this.axios.get(APIS.LOGOUT_URL).then(response => {
            this.$store.commit("logout")
            this.$router.push({name: "main"})
          })
        }
      }
    }
</script>

<style scoped>
  .root {
    background-color: #4B83C5;
    line-height: 60px;
  }

  .logo {
    line-height: 60px;
  }

  .logo-icon {
    height: 30px;
    position: relative;
    top: 10px;
  }

</style>
