<template lang="html">
  <div class="l-main-container">
    <l-main-header :items="routesMatched"></l-main-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import LMainHeader from './mainHeader.vue'
export default {
  name: 'LMainContainer',
  components: {
    LMainHeader
  },
  data () {
    return {
      routesMatched: this.$route.matched
    }
  },
  watch: {
    '$route': function () {
      this.routesMatched = this.$route.matched
    }
  }
}
</script>

<style lang="scss" scoped>
.l-main-container {
  // position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  overflow-y: scroll;
}
</style>
