<template lang="html">
  <div class="l-menu-item">
    <!-- meta.isMenu来表示是否为菜单 -->
    <template v-for="(item, index) of menus"
      v-if="item.meta && item.meta.isMenu">
      <el-menu-item :index="item.path" @click="onMenuItem(item)" v-if="!item.children">
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu :index="item.path" v-else>
        <template slot="title">
          <i :class="item.meta.iconCls"></i>
           <span slot="title">{{ item.meta.title }}</span>
        </template>
        <l-menu-item :menus="item.children" @on-menu-item="onMenuItem"></l-menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'LMenuItem',
  props: {
    menus: Array
  },
  methods: {
    onMenuItem (name) {
      this.$emit('on-menu-item', name)
    }
  }
}
</script>

<style lang="scss">
</style>
