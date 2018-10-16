<template>
    <el-row class="applicant-list-element">
      <el-row>
        <el-col :span="24" class="applicant-header">
          <i class="el-icon-success"></i> Dillion
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="student-id">
          学号：17210240047
        </el-col>
        <el-col :span="12" class="apply-time">
          报名时间：2018-12-24
        </el-col>
      </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ApplicantListElement"
    }
</script>

<style scoped>
</style>
