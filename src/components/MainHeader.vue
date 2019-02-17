<template>
  <el-row :gutter="20" class="root">
    <el-col :span="12" :offset="1" class="logo-part">
      <el-button class="backword-button hidden-sm-and-up" @click="route_backward">
        <el-icon class="el-icon-arrow-left"></el-icon>返回
      </el-button>
      <span class="logo">
        <router-link :to="logo_redirect_url">
          FDU GEEK
        </router-link>
      </span>
    </el-col>
    <el-col :span="10" class="function-buttons">
      <div v-if="$store.state.logined">
        <router-link :to="{name: 'account-detail'}">
          <el-button class="nickname_button">{{ this.$store.state.user_info.nickname }} ▼ </el-button>
        </router-link>
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

  .logo-part {
    line-height: 60px;
    text-align: left;
  }

  .logo a {
    text-decoration: none;
    font-weight: bolder;
    color: #000;
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    .logo a {
      font-size: 16px;
    }
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
