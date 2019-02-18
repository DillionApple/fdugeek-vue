<template>
  <el-row class="main">
    <el-col :span="24" class="jumbotron">
      <el-row>
        <el-col :span="22" :offset="1" class="slogan-big">
          <span>复旦极客网</span>
        </el-col>
        <el-col :span="22" :offset="1" class="slogan-small">
          <span>有编程需求？找复旦极客！</span>
        </el-col>
        <el-col :span="24" class="buttons">
          <el-row>
            <el-col :span="24">
              <router-link to="/new-task/">
                <el-button class="publish-btn big-button">发布需求</el-button>
              </router-link>
            </el-col>
            <el-col :span="24">
              <router-link to="/task-list/">
                <el-button class="list-btn big-button">需求列表</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="introduce">
      <el-row>
        <el-col :span="12" :xs="24" class="introduce-content">
          <el-row>
            <el-col :span="12" :offset="6">
              <h1 class="introduce-title">如果你有需求：</h1>
              <pre class="introduce-text">
- 有好点子，<b>就差一个程序员了</b>
- 想通过<b>爬虫</b>获取数据
- 需要进行繁杂的<b>数据分析、可视化</b>
- 想<b>学习编程技巧</b>
- 需要<b>人工智能</b>帮你做点什么
- 想上<b>Google</b>，但缺乏工具
- 电脑坏了... ...</pre>
              <router-link :to="{name: 'new-task'}">
                <el-button size="small">立即发布需求</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12" :xs="24" class="introduce-content">
          <el-row>
            <el-col :span="12" :offset="6">
              <h1 class="introduce-title">如果你会编程：</h1>
              <pre class="introduce-text">
- 想踏出计算机的圈子，<b>接触更大的世界</b>
- 想<b>让自己的技能发挥价值</b>
- 想在<b>实践</b>中<b>提升</b>自己
- 想接触更多<b>优秀的开发者</b>
- 想在学习之余挣点<b>外快</b>
- 想帮妹子修电脑... ...</pre>
              <router-link :to="{name: 'task-list'}">
                <el-button size="small">查看需求列表</el-button>
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
    font-size: 30px;
    margin-top: 70px;
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
    margin-top: 40px;
  }

  .big-button {
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

  .jumbotron {
    height: 60vh;
    background-color: rgba(10, 10, 80, 0.2);
  }

  .introduce {
    background-color: #FFFFFF;
    padding-bottom: 20px;
  }
  
  .introduce-content {
    text-align: left;
  }

  .introduce-text {
    font-size: 15px;
  }

</style>
