<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  import APIS from "@/api/api"

export default {
  name: 'App',
  mounted() {
    this.axios.get(APIS.GET_ACCOUNT_DETAIL_URL).then(response => {
      if (response.data.err_code == 0) {
        this.$store.commit("update_user_info", response.data.data)
        this.$store.commit("login")
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


body {
  margin: 0 0 0 0;
  font-size: 14px;
  font-family: PingFang SC, Helvetica Neue, Helvetica, Hiragino Sans GB, Arial, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, sans-serif;
}


.card {
  background-color: #FFFFFF;
  padding: 25px 40px 25px 40px;
  border-radius: 3px;
  box-shadow: 0px 3px 10px #DDDDDD;
}

.light-color {
  color: #727F8E;
}

</style>
