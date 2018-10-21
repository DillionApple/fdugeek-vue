<template>
  <el-row class="applied-task-list">
    <el-row>
      <task-list-element v-for="application in applications" :key="application.task.id" :task="application.task" ></task-list-element>
    </el-row>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'
  import TaskListElement from "@/components/task/TaskListElement";

    export default {
      name: "AppliedTaskList",
      components: {TaskListElement},
      data() {
        return {
          applications: []
        }
      },
      mounted() {
        let vm = this
        request(vm, 'get', APIS.GET_USER_APPLICATIONS, null, true, response_data => {
          this.applications = response_data.data.applications
        })
      }
    }
</script>

<style scoped>

</style>
