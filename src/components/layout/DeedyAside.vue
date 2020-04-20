<template>
  <el-aside :width="isCollapse?'64px':'200px'">
    <div class="toggle-button" @click="toggleCollapse">|||</div>
    <deedy-menu :isCollapse="isCollapse" />
  </el-aside>
</template>

<script>
import DeedyMenu from './DeedyMenu'

export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  },
  components: {
    DeedyMenu: DeedyMenu
  }
}
</script>

<style lang="less" scoped>
.toggle-button {
  background-color: #3e79b4;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  width: 100%;
  user-select: none;
}

.el-aside {
  background-color: #545c64;
}

.el-menu {
  border-right: none;
}
</style>
