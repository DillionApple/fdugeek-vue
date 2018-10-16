<template>
  <el-row>
    <el-row class="task-detail">
      <new-task :editable="false" :task_id="parseInt(this.$route.params.task_id)"></new-task>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3" class="applicants">
        <el-row class="applicants-header">
          <el-col :span="24">
            报名人数：{{ this.task.application_count }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table :data="applicants" stype="width: 100%">
              <el-table-column type="index"></el-table-column>
              <el-table-column prop="application_time" label="报名日期">
              </el-table-column>
              <el-table-column prop="student_id" label="学号">
              </el-table-column>
              <el-table-column prop="nickname" label="昵称">
              </el-table-column>
              <el-table-column prop="application_text" label="申请理由">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>

  import NewTask from "@/components/task/NewTask"
  import APIS from "@/api/api"

    export default {
      name: "TaskDetail",
      components: {NewTask, },
      data() {
        return {
          task: {},
          applicants: [
            {
              date: '2018-10-30',
              student_id: '17210240047',
              nickname: 'Dillion',
              reason: "这是一个短申请"
            },
            {
              date: '2018-10-21',
              student_id: '17210240048',
              nickname: 'Jerry',
              reason: "这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请，这是一个比较长的申请"
            },
            {
              date: '2018-10-20',
              student_id: '17210240049',
              nickname: 'Tom',
              reason: "这是一个中等的申请, 这是一个中等的申请"
            }
          ]
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
              vm.applicants = response.data.data.applications
            })
          }
        })
      }
    }
</script>

<style scoped>

  .task-detail {
    margin-bottom: 20px;
  }
  
  .applicants {
    text-align: left;
    border: solid 1px;
    border-color: #F5F7FA;
    border-radius: 5px;
  }

  .applicants-header {
    background-color: #F5F7FA;
    font-size: 14px;
    line-height: 40px;
  }

  .applicant-list-element {
    margin-top: 10px;
  }

</style>
