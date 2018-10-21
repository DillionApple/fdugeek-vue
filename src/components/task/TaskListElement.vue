<template>
  <div class="root task-list-element">
    <el-row class="header">
      <el-col :span="24">
        <img :src="'http://127.0.0.1:8000' + task.creator.icon" class="user-icon"> {{ task.creator.nickname }} | {{ task.create_time }} 发布
      </el-col>
    </el-row>
    <el-row class="main">
      <el-row class="title">
        <el-col :span="24">
          <router-link :to="'/task-detail/' + task.task_id" class="task-link">
            NO.{{ task.task_id }} {{ task.title }}
          </router-link>
        </el-col>
      </el-row>
      <el-row class="extra">
        <el-col :span="24" class="task-detail-line">
          <span class="task-detail-item">
            <span class="light-color">类型：</span><span>{{ task.type }}</span>
          </span>
          <span class="task-detail-item">
            <span class="light-color">报名人数：</span><span>{{ task. application_count }}</span>
          </span>
          <span class="task-detail-item">
            <span class="light-color">报名截止：</span><span>{{ task.due_time}}</span>
          </span>
        </el-col>
      </el-row>
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
    border-top: solid 1px #F0F2F5;
    border-bottom: solid 1px #F0F2F5;
    border-radius: 0;
    padding: 10px;
  }

  .root:hover {
    background-color: #F9FAFC;
  }

  .header {
    line-height: 40px;
  }

  .header .task-extra-info {
    text-align: right;
  }

  .title {
    line-height: 60px;
    font-size: 18px;
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
    height: 25px;
    width: 25px;
    position: relative;
    object-fit: cover;
    top: 10px;
    border-radius: 2px;
  }

  .task-link {
    text-decoration: none;
    color: #000000;
  }

  .task-detail-line .task-detail-item {
    margin-right: 20px;
  }

</style>
