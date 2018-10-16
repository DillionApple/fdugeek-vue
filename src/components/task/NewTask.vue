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
          <el-select class="task-type-selector" v-model="task.type" :disabled="!editable" placeholder="全部类型">
            <el-option v-for="item in this.task_type_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="single-line-row">
        <el-col :span="6" class="input-label">
          报名截止日期：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-date-picker :disabled="!editable" v-model="task.due_time"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="multi-line-row">
        <el-col :span="6" class="input-label">
          描述：
        </el-col>
        <el-col :span="18" class="input-component">
          <el-input type="textarea" :rows="10" :disabled="!editable" v-model="task.description"></el-input>
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
    export default {
      name: "NewTask",
      data() {
        return {
          task: {},
          task_type_options: [
            {
              value: "",
              label: "全部类型"
            }, {
              value: "build_group",
              label: "开发团队招募"
            }, {
              value: "programing",
              label: "开发任务"
            }, {
              value: "tutor",
              label: "家教"
            }
          ]
        }
      },
      props: {
        editable: {
          type: Boolean,
          default: true
        },
        task_id: {
          type: Number,
          default: -1
        }
      },
      methods: {
        submit() {
          var vm = this
          this.axios.post("http://127.0.0.1:8000/task/new/", this.task).then(response => {
            alert("发布成功")
            vm.$router.push({name: "main"})
          })
        }
      },
      mounted() {
        if (this.task_id > -1) {
          this.axios.get("http://127.0.0.1:8000/task/detail/", {
            params: {
              task_id: this.task_id
            }
          }).then((response) => {
            this.task = response.data.data.task
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
    font-size: 18px;
    color: #727F8E;
  }

  .input-component {
    text-align: left;
  }

</style>
