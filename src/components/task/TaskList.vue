<template>
  <el-row class="task-list">
    <el-row :gutter="10" class="functional-line">
      <el-col :span="6">
        <el-select class="task-type-selector" v-model="selected_task_type" placeholder="全部类型">
          <el-option v-for="item in task_type_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="11">
        <el-input placeholder="搜索">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="7">
        <router-link to="/new-task">
          <el-button type="primary" class="new-task-button">新建任务</el-button>
        </router-link>
      </el-col>
    </el-row>
    <el-row>
      <task-list-element v-for="task in task_list" :key="task.id" :task="task"></task-list-element>
    </el-row>
  </el-row>
</template>

<script>

  import TaskListElement from "@/components/task/TaskListElement"
  import APIS from "@/api/api"
  import request from "@/api/request"

  export default {
    name: "TaskList",
    components: {TaskListElement},
    data() {
      return {
        l: [1,2,3,4,5,6,7],
        selected_task_type: "",
        task_type_options: [
          {
            value: "",
            label: "全部类型"
          }, {
            value: "build_group",
            label: "开发团队招募"
          }, {
            value: "programing",
            label: "开发任务"
          }, {
            value: "tutor",
            label: "家教"
          }
        ],
        task_list: []
      }
    },
    mounted() {

      let vm = this

      request(this, 'get', APIS.GET_TASK_LIST_URL, null, true, data => {
        vm.task_list = data.data.task_list
      })
    }
  }
</script>

<style scoped>
  .task-list-element {
    margin-bottom: -1px;
  }

  .new-task-button {
    width: 100%;
  }

  .functional-line {
    margin-bottom: 20px;
  }

</style>
