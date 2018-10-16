<template>
  <div class="root task-list-element">
    <el-row class="header">
      <el-col :span="12" :xs="8">
        <img :src="'http://127.0.0.1:8000' + task.creator.icon" class="user-icon"> {{ task.creator.nickname }}
      </el-col>
      <el-col :span="12"  :xs="16" class="buttons">
        <router-link :to="'/task-detail/' + task.task_id">
          <el-button type="info">详情</el-button>
        </router-link>
      </el-col>
    </el-row>
    <hr>
    <el-row class="main">
      <el-row class="title">
        <el-col :span="24">
          NO.{{ task.task_id }} {{ task.title }}
        </el-col>
      </el-row>
      <el-row class="extra">
        <el-col :span="8" class="type">
          <span class="light-color">类型：</span><el-tag type="info">{{ task.type }}</el-tag>
        </el-col>
        <el-col :span="16" class="due-time">
          <span class="light-color">报名截止：</span>{{ task.due_time }}
        </el-col>
      </el-row>
    </el-row>
    <hr>
    <el-row class="footer">
      <span class="light-color">{{ task.create_time }} 发布 | {{ task.application_count }}人报名</span>
    </el-row>
  </div>
</template>

<script>


  import MEDIA_ROOT from "@/api/api"

    export default {
      name: "TaskListElement",
      props: {
        task : {}
      }
    }
</script>

<style scoped>
  .root {
    text-align: left;
    font-family: "Microsoft YaHei";
    border: solid 1px lightgrey;
    border-radius: 0;
    padding: 10px;
  }

  .root:hover {
    background-color: #F9FAFC;
  }

  .header {
    line-height: 40px;
  }

  .header .buttons {
    text-align: right;
  }

  .title {
    line-height: 60px;
    font-size: 30px;
  }

  .extra .due-time {
    text-align: right;
  }

  .footer {
    line-height: 30px;
    font-size: 14px;
  }

  .light-color {
    color: #727F8E;
  }

  hr {
    border-bottom: 0px;
    border-color: #AAAAAA;
    border-style: dashed;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .user-icon {
    height: 35px;
    width: 35px;
    position: relative;
    object-fit: cover;
    top: 10px;
    border-radius: 100px;
  }

</style>
