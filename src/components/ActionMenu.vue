<template>
  <el-row class="action-menu">
    <el-row class="action-item-line">
      <router-link to="/new-task/">
        <el-button>
          <i class="el-icon-circle-plus-outline"></i> 发布需求
        </el-button>
      </router-link>
    </el-row>
    <el-row class="action-item-line">
      <router-link to="/account/detail/">
        <el-button>
          <i class="el-icon-edit-outline"></i> 用户信息
        </el-button>
      </router-link>
    </el-row>
    <el-row class="action-item-line">
      <router-link to="/account/password/">
        <el-button>
          <i class="el-icon-warning"></i> 修改密码
        </el-button>
      </router-link>
    </el-row>
    <el-row class="action-item-line">
      <router-link to="/account/published-task/">
        <el-button>
          <i class="el-icon-date"></i> 我发布的任务
        </el-button>
      </router-link>
    </el-row>
    <el-row class="action-item-line">
      <router-link to="/account/applied-task/">
        <el-button>
          <i class="el-icon-document"></i> 我报名的任务
        </el-button>
      </router-link>
    </el-row>
    <el-row class="action-item-line">
      <el-button @click="do_logout">
        <i class="el-icon-circle-close-outline"></i> 注销
      </el-button>
    </el-row>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

    export default {
      name: "ActionMenu",
      methods: {
        do_logout () {

          let vm = this

          vm.$confirm('确认要注销么？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            request(vm, 'get', APIS.LOGOUT_URL, null, true, response_data => {
              this.$store.commit("logout")
              this.$router.push({name: "main"})
            })
          }).catch(() => {
          })
        }
      },
    }
</script>

<style scoped>

  .action-item-line {
    text-align: center;
  }

  .action-item-line .el-button {
    width: 100%;
    border: 0;
    color: #727F8E;
    font-weight: lighter;
  }

</style>
