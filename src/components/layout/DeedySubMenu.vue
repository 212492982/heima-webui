<template>
  <el-submenu :index="data.path + ''">
    <template slot="title">
      <i :class="data.icon"></i>
      <span>{{data.title}}</span>
    </template>
    <deedy-menu-item :data="subData" v-for="(subData,i) in data.children" :key="i" />
  </el-submenu>
</template>

<script>
import DeedyMenuItem from './DeedyMenuItem'

export default {
  props: {
    data: {
      type: Object,
      default () {
        return { path: '/', icon: 'el-icon-eleme', title: '示例' }
      }
    }
  },
  components: {
    DeedyMenuItem: DeedyMenuItem
  }
}
</script>
