<template>
  <el-row class="task-detail" v-loading="loading">
    <el-col :span="24">
      <el-row class="card user-application-info" v-if="user_applied">
        <h3><el-tag>已报名</el-tag></h3>
        <h3>报名时间</h3>
        <span>{{ user_application.application_time }}</span>
        <h3>报名理由：</h3>
        <pre>{{ user_application.application_text}}</pre>
      </el-row>
      <el-row class="card">
        <el-row class="task-detail-header">
        <el-col :span="24" class="task-title">
          <h1>{{ this.task.title }}</h1>
        </el-col>
        <el-col :span="24" class="task-detail-publisher-line">
          <span class="light-color"><img :src="creator_icon_url" class="user-icon-small"> {{ task.creator.nickname }} 于 {{ task.create_time }} 发布</span>
          <task-state-tag :task_state="task.state"></task-state-tag>
        </el-col>
        <el-col :span="24" class="task-detail-info-line">
          <span class="task-detail-item">
            <span class="light-color">类型：</span><span><el-tag size="small">{{ task_type }}</el-tag></span>
          </span>
          <span class="task-detail-item">
            <span class="light-color">报名人数：</span><span>{{ task.application_count }}</span>
          </span>
          <span class="task-detail-item">
            <span class="light-color">报名截止：</span><span>{{ task.due_time }}</span>
          </span>
          <span class="task-detail-item" v-if="$store.state.user_info.username != task.creator.username && !user_applied && task.state == 'active'">
            <router-link :to="application_url">
              <el-button type="primary" size="small">报名</el-button>
            </router-link>
          </span>
          <span class="task-detail-item" v-if="user_applied && task.state == 'active'">
            <el-button type="warning" size="small" @click="quit_task">退出</el-button>
          </span>
          <span class="task-detail-item" v-if="$store.state.user_info.username == task.creator.username">
            <el-button type="primary" size="small" @click="modify_task">修改</el-button>
            <el-button v-if="task.state != 'finished'" type="warning" size="small" @click="finish_task">结束</el-button>
            <el-button type="danger" size="small" @click="del_task">删除</el-button>
          </span>
        </el-col>
        </el-row>
        <el-col :span="24" class="task-description">
          <h3>需求描述</h3>
          <pre>{{ task.description }}</pre>
          <h3>报名要求</h3>
          <pre>{{ task.requirement }}</pre>
          <h3>奖励</h3>
          <pre>{{ task.reward }}</pre>
        </el-col>
      </el-row>
      <el-row class="card comment-part" v-if="show_comments">
        <el-col :span="24">
          <h3>评论</h3>
        </el-col>
        <comment-list></comment-list>
        <el-col :span="24" class="make-comment">
          <el-input type="textarea" rows="5" placeholder="请输入评论" v-model="comment"></el-input>
          <el-button type="primary" @click="make_comment">发表评论</el-button>
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
                <el-table-column prop="application_time" label="报名时间" width="135">
                </el-table-column>
                <el-table-column prop="applicant.username" label="学号" width="110">
                </el-table-column>
                <el-table-column prop="applicant.nickname" label="姓名" width="90">
                </el-table-column>
                <el-table-column prop="applicant.school" label="学院" width="120">
                </el-table-column>
                <el-table-column prop="applicant.major" label="专业" width="120">
                </el-table-column>
                <el-table-column label="报名理由" min-width="300">
                  <template slot-scope="scope">
                    <pre>{{scope.row.application_text}}</pre>
                  </template>
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

  import CommentList from '@/components/task/CommentList'
  import APIS from "@/api/api"
  import TASK_TYPE_MAP from "@/api/task_type_map"
  import request from "@/api/request"
  import TaskStateTag from "@/components/task/TaskStateTag";

    export default {
      name: "TaskDetail",
      components: {TaskStateTag, CommentList},
      data() {
        return {
          loading: false,
          task: {
            creator: {}
          },
          applications: [],
          user_applied: false,
          user_application: {},
          comment: "",
          show_comments: true,
        }
      },
      computed: {
        creator_icon_url() {
          return APIS.MEDIA_ROOT + this.task.creator.icon
        },
        application_url() {
          return "/application/" + this.task.task_id
        },
        task_type() {
          return TASK_TYPE_MAP[this.task.type]
        }
      },
      methods: {
        quit_task() {
          let vm = this

          vm.$confirm('确认要退出任务么？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            request(vm, 'post', APIS.QUIT_TASK, {task_id: this.task.task_id}, true, response_data => {
              location.reload(true)
            })
          }).catch(() => {
          })
        },
        del_task() {
          let vm = this

          vm.$confirm('确认要删除任务么？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            request(vm, 'post', APIS.DELETE_TASK, {task_id: this.task.task_id}, true, response_data => {
              history.go(-1)
            })
          }).catch(() => {
          })
        },
        make_comment() {
          let vm = this

          let post_data = {
            task_id: this.task.task_id,
            content: this.comment
          }

          request(vm, 'post', APIS.MAKE_COMMENT, post_data, true, response_data => {
            if (response_data.err_code == 0) {
              vm.comment = ""
              vm.show_comments = false

              vm.$nextTick(function() {
                vm.show_comments = true
              })
            }
          })
        },
        modify_task() {
          this.$router.push({name: 'modify-task', params: {task_id: this.task.task_id}})
        },
        finish_task() {
          let vm = this

          vm.$confirm('结束任务后，将无法再接受报名', '确认要结束任务么？', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            request(vm, 'post', APIS.FINISH_TASK_URL, {task_id: this.task.task_id}, true, response_data => {
              location.reload(true)
            })
          }).catch(() => {
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
          vm.user_application = response_data.data.application
        })
      }
    }
</script>

<style scoped>

  .user-application-info {
    text-align: left;
  }

  .card {
    margin-top: 20px;
  }

  .comment-part h3 {
    text-align: left;
  }

  .make-comment {
    text-align: left;
    margin-top: 35px;
  }
  .make-comment .el-button {
    margin-top: 10px;
  }

  .task-detail-publisher-line {
    text-align: left;
    line-height: 40px;
  }

  .user-icon-small {
    position: relative;
    top: 7px;
  }

  .task-detail-info-line {
    line-height: 40px;
    display: flex;
    flex-wrap: wrap;
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

  pre {
    white-space: pre-wrap;
  }

</style>
