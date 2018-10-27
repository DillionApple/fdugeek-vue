<template>
  <el-row>
    <el-col :span="16" :offset="3">
      <el-row class="line">
        <el-col :span="6" class="input-label">
          报名理由：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-input type="textarea" placeholder="请简要介绍自己能为项目所做的共享" rows="10" v-model="application_text"></el-input>
        </el-col>
      </el-row>
      <el-row class="line">
        <el-col :span="18" :offset="6" class="input-component">
          <el-button @click="add_contact_methods">添加联系方式</el-button>
        </el-col>
      </el-row>
      <el-row class="line">
        <el-col :span="18" :offset="6" class="input-component">
          <el-button type="primary" @click="submit">报名</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="6" class="line">
          <span>1. 你的信息(学号、姓名、报名理由等)将会公开给需求创建者，但不会公开给其他任何人</span>
          <br>
          <span>2. 为了方便对方与你快速取得联系，建议留下自己的联系方式，如微信、手机号等</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

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

          let post_data = {
            task_id: this.$route.params.task_id,
            application_text: this.application_text
          }

          request(vm, 'post', APIS.APPLY_FOR_TASK_URL, post_data, true, response_data => {
            const h = vm.$createElement
            if (response_data.err_code == 0) {
              vm.$notify({
                title: '提示',
                message: h('div', {style: 'color: teal'}, "申请成功")
              })
            } else {
              vm.notify({
                title: '提示',
                message: h('div', {style: 'color: teal'}, response_data.message)
              })
            }
            history.go(-1)
          })

        },
        add_contact_methods() {
          var vm = this
          const h = vm.$createElement

          let contact_methods_string = vm.$store.getters.get_contact_methods_string

          if (contact_methods_string == "") {
            vm.$notify({
              title: "提示",
              message: h('div', {style: 'color: teal'}, "还没有添加联系方式，请在'用户信息'内添加任意一种联系方式")
            })
          } else {
            vm.application_text = vm.application_text + "\n" + contact_methods_string
          }
        }
      }
    }
</script>

<style scoped>

  .line {
    text-align: left;
    margin-top: 20px;
  }

  .input-label {
    text-align: right;
    font-size: 18px;
    color: #727F8E;
  }

  .input-component {
    text-align: left;
  }

</style>
