<template>
  <el-row class="account-main-layout">
    <el-col :span="4" :offset="3" class="action-list">
      <account-action-list class="card"></account-action-list>
    </el-col>
    <el-col :span="14" :offset="1">
      <router-view class="card"></router-view>
    </el-col>
  </el-row>
</template>

<script>

  import AccountActionList from '@/components/account/AccountActionList'
  import AccountDetail from "@/components/account/AccountDetail";

    export default {
      name: "AccountMainLayout",
      components: {AccountActionList, AccountDetail}
    }
</script>

<style scoped>

</style>
