<template>
  <el-row>
    <el-col :span="16" :offset="3">
      <el-row class="single-line-row">
        <el-col :span="6" class="input-label">
          标题：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-input :disabled="!editable" v-model="task.title"></el-input>
        </el-col>
      </el-row>
      <el-row class="single-line-row">
        <el-col :span="6" class="input-label">
          分类：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-select class="task-type-selector" v-model="task.type" :disabled="!editable" placeholder="请选择需求类型">
            <el-option v-for="item in this.task_type_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="single-line-row">
        <el-col :span="6" class="input-label">
          报名截止日期：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-date-picker :disabled="!editable" v-model="task.due_time" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="multi-line-row">
        <el-col :span="6" class="input-label">
          需求描述：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-input type="textarea" :rows="10" :disabled="!editable" v-model="task.description"></el-input>
        </el-col>
      </el-row>
      <el-row class="multi-line-row">
        <el-col :span="6" class="input-label">
          报名要求：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-input type="textarea" :rows="5" :disabled="!editable" v-model="task.requirement"></el-input>
        </el-col>
      </el-row>
      <el-row class="multi-line-row">
        <el-col :span="6" class="input-label">
          奖励：
        </el-col>
        <el-col :span="18">
          <el-input type="textarea" :rows="5" :disabled="!editable" v-model="task.reward"></el-input>
        </el-col>
      </el-row>
      <el-row class="single-line-row">
        <el-col :span="18" :offset="6" class="input-component">
          <el-button v-if="editable" type="primary" @click="submit">提交</el-button>
          <router-link v-else :to="'/application/' + this.task_id">
            <el-button type="primary">报名</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

  import request from '@/api/request'
  import APIS from '@/api/api'

    export default {
      name: "NewTask",
      data() {
        return {
          task: {},
          task_type_options: [
            {
              value: "build_group",
              label: "开发团队招募"
            }, {
              value: "programing",
              label: "开发任务"
            }, {
              value: "tutor",
              label: "家教"
            }, {
              value: "others",
              label: "其它",
            }
          ],
        }
      },
      props: {
        editable: {
          type: Boolean,
          default: true
        },
      },
      methods: {
        submit() {
          var vm = this

          if (vm.task.task_id != -1) {
            request(vm, 'post', APIS.MODIFY_TASK_URL, vm.task, true, response_data => {
              const h = vm.$createElement
              vm.$notify({
                title: "提示",
                message: h('div', {style: 'color: teal'}, "修改成功")
              })
              vm.$router.push({name: 'task-list'})
            })
          } else {
            request(vm, 'post', APIS.CREATE_NEW_TASK_URL, vm.task, true, response_data => {
              const h = vm.$createElement
              vm.$notify({
                title: '提示',
                message: h('div', {style: 'color: teal'}, "发布成功")
              })
              vm.$router.push({name: 'task-list'})
            })
          }
        }
      },
      mounted() {

        let vm = this

        if (this.$route.params.task_id == null) {
          this.task.task_id = -1
        } else {
          this.task.task_id = this.$route.params.task_id
        }

        if (this.task.task_id != -1) {
          request(vm, 'get', APIS.GET_TASK_DETAIL_URL, {task_id: this.task.task_id}, true, response_data => {
            this.task = response_data.data.task
          })
        }
      }
    }
</script>

<style scoped>

  .single-line-row {
    line-height: 40px;
    margin-top: 20px;
  }

  .multi-line-row {
    margin-top: 20px;
  }

  .input-label {
    text-align: right;
    color: #727F8E;
  }

  .input-component {
    text-align: left;
  }

</style>
