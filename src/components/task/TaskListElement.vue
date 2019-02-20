<template>
  <div class="root task-list-element">
    <el-row class="header">
      <el-col :span="24">
        <user-icon-name-label :user_info="task.creator"></user-icon-name-label>
        | <timeago :datetime="task.create_time"></timeago> 发布
        <task-state-tag :task_state="task.state"></task-state-tag>
      </el-col>
    </el-row>
    <el-row class="main">
      <el-row class="title">
        <el-col :span="24">
          <router-link :to="{name: 'task-detail', params: {task_id: task.task_id}}" class="task-link">
            NO.{{ task.task_id }} {{ task.title }}
          </router-link>
        </el-col>
      </el-row>
      <el-row class="extra">
        <el-col :span="24" class="task-detail-line">
          <div class="task-detail-item">
            <span class="light-color">类型：</span><span><el-tag size="small">{{ task_type }}</el-tag></span>
          </div>
          <div class="task-detail-item">
            <span class="light-color">报名人数：</span><span>{{ task. application_count }}</span>
          </div>
          <div class="task-detail-item">
            <span class="light-color">报名截止：</span><span><timeago :datetime="task.due_time"></timeago></span>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>


  import APIS from "@/api/api"
  import TASK_TYPE_CONST from "@/api/task_type_const"

  import TaskStateTag from "@/components/task/TaskStateTag"
  import UserIconNameLabel from "@/components/account/UserIconNameLabel"

    export default {
      name: "TaskListElement",
      components: {UserIconNameLabel, TaskStateTag, },
      props: {
        task : {}
      },
      computed: {
        user_icon_url() {
          return APIS.MEDIA_ROOT + this.task.creator.icon
        },
        task_type() {
          return TASK_TYPE_CONST.task_type_map[this.task.type]
        }
      },
    }
</script>

<style scoped>

  .root {
    text-align: left;
    border-top: solid 1px #F0F2F5;
    border-bottom: solid 1px #F0F2F5;
    border-radius: 0;
    padding: 10px;
    margin-bottom: -1px;
  }

  .root:hover {
    background-color: #F9FAFC;
  }

  @media screen and (max-width: 767px) {
    .root {
      border-top: solid 1px #C0C2C5;
      border-bottom: solid 1px #C0C2C5;
    }
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



  .task-link {
    text-decoration: none;
    color: #000000;
  }

  .task-detail-line {
    display: flex;
    flex-wrap: wrap;
  }

  .task-detail-line .task-detail-item {
    margin-right: 20px;
  }

</style>
