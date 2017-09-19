<template lang="html">
  <div class="l-main-header">
    <el-breadcrumb separator="/" class="breadcrumb">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <template v-for="item in items">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'LMainHeader',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.l-main-header {
  height: 40px;
  line-height: 40px;
  .breadcrumb {
    // margin: auto 40px;
    line-height: 40px;
  }
}
</style>
