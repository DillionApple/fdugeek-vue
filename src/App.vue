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

html, body {
  margin: 0 0 0 0;
  font-size: 14px;
  font-family: PingFang SC, Helvetica Neue, Helvetica, Hiragino Sans GB, Arial, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, sans-serif;
  width: 100%;
  height: 100%;
  background-color: #F0F2F5;
}


.card {
  background-color: #FFFFFF;
  padding: 25px 40px 25px 40px;
  border-radius: 3px;
  box-shadow: 0px 3px 10px #DDDDDD;
}


@media screen and (max-width: 767px) {
  .card {
    padding: 10px 10px 10px 10px;
  }
}


.light-color {
  color: #727F8E;
}

.user-icon-small {
  height: 25px;
  width: 25px;
  object-fit: cover;
  border-radius: 2px;
}

.user-icon-medium {
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.user-icon-big {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.user-icon-large {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
  
</style>
