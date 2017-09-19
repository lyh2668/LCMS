<template lang="html">
  <div class="l-brand">
    <img :src="imgSrc" alt="" class="brand-img">
    <span class="brand-title" :class="titleCls">{{ title }}</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'LBrand',
  props: {
    imgSrc: {
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
  .brand-img {
    width: 40px;
    height: 40px;
    margin: 10px;
    margin-left: 12px;
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
