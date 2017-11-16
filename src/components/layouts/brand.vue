<template lang="html">
  <div class="l-brand">
    <!-- <img :src="imgSrc" alt="" class="brand-img"> -->
    <i :class="['iconfont', 'brand-icon', icon]"></i>
    <span class="brand-title" :class="titleCls">{{ title }}</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'LBrand',
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      titleCls: this.collapse ? 'collapsed' : ''
    }
  },
  watch: {
    'collapse': function () {
      if (this.collapse) {
        this.titleCls = 'collapsed'
      } else {
        setTimeout(() => {
          this.titleCls = ''
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../common/style/var.scss';
.l-brand {
  height: 60px;
  line-height: 60px;
  display: flex;
  background: $header-color;
  color: white;
  .brand-icon {
    &::before {
      font-size: 32px;
      margin: 10px;
      color: inherit;
    }
  }
  .brand-title {
    // margin-left: 60px;
    overflow: hidden;
    white-space:nowrap;
    color: #fff;
    font-size: 24px;
  }

  .collapsed {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
}
</style>
