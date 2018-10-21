<template>
  <el-row class="published-task-list">
    <el-row>
      <task-list-element v-for="task in tasks" :key="task.id" :task="task"></task-list-element>
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
