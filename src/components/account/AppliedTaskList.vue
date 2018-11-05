<template>
  <el-row class="applied-task-list" v-loading="loading">
    <el-row>
      <task-list-element v-for="application in applications" :key="application.task.id" :task="application.task" ></task-list-element>
    </el-row>
    <el-row v-if="applications.length == 0" class="light-color">
      还没有申请的任务，查看<router-link to="/task-list/">需求列表</router-link>
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
          loading: false,
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
