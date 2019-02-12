<template>
  <el-row :gutter="20" class="root">
    <el-col :span="12" :offset="6">FDU GEEK Copyright © 2018-2019</el-col>
    <el-col :span="6" align="right">
      <router-link to="/feedback/" class="footer-link">
        <span>用户反馈</span>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped>
  .el-row {
    background-color: #1F2D3D;
    text-align: center;
    line-height: 40px;
    color: #FFFFFF;
  }

  .footer-link {
    text-decoration: none;
    color: #FFFFFF;
  }

</style>
