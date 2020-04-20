<template>
  <el-container>
    <el-header>
      <div class="logo">
        <img src="@/assets/logo.png" />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <deedy-aside></deedy-aside>
      <deedy-main></deedy-main>
    </el-container>
  </el-container>
</template>

<script>
import DeedyAside from './DeedyAside'
import DeedyMain from './DeedyMain'

export default {
  methods: {
    logout () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  components: {
    DeedyAside: DeedyAside,
    DeedyMain: DeedyMain
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.logo {
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
