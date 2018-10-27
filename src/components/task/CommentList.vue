<template>
  <el-row class="comment-list">
    <el-col :span="24" class="light-color" v-if="comments.length == 0">
      暂无评论
    </el-col>
    <el-col v-loading="loading_comment_list" :span="24" v-else>
      <el-row v-if="show_comment_list">
        <comment-element v-for="comment in comments" :key="comment.id" :comment="comment"></comment-element>
      </el-row>
    </el-col>
    <el-col :span="24" v-if="comments.length != 0">
      <el-pagination layout="prev, pager, next" :total="comment_count" :current-page.sync="current_page" @current-change="update_comment_list"></el-pagination>
    </el-col>
  </el-row>
</template>

<script>

  import CommentElement from '@/components/task/CommentElement'
  import request from '@/api/request'
  import APIS from '@/api/api'

    export default {
      name: "CommentList",
      components: {CommentElement},
      data() {
        return {
          comments: [],
          comment_count: 0,
          current_page: 1,
          loading_comment_list: true,
          show_comment_list: false,
        }
      },
      mounted() {
        this.update_comment_list()
      },
      methods: {
        update_comment_list() {
          let vm = this

          let task_id = this.$route.params.task_id

          vm.loading_comment_list = true

          request(vm, 'get', APIS.GET_COMMENT_LIST, {task_id: task_id, page: vm.current_page-1}, true, response_data => {
            vm.comments = response_data.data.comments
            vm.comment_count = response_data.data.comment_count
            vm.loading_comment_list = false
            vm.show_comment_list = false

            vm.$nextTick(function() {
              vm.show_comment_list = true
            })
          })
        }
      }
    }
</script>

<style scoped>

  .comment-element {
    border-top: solid #F0F2F5 1px;
    border-bottom: solid #F0F2F5 1px;
    margin-top: -1px;
  }

</style>
