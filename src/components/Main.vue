<template>
  <el-row class="main">
    <el-col :span="24" class="main-content">
      <el-row>
        <el-col :span="24" class="slogan-big">
          <span>复旦校园软件服务外包平台</span>
        </el-col>
        <el-col :span="24" class="slogan-small">
          <span>CS + Everything</span>
        </el-col>
        <el-col :span="24" class="buttons">
          <el-row :gutter="30">
            <el-col :span="4" :offset="8">
              <router-link to="/new-task/">
                <el-button class="publish-btn">发布需求</el-button>
              </router-link>
            </el-col>
            <el-col :span="2">
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
    font-size: 40px;
    margin-top: 150px;
    color: white;
  }

  .slogan-small {
    font-size: 22px;
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
  }

  .publish-btn {
    background-color: cornflowerblue;
  }

  .list-btn {
    background-color: transparent;
  }

  .main {
    background-image: url("https://dn-coding-net-production-pp.codehub.cn/87230519-0f4a-4524-b9ef-aead33b0ca28.jpg");
    background-size: 100% 100%;
    min-height: 700px;
    background-color: #FFFFFF;
  }

  .main-content {
    min-height: 700px;
    background-color: rgba(10, 10, 80, 0.2);
  }


</style>
