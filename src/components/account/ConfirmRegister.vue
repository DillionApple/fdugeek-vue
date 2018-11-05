<template>
    <el-row v-loading="loading">
      <h1>{{ register_status }}</h1>
      <h3 v-show="!loading">将在{{ seconds }}秒后跳转到登录页面</h3>
    </el-row>
</template>

<script>
    import request from "@/api/request";
    import APIS from "@/api/api"

    export default {
      name: "ConfirmRegister",
      data() {
        return {
          seconds: 3,
          username: "",
          confirm_code: "",
          loading: false,
          register_status: "正在验证"
        }
      },
      mounted() {
        let vm = this
        vm.username = vm.$route.params.username
        vm.confirm_code = vm.$route.params.confirm_code

        request(vm, 'get', APIS.CONFIRM_REGISTER_URL, {username: vm.username, confirm_code: vm.confirm_code}, false, response_data => {
          vm.register_status = response_data.message
          setInterval(() => {
            vm.seconds -= 1
            if (vm.seconds == 0) {
              vm.$router.push({name: 'login'})
            }
          }, 1000)
        })
      }
    }
</script>

<style scoped>
</style>
