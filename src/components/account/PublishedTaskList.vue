<template>
  <el-row class="published-task-list">
    <el-row>
      <task-list-element v-for="task in tasks" :key="task.id" :task="task"></task-list-element>
    </el-row>
    <el-row v-if="tasks.length == 0" class="light-color">
      还没有创建的任务，快去<router-link to="/new-task/">发布需求</router-link>吧！
    </el-row>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'
  import TaskListElement from '@/components/task/TaskListElement'

    export default {
      name: "PublishedTaskList",
      components: {TaskListElement},
      data() {
        return {
          tasks: []
        }
      },
      mounted() {
        let vm = this
        request(vm, 'get', APIS.GET_PUBLISHED_TASKS, null, true, response_data => {
          this.tasks = response_data.data.tasks
        })
      }
    }
</script>

<style scoped>

</style>
