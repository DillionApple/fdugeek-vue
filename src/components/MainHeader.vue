<template>
  <el-row :gutter="20" class="root">
    <el-col :span="13" :offset="1" class="logo">
      <el-button class="backword-button" @click="route_backward" size="small">
        <el-icon class="el-icon-arrow-left"></el-icon>返回
      </el-button>
      <router-link :to="logo_redirect_url">
        <span class="logo">FDU GEEK</span>
      </router-link>
    </el-col>
    <el-col :span="10" class="function-buttons">
      <div v-if="$store.state.logined">
        <el-popover
          placement="bottom"
          width="100"
          trigger="hover">
          <action-menu></action-menu>
          <el-button slot="reference" class="nickname_button">{{ this.$store.state.user_info.nickname }} ▼ </el-button>
        </el-popover>
      </div>
      <div v-else>
        <router-link :to="{name: 'login'}">
          <el-button type="primary" size="small">
            登录
          </el-button>
        </router-link>
        <router-link :to="{name: 'register'}">
          <el-button type="success" size="small">
            注册
          </el-button>
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from "@/api/api"
  import ActionMenu from "@/components/ActionMenu"

    export default {
      name: "MainHeader",
      components: {ActionMenu},
      data() {
        return {
          media_root: APIS.MEDIA_ROOT
        }
      },
      methods: {
        route_backward() {
          this.$router.back();
        }
      },
      computed: {
        logo_redirect_url() {
          if (this.$store.state.logined) {
            return "/task-list/"
          } else {
            return "/main/"
          }
        }
      }
    }
</script>

<style scoped>

  .nickname_button {
    border: 0px;
  }

  .root {
    background-color: #FFF;
    line-height: 60px;
    border-bottom: solid 1px lightgrey;
    box-shadow: 0px 3px 5px #EEEEEE;
  }

  .logo {
    line-height: 60px;
    font-size: 20px;
    font-weight: bolder;
    color: #000;
    text-align: left;
  }

  @media screen and (max-width: 767px) {
    .logo {
      font-size: 16px;
    }
  }

  .logo a {
    text-decoration: none;
  }

  .function-buttons {
    text-align: right;
  }

  .username {
    text-decoration: none;
    color: #000000;
  }

  .logo-icon {
    height: 30px;
    position: relative;
    top: 10px;
  }

  .account-popover-link {
    text-align: center;
    margin-bottom: -1px;
  }

  .account-popover-link .el-button {
    width: 140px;
    border: 0;
    color: #727F8E;
    font-weight: lighter;
  }

  .user-icon-small {
    height: 30px;
    width: 30px;
    top: 10px;
    position: relative;
  }

  .backword-button {
    padding: 5px;
    font-size: 16px;
  }

</style>
