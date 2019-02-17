<template>
  <el-row class="account-main-layout">
    <el-col :span="6" :xs="{span: 24}" class="card">
      <action-menu></action-menu>
    </el-col>
    <el-col :span="17" :offset="1" :xs="{span: 24, offset: 0}">
      <transition name="fade">
        <router-view class="card"></router-view>
      </transition>
    </el-col>
  </el-row>
</template>

<script>

  import ActionMenu from "@/components/ActionMenu";
  import AccountDetail from "@/components/account/AccountDetail";

    export default {
      name: "AccountMainLayout",
      components: {ActionMenu, AccountDetail}
    }
</script>

<style scoped>

  .account-action-list {
    margin-bottom: 20px;
    padding: 0px;
  }

  .card {
    padding: 10px 10px 10px 10px;
    margin-bottom: 20px;
  }

</style>
