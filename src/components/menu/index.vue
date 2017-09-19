<template lang="html">
  <div class="l-menu">
    <el-menu
      :unique-opened="uniqueOpened"
      :router="router"
      :default-active="defaultActive"
      :collapse="collapse"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <l-menu-item :menus="menus"></l-menu-item>
    </el-menu>
    <div class="btn-menu-collapse" @click="onCollapse">
      <span v-if="!collapse">《</span>
      <span v-else class="offset">》</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LMenuItem from './menuItem.vue'
export default {
  name: 'LMenu',
  components: {
    LMenuItem
  },
  props: {
    uniqueOpened: {
      type: Boolean,
      defaultValue: false
    },
    defaultActive: {
      type: String,
      defaultValue: ''
    },
    router: {
      type: Boolean,
      defaultValue: false
    },
    menus: {
      type: Array
    }
  },
  data () {
    return {
      collapse: false
    }
  },
  created () {
    // console.log('menu created: ', this.menus)
  },
  methods: {
    handleOpen: function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose: function (key, keyPath) {
      console.log(key, keyPath)
    },
    onCollapse: function () {
      this.collapse = !this.collapse
      this.$emit('on-collapse', this.collapse)
    }
  }
}
</script>

<style lang="scss">
.l-menu {
  position: relative;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu--collapse .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
  .el-menu--collapse .el-submenu>.el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .btn-menu-collapse {
    position: absolute;
    top: calc(50% - 60px);
    right: -16px;
    &:hover {
      span::before {
        background: #d1dbe5;
      }
    }
    span {
      position: relative;
      display: inline-block;
      padding: 5px 5px;
      color: #bbb;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: #eef1f6;
        z-index: -1;
        transform: perspective(8px) rotateY(20deg);
        transform-origin: right;
      }
    }
    // 不加补偿则显示的标志位置有偏差
    .offset {
      padding-right: 0;
    }
  }
}
</style>
