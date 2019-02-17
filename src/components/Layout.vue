<template>
  <el-container>
    <el-header>
      <main-header></main-header>
    </el-header>
    <el-main>
      <el-row>
        <el-col class="home-page" :span="24" v-if="this.$route.name == 'main'">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-col>
        <el-col class="function-page" :span="18" :offset="3" :xs="{span: 24, offset: 0}" v-else>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </el-main>
    <el-footer style="height: 40px;">
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
    margin-bottom: 40px;
    z-index: 0;
    padding: 0;
  }

  .function-page {
    padding: 10px;
  }

  .el-footer {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    bottom: 0;
    z-index: 1;
    position: fixed;
  }

  @media screen and (max-width: 767px) {
    .el-footer {
      display: none;
    }
    .el-main {
      margin-bottom: 0px;
    }
    .function-page {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
</style>
