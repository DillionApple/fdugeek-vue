<template>
  <el-row :gutter="20" class="root">
    <el-col :span="6" :xs="12" class="logo">
      <router-link :to="logo_redirect_url">
        <span class="logo">FDU CS Plus</span>
      </router-link>
    </el-col>
    <el-col :span="6" :offset="12" :xs="{span: 12, offset: 0}">
      <div v-if="$store.state.logined">
        <img :src="media_root + $store.state.user_info.icon" class="user-icon">
        <el-popover
          placement="bottom"
          width="100"
          trigger="hover">
          <el-row>
            <el-row class="account-popover-link">
              <router-link to="/account/detail">
                <el-button>
                  <i class="el-icon-edit-outline"></i> 用户信息
                </el-button>
              </router-link>
            </el-row>
            <el-row class="account-popover-link">
              <router-link to="/account/published-task/">
                <el-button>
                  <i class="el-icon-date"></i> 我发布的任务
                </el-button>
              </router-link>
            </el-row>
            <el-row class="account-popover-link">
              <router-link to="/account/applied-task/">
                <el-button>
                  <i class="el-icon-document"></i> 我报名的任务
                </el-button>
              </router-link>
            </el-row>
          </el-row>
          <el-button slot="reference">{{ this.$store.state.user_info.nickname }}</el-button>
        </el-popover>
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
      },
      data() {
        return {
          media_root: APIS.MEDIA_ROOT
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
  .root {
    background-color: #FFF;
    line-height: 60px;
    border-bottom: solid 1px lightgrey;
    box-shadow: 0px 3px 5px #EEEEEE;
  }

  .logo {
    line-height: 60px;
    font-size: 30px;
    font-weight: bolder;
    color: #000;
  }

  .logo a {
    text-decoration: none;
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

  .user-icon {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 5px;
    top: 10px;
    position: relative;
  }

</style>
