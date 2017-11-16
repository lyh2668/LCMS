<template lang="html">
  <div class="index-container">
    <div class="left-container">
      <l-brand title="LCMS" icon="icon-nav-logo" :collapse="isCollapse" @click.native="toHome" class="brand"></l-brand>
      <l-menu
        class="side-menu"
        :menus="routes"
        :default-active="$route.path"
        router
        unique-opened
        @on-collapse="onCollapse"></l-menu>
    </div>
    <div class="right-container">
      <l-header></l-header>
      <l-main-container></l-main-container>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LHeader from 'components/layouts/header'
import LMenu from 'components/menu'
import LMainContainer from 'components/layouts/mainContainer'
import LBrand from 'components/layouts/brand'
import { mapGetters } from 'vuex'
import logo from '@/assets/logo/sh_light.png'
export default {
  name: 'Index',
  components: {
    LHeader,
    LMenu,
    LMainContainer,
    LBrand
  },
  computed: {
    ...mapGetters([
      'routes'
    ])
  },
  data () {
    return {
      isCollapse: false,
      logo: logo
    }
  },
  methods: {
    onCollapse (isCollapse) {
      this.isCollapse = isCollapse
      this.$store.dispatch('tableResize', isCollapse)
    },
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
.index-container {
  position: absolute;
  width: 100%;
  min-width: 1000px;
  height: 100%;
  display: flex;
  overflow: hidden;
  .left-container {
    .brand {
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    .side-menu {
      height: 100%;
      background: #eef1f6;
      &::-webkit-scrollbar { display:none }
    }
  }
  .right-container {
    flex: 1;
    width: 100%;
    transition: width 0.28s ease-out;
  }
}
</style>
