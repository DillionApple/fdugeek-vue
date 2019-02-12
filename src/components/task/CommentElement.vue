<template>
  <el-row class="comment-element">
    <el-col :span="22" class="light-color">
      <span><img :src="account_icon_url" class="user-icon-small comment-info" /> {{ comment.account.nickname }}
        <img src="/static/male.png" v-if="comment.account.gender=='M'" class="sex-icon">
        <img src="/static/female.png" v-if="comment.account.gender=='F'" class="sex-icon">
        <el-tag type="info" size="mini" class="comment-index-tag" >{{ comment.create_time }}</el-tag>
      </span>
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

    export default {
      name: "CommentElement",
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
