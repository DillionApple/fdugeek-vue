<template>
  <el-row class="account-password" v-loading="loading">
    <el-row class="input-line">
      <el-col :span="8" class="input-label">
        旧密码：
      </el-col>
      <el-col :span="10" class="input-component">
        <el-input v-model="old_password" type="password"></el-input>
      </el-col>
    </el-row>
    <el-row class="input-line">
      <el-col :span="8" class="input-label">
        新密码：
      </el-col>
      <el-col :span="10" class="input-component">
        <el-input v-model="new_password" type="password"></el-input>
      </el-col>
    </el-row>
    <el-row class="input-line">
      <el-col :span="8" class="input-label">
        再输入一次：
      </el-col>
      <el-col :span="10" class="input-component">
        <el-input v-model="repeat_new_password" type="password"></el-input>
      </el-col>
    </el-row>
    <el-row class="input-line">
      <el-button type="primary" @click="submit">提交</el-button>
    </el-row>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

    export default {
      name: "ChangePassword",
      data() {
        return {
          loading: false,
          old_password: "",
          new_password: "",
          repeat_new_password: ""
        }
      },
      methods: {
        submit() {
          let vm = this;

          if (vm.new_password != vm.repeat_new_password) {
            vm.$message({
              message: '两次密码不一致',
              type: 'warning',
              duration: 1000,
            })
            return
          }
          let reg = /(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)(?![\!@#\$%\^&\*_]+$)(^[a-zA-Z0-9\!@#\$%\^&\*_]{6,20}$)/;
          if (!reg.test(vm.new_password)) {
            vm.$message({
              message: "请使用6-20位密码，且必须含有大写字母，小写字母，数字和特殊符号中的至少两种",
              type: 'warning',
              duration: 5000,
            });
            return
          }

          let post_data = {
            old_password: vm.old_password,
            new_password: vm.new_password
          }
          request(vm, 'post', APIS.CHANGE_PASSWORD_URL, post_data, true, response_data => {
          })
        }
      }
    }
</script>

<style scoped>

  .input-line {
    margin-bottom: 10px;
    line-height: 60px;
  }

  .input-label {
    text-align: right;
  }

  .input-component {
    text-align: right;
  }

</style>
