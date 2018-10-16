<template>
  <el-container>
    <el-header>
      <main-header></main-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <main-footer></main-footer>
    </el-footer>
  </el-container>
</template>

<script>

    import MainHeader from "@/components/MainHeader"
    import MainFooter from "@/components/MainFooter"

    export default {
        name: "Layout",
        components: {MainHeader, MainFooter, }
    }
</script>

<style scoped>
  .el-header {
    padding-left: 0;
    padding-right: 0;
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  .el-main {
    margin-top: 60px;
    margin-bottom: 60px;
    z-index: 0;
  }

  .el-footer {
    padding-left: 0;
    padding-right: 0;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1;
  }
</style>
