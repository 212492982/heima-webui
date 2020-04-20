<template>
  <el-menu
    :default-active="this.$route.path"
    :default-openeds="opens"
    router
    :collapse-transition="false"
    :collapse="isCollapse"
    unique-opened
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#28f"
  >
    <template v-for="(item,i) in this.$store.state.menuList">
      <deedy-sub-menu v-if="item.children" :data="item" :key="i" />
      <deedy-menu-item v-else :data="item" :key="i" />
    </template>
  </el-menu>
</template>

<script>
import DeedySubMenu from './DeedySubMenu'
import DeedyMenuItem from './DeedyMenuItem'

export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      opens: []
    }
  },
  components: {
    DeedySubMenu: DeedySubMenu,
    DeedyMenuItem: DeedyMenuItem
  }
}
</script>
