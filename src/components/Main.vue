<template>
  <el-row class="main">
    <el-col :span="24" class="main-content">
      <el-row>
        <el-col :span="22" :offset="1" class="slogan-big">
          <span>复旦极客网</span>
        </el-col>
        <el-col :span="22" :offset="1" class="slogan-small">
          <span>用信息技术连接智慧校园</span>
        </el-col>
        <el-col :span="24" class="buttons">
          <el-row>
            <el-col :span="24">
              <router-link to="/new-task/">
                <el-button class="publish-btn">发布需求</el-button>
              </router-link>
            </el-col>
            <el-col :span="24">
              <router-link to="/task-list/">
                <el-button class="list-btn">项目列表</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

  .slogan-big {
    font-size: 20px;
    margin-top: 150px;
    color: white;
  }

  @media screen and (min-width: 768px) {
    .slogan-big {
      font-size: 40px;
    }
  }

  .slogan-small {
    font-size: 18px;
    margin-top: 30px;
    color: white;
  }

  .buttons {
    margin-top: 70px;
  }

  .el-button {
    width: 200px;
    font-size: 18px;
    color: white;
    margin-bottom: 20px;
  }

  .publish-btn {
    background-color: cornflowerblue;
  }

  .list-btn {
    background-color: transparent;
  }

  .main {
    background: url("https://dn-coding-net-production-pp.codehub.cn/87230519-0f4a-4524-b9ef-aead33b0ca28.jpg") no-repeat center center fixed;
    background-size: cover;
    background-color: #FFFFFF;
  }

  .main-content {
    height: 98vh;
    background-color: rgba(10, 10, 80, 0.2);
  }


</style>
