<template>
    <el-row class="account-action-list">
      <el-col :span="24">
        <el-row>
          <router-link to="/account/detail/">
            <el-button>
              <i class="el-icon-edit-outline"></i> 用户信息
            </el-button>
          </router-link>
        </el-row>
        <el-row>
          <router-link to="/account/password/">
            <el-button>
              <i class="el-icon-warning"></i> 修改密码
            </el-button>
          </router-link>
        </el-row>
        <el-row>
          <router-link to="/account/published-task/">
            <el-button>
              <i class="el-icon-date"></i> 我发布的任务
            </el-button>
          </router-link>
        </el-row>
        <el-row>
          <router-link to="/account/applied-task/">
            <el-button>
              <i class="el-icon-document"></i> 我报名的任务
            </el-button>
          </router-link>
        </el-row>
      </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "AccountActionList"
    }
</script>

<style scoped>

  .el-button {
    width: 100%;
    margin-top: -1px;
    font-size: 14px;
    height: 50px;
    border: 0;
    color: #727F8E;
  }

</style>
