<template>
  <el-menu-item :index="data.path + ''">
    <template slot="title">
      <i :class="data.icon"></i>
      <span>{{data.title}}</span>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return { path: '/', icon: 'el-icon-eleme', name: '示例' }
      }
    }
  }
}
</script>
