<template>
  <el-row class="task-list">
    <el-row :gutter="10" class="functional-line">
      <el-col :span="6" :xs="24">
        <router-link to="/new-task">
          <el-button type="primary" class="new-task-button" icon="el-icon-circle-plus-outline">发布需求</el-button>
        </router-link>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-select class="task-type-selector" v-model="selected_task_type" @change="update_task_list" placeholder="全部类型">
          <el-option v-for="item in task_type_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-select class="task-state-selector" v-model="selected_task_state" @change="update_task_list" placeholder="全部状态">
          <el-option v-for="item in task_state_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-input v-model="search_keyword" placeholder="搜索">
          <el-button slot="append" icon="el-icon-search" @click="update_task_list"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row v-loading="loading_task_list" v-if="show_task_list">
      <task-list-element v-for="task in task_list" :key="task.id" :task="task"></task-list-element>
      <el-row v-if="task_list.length == 0" class="light-color">列表为空</el-row>
    </el-row>
    <el-row class="paging-component">
      <el-pagination layout="prev, pager, next" :total="task_count" :page-size="20" :current-page.sync="current_page" @current-change="update_task_list"></el-pagination>
    </el-row>
  </el-row>
</template>

<script>

  import TaskListElement from "@/components/task/TaskListElement"
  import APIS from "@/api/api"
  import request from "@/api/request"

  export default {
    name: "TaskList",
    components: {TaskListElement},
    data() {
      return {
        loading: false,
        selected_task_type: "all",
        selected_task_state: "all",
        search_keyword: "",
        task_type_options: [
          {
            value: "all",
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
          }, {
            value: "others",
            label: "其它"
          }
        ],
        task_state_options: [
          {
            value: "all",
            label: "全部状态"
          }, {
            value: "active",
            label: "招募中"
          }, {
            value: "finished",
            label: "报名截止"
          }
        ],
        task_list: [],
        task_count: 0,
        current_page: 0,
        loading_task_list: true,
        show_task_list: true
      }
    },
    mounted() {
      this.update_task_list()
    },
    methods: {
      update_task_list() {
        let vm = this

        vm.loading_task_list = true

        request(vm, 'get', APIS.GET_TASK_LIST_URL, {'page': vm.current_page-1, 'task_type': vm.selected_task_type, 'task_state': vm.selected_task_state, 'search_keyword': vm.search_keyword}, true, response_data => {
          vm.task_list = response_data.data.task_list
          vm.task_count = response_data.data.task_count
          vm.loading_task_list = false
          vm.show_task_list = false
          vm.$nextTick(function() {
            vm.show_task_list = true
          })
          vm.search_keyword = ""
        })
      }
    }
  }
</script>

<style scoped>

  .new-task-button {
    width: 100%;
  }

  .task-type-selector {
    width: 100%;
  }

  .task-state-selector {
    width: 100%;
  }

  .functional-line .el-col {
    margin-bottom: 20px;
  }

  .paging-component {
    margin-top: 20px;
  }

</style>
