<template>
  <span class="task-state-tag">
    <el-tag v-if="task_state == 'active'" size="small">
      招募中
    </el-tag>
    <el-tag v-else-if="task_state == 'finished'" type="info" size="small">
      报名截止
    </el-tag>
  </span>
</template>

<script>
    export default {
      name: "TaskStateTag",
      props: {
        task_state: ""
      }
    }
</script>

<style scoped>

</style>
