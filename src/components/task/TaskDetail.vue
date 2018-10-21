<template>
  <el-row class="task-detail">
    <el-col :span="16" :offset="4" class="card">
      <el-row>
        <el-col :span="24" class="task-title">
          <h1>{{ this.task.title }}</h1>
        </el-col>
        <el-col :span="24" class="task-detail-publisher-line">
          <span class="light-color"><img :src="creator_icon_url" class="user-icon"> {{ task.creator.nickname }} 于 {{ task.create_time }} 发布</span>
        </el-col>
        <el-col :span="24" class="task-detail-info-line">
          <span class="task-detail-item">
            <span class="light-color">类型：</span><span>{{ task.type }}</span>
          </span>
          <span class="task-detail-item">
            <span class="light-color">报名人数：</span><span>{{ task.application_count }}</span>
          </span>
          <span class="task-detail-item">
            <span class="light-color">报名截止：</span><span>{{ task.due_time }}</span>
          </span>
          <span class="task-detail-item" v-if="$store.state.user_info.username != task.creator.username">
            <router-link :to="application_url">
              <el-button type="success">报名</el-button>
            </router-link>
          </span>
          <span class="task-detail-item" v-if="user_applied">
            <el-button type="warning" @click="quit_task">退出</el-button>
          </span>
          <span class="task-detail-item" v-if="$store.state.user_info.username == task.creator.username">
            <el-button type="danger" @click="del_task">删除</el-button>
          </span>
        </el-col>
        <el-col :span="24" class="task-description">
          <h3>需求描述</h3>
          <span>{{ task.description }}</span>
          <h3>报名要求</h3>
          <span>{{ task.requirement }}</span>
          <h3>奖励</h3>
          <span>{{ task.reward }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="applications">
          <el-row class="applications-header">
            <el-col :span="24">
              报名人数：{{ this.task.application_count }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-table :data="applications" stype="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="application_time" label="报名日期">
                </el-table-column>
                <el-table-column prop="applicant.username" label="学号">
                </el-table-column>
                <el-table-column prop="applicant.nickname" label="昵称">
                </el-table-column>
                <el-table-column prop="application_text" label="申请理由">
                </el-table-column>
                <span slot="empty">
                  <span v-if="task.creator.username == $store.state.user_info.username">暂无报名</span>
                  <span v-else>创建者可查看</span>
                </span>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

  import NewTask from "@/components/task/NewTask"
  import APIS from "@/api/api"
  import request from "@/api/request"

    export default {
      name: "TaskDetail",
      components: {NewTask, },
      data() {
        return {
          task: {},
          applications: [],
          user_applied: false,
        }
      },
      computed: {
        creator_icon_url() {
          return APIS.MEDIA_ROOT + this.task.creator.icon
        },
        application_url() {
          return "/application/" + this.task.task_id
        }
      },
      methods: {
        quit_task() {
          let vm = this
          request(vm, 'post', APIS.QUIT_TASK, {task_id: this.task.task_id}, true, response_data => {
            history.go(-1)
          })
        },
        del_task() {
          let vm = this
          request(vm, 'post', APIS.DELETE_TASK, {task_id: this.task.task_id}, true, response_data => {
            history.go(-1)
          })
        }
      },
      mounted() {

        var vm = this

        this.axios.get(APIS.GET_TASK_DETAIL_URL, {
          params: {
            task_id: this.$route.params.task_id
          }
        }).then(response => {
          vm.task = response.data.data.task
          if (vm.task.creator.id == vm.$store.state.user_info.id) {
            vm.axios.get(APIS.GET_TASK_APPLICATIONS_URL, {
              params: {
                task_id: vm.$route.params.task_id
              }
            }).then(response => {
              vm.applications = response.data.data.applications
            })
          }
        })

        request(vm, 'get', APIS.GET_IF_USER_APPLIED_TASK, {task_id: this.$route.params.task_id}, true, response_data => {
          vm.user_applied = response_data.data.applied
        })
      }
    }
</script>

<style scoped>

  .task-detail-publisher-line {
    text-align: left;
    margin-bottom: 20px;
  }

  .user-icon {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    object-fit: cover;
    position: relative;
    top: 10px;
  }

  .task-detail-info-line {
    text-align: left;
  }

  .task-detail-item {
    margin-right: 20px;
  }

  .task-description {
    text-align: left;
  }

  .light-color {
    color: #727F8E;
  }

  .task-title {
    text-align: left;
  }

  .task-detail {
    margin-bottom: 20px;
  }
  
  .applications {
    text-align: left;
    border: solid 1px;
    border-color: #F5F7FA;
    border-radius: 5px;
    margin-top: 30px;
  }

  .applications-header {
    background-color: #F5F7FA;
    font-size: 14px;
    line-height: 40px;
  }

  .applicant-list-element {
    margin-top: 10px;
  }

</style>
