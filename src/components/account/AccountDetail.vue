<template>
  <el-row class="account">
    <el-col :span="24">
      <el-row class="user-icon-line" :gutter="50">
        <el-col :span="12" class="user-icon-col">
          <img :src="icon_url" class="user-icon">
        </el-col>
        <el-col :span="12" class="change-user-icon-btn-col">
          <label for="file-upload" class="custom-file-upload">
            修改头像
          </label>
          <input id="file-upload" type="file" accept="image/*" @change="change_icon"/>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          昵称：
        </el-col>
        <el-col :span="10" class="input-component>">
          <el-input v-model="nickname"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          学号：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="student_id" :disabled="true"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          学院：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="school"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          专业：
        </el-col>
        <el-col :span="10" class="input-component">
          <el-input v-model="major"></el-input>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-col :span="8" class="input-label">
          性别：
        </el-col>
        <el-col :span="10" class="input-component>">
          <el-radio v-model="gender" label="U">保密</el-radio>
          <el-radio v-model="gender" label="M">男</el-radio>
          <el-radio v-model="gender" label="F">女</el-radio>
        </el-col>
      </el-row>
      <el-row class="input-line">
        <el-button @click="submit">提交</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

  import APIS from '@/api/api'

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
            this.axios.post(APIS.CHANGE_ACCOUNT_ICON_URL, form_data).then(response => {
              vm.$store.commit("update_user_icon_url", response.data.data.icon)
              vm.icon_url = APIS.MEDIA_ROOT + response.data.data.icon
              alert("修改成功")
            });
          }
        },
        submit() {

          let vm = this

          this.axios.post(APIS.CHANGE_ACCOUNT_DETAIL_URL, {
            nickname: this.nickname,
            gender: this.gender
          }).then(response => {
            alert("修改成功")
            vm.axios.get(APIS.GET_ACCOUNT_DETAIL_URL).then(response => {
              vm.$store.commit("update_user_info", response.data.data)
            })
          })
        }
      },
      data() {
        return {
          icon_url: APIS.MEDIA_ROOT + this.$store.state.user_info.icon,
          nickname: "",
          gender: "",
          student_id: "",
          school: "",
          major: "",
        }
      },
      mounted() {
        this.nickname = this.$store.state.user_info.nickname
        this.gender = this.$store.state.user_info.gender
        this.student_id = this.$store.state.user_info.username
        this.school = this.$store.state.user_info.school
        this.major = this.$store.state.user_info.major
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
    border-radius: 100px;
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


</style>
