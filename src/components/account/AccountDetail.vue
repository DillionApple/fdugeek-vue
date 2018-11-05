<template>
  <el-row class="account" v-loading="loading">
    <el-col :span="24">
      <el-row class="user-icon-line" :gutter="50">
        <el-col :span="13" class="user-icon-col">
          <img :src="user_icon" class="user-icon">
        </el-col>
        <el-col :span="11" class="change-user-icon-btn-col">
          <label for="file-upload" class="custom-file-upload">
            修改头像
          </label>
          <input id="file-upload" type="file" accept="image/*" @change="change_icon"/>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          姓名：
        </el-col>
        <el-col :span="10" class="input-component>">
          <el-input v-model="user_info.nickname"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          学号/工号：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="user_info.username" :disabled="true"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          学院：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="user_info.school"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          专业：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="user_info.major"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          性别：
        </el-col>
        <el-col :span="10" class="input-component>">
          <el-radio v-model="user_info.gender" label="U">保密</el-radio>
          <el-radio v-model="user_info.gender" label="M">男</el-radio>
          <el-radio v-model="user_info.gender" label="F">女</el-radio>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          手机：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="user_info.mobile_phone"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          微信：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="user_info.wechat"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          QQ：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="user_info.qq"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-button @click="submit" type="primary">提交</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'
  import request from '@/api/request'

    export default {
      name: "AccountDetail",
      methods: {
        change_icon(f) {

          let vm = this

          let file= f.target.files[0];
          if (window.FileReader) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let form_data=new window.FormData();
            form_data.append('picture',file);
            request(vm, 'post', APIS.CHANGE_ACCOUNT_ICON_URL, form_data, true, response_data => {
              vm.$store.commit("update_user_icon_url", response_data.data.icon)
              vm.icon_url = APIS.MEDIA_ROOT + response_data.data.icon
            })
          }
        },
        submit() {

          let vm = this

          request(vm, 'post', APIS.CHANGE_ACCOUNT_DETAIL_URL, vm.user_info, true, response_data => {
            request(vm, 'get', APIS.GET_ACCOUNT_DETAIL_URL, null, true, response_data => {
              vm.$store.commit("update_user_info", response_data.data)
            })
          })
        }
      },
      data() {
        return {
          loading: false,
          user_info: {}
        }
      },
      computed: {
        user_icon() {
          return APIS.MEDIA_ROOT + this.user_info.icon
        }
      },
      mounted() {
        this.user_info = this.$store.state.user_info
      }
    }
</script>

<style scoped>

  .user-icon-col {
    text-align: right;
  }
  
  .change-user-icon-btn-col {
    text-align: left;
  }

  .user-icon-line {
    line-height: 120px;
  }

  .user-icon {
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 20px;
  }

  .input-line {
    margin-bottom: 10px;
    line-height: 60px;
  }

  .input-label {
    text-align: right;
  }

  .input-component {
    text-align: left;
  }

  #file-upload {
    display: none;
  }

  .custom-file-upload {
    border: solid 1px #C0C2C6;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
  }


</style>
