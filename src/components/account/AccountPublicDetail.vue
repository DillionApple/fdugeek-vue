<template>
  <el-row class="account-public-detail">
    <el-row class="card">
      <el-col :span="12">
        <img :src="user_icon" class="user-icon-large">
      </el-col>
      <el-col :span="12" class="user-info">
        <el-row>
          <el-col :span="24">
            <p>学号：{{ user_info.username }}</p>
            <p>姓名：{{ user_info.nickname }}</p>
            <p v-if="user_info.gender == 'F'">性别：女</p>
            <p v-else-if="user_info.gender == 'M'">性别：男</p>
            <p v-else>性别：保密</p>
            <p v-if="user_info.school">学院：{{ user_info.school }}</p>
            <p v-else>学院：未填写</p>
            <p v-if="user_info.major">专业：{{ user_info.major }}</p>
            <p v-else>专业：未填写</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

    export default {
      name: "AccountPublicDetail",
      data() {
        return {
          user_info: {}
        }
      },
      computed: {
        user_icon() {
          return APIS.MEDIA_ROOT + this.user_info.icon
        }
      },
      mounted() {
        let vm = this
        request(vm, "get", APIS.GET_ACCOUNT_PUBLIC_DETAIL_URL, {username: this.$route.params.username}, true, response_data => {
          vm.user_info = response_data.data
        })
      }
    }
</script>

<style scoped>

  .user-icon-large {
    margin-top: 15px;
  }

  @media screen and (max-width: 767px) {
    .user-icon-large {
      height: 100px;
      width: 100px;
    }
  }
  
  .user-info {
    text-align: left;
  }

</style>
