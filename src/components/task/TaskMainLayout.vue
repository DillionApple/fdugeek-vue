<template>
  <el-row>
    <el-col :span="16" :offset="4" :xs="{span: 24, offset:0}">
      <task-list class="card"></task-list>
    </el-col>
  </el-row>
</template>

<script>

  import TaskList from "@/components/task/TaskList"

  export default {
    name: "TaskMainLayout",
    components: {TaskList}
  }

</script>

<style scoped>

</style>
