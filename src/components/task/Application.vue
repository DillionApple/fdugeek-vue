<template>
  <el-row>
    <el-col :span="16" :offset="3">
      <el-row class="multi-line-row">
        <el-col :span="6" class="input-label">
          报名理由：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-input type="textarea" placeholder="请简要介绍自己能为项目所做的共享" rows="10" v-model="application_text"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="6" class="input-component">
          <el-button type="primary" @click="submit">报名</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

    export default {
      name: "Application",
      data() {
        return {
          application_text: ""
        }
      },
      methods: {
        submit() {

          var vm = this

          this.axios.post("http://127.0.0.1:8000/task/apply/", {
            task_id: this.$route.params.task_id,
            application_text: this.application_text
          }).then(response => {
            if (response.data.err_code == 0) {
              alert("报名成功")
            } else {
              alert(response.data.message)
            }
            vm.$router.push("/task-detail/" + this.$route.params.task_id)
          })
        }
      }
    }
</script>

<style scoped>

  .input-label {
    text-align: right;
    font-size: 18px;
    color: #727F8E;
  }

  .input-component {
    text-align: left;
  }

  .multi-line-row {
    margin-bottom: 20px;
  }

</style>
