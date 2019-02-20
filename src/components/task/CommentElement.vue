<template>
  <el-row class="comment-element">
    <el-col :span="22" class="light-color">
      <user-icon-name-label :user_info="comment.account"></user-icon-name-label>
      <el-tag type="info" size="mini" class="comment-index-tag" >{{ comment.create_time }}</el-tag>
    </el-col>
    <el-col :span="2">
      <span class="comment-info"><el-tag type="info" size="mini" class="comment-index-tag" >{{ comment.index }}楼</el-tag></span>
    </el-col>
    <el-col :span="24" class="content">
      <span>{{ comment.content }}</span>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from "@/api/api"

  import UserIconNameLabel from '@/components/account/UserIconNameLabel'

    export default {
      name: "CommentElement",
      components: {UserIconNameLabel},
      props: {
        comment: {}
      },
      computed: {
        account_icon_url() {
          return APIS.MEDIA_ROOT + this.comment.account.icon
        }
      }
    }
</script>

<style scoped>

  .comment-index-tag {
  }
  
  .comment-element {
    text-align: left;
  }

  .comment-info {
    position: relative;
    top: 7px;
  }

  .content {
    margin-top: 15px;
    padding-left: 27px;
    padding-bottom: 5px;
  }

  .sex-icon {
    position: relative;
    width: 15px;
    top: 3px;
  }

</style>
