<template>
    <el-row>
      <h1>{{ register_status }}</h1>
      <h3>将在{{ seconds }}秒后跳转到首页</h3>
    </el-row>
</template>

<script>
    export default {
      name: "RegisterStatus",
      data() {
        return {
          seconds: 3
        }
      },
      computed: {
        register_status() {
          return this.$route.params.register_status
        }
      },
      mounted() {
        let vm = this
        setInterval(() => {
          vm.seconds -= 1
          if (vm.seconds == 0) {
            vm.$router.push({name: "main"})
          }
        }, 1000)
      }
    }
</script>

<style scoped>
</style>
