<template>
    <el-row>
      <el-col :span="18" :offset="3" align="left">
        <el-row v-if="!submitted">
          <h3>您的反馈是我们前进的动力！</h3>
          <el-input type="textarea" rows="10" placeholder="请输入您的反馈信息" v-model="feedback_text"></el-input>
          <el-input type="text" placeholder="您的联系邮箱" v-model="contact_email"></el-input>
          <el-button
            type="primary" size="small"
            class="submit-button"
            @click="submit_feedback">
            提交反馈
          </el-button>
        </el-row>
        <el-row v-else>
          <h3>提交成功，感谢您的反馈！</h3>
        </el-row>
      </el-col>
    </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

    export default {
      name: "Feedback",
      data() {
        return {
          feedback_text: "",
          contact_email: "",
          submitted: false
        }
      },
      methods: {
        submit_feedback() {
          let vm = this;

          let post_data = {
            feedback: vm.feedback_text,
            contact_email: vm.contact_email,
          };

          request(vm, 'post', APIS.FEEDBACK_URL, post_data, false, response_data => {
            if (response_data.err_code == 0) {
              vm.submitted = true
            }
          })

        }
      }
    }
</script>

<style scoped>

  .submit-button {
    margin-top: 10px;
  }

  .el-input {
    margin-top: 10px;
  }

</style>
