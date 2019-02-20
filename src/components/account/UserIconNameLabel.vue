<template>
  <span class="user-icon-name-label">
    <router-link :to="{name: 'account_public_detail', params: {username: user_info.username}}">
      <img :src="user_icon" class="user-icon-small" /> {{ user_info.nickname }}
      <img src="/static/male.png" v-if="user_info.gender=='M'" class="sex-icon">
      <img src="/static/female.png" v-if="user_info.gender=='F'" class="sex-icon">
    </router-link>
  </span>
</template>

<script>

  import APIS from '@/api/api'

    export default {
      name: "UserIconNameLabel",
      props: {
        user_info: {}
      },
      computed: {
        user_icon() {
          return APIS.MEDIA_ROOT + this.user_info.icon
        }
      }
    }
</script>

<style scoped>

  .user-icon-name-label a {
    text-decoration: none;
    color: #727F8E;
  }

  .user-icon-small {
    position: relative;
    top: 7px;
  }

  .sex-icon {
    position: relative;
    width: 15px;
    top: 2px;
  }

</style>
