<template lang="html">
  <div class="l-ueditor-container">
    <div class="ueditor" v-show="!destroying">
      <script :id="id" type="text/plain"></script>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import '../../../static/ueditor/ueditor.config'
// import '../../../static/ueditor/ueditor.all.min'
// import '../../../static/ueditor/lang/zh-cn/zh-cn'

// import UE from 'UE'
export default {
  props: {
    content: {
      type: String
    }
  },
  data () {
    return {
      id: 'ueditor_' + new Date().getTime(),
      ueditorConfig: {
        initialFrameWidth: '100%',
        initialFrameHeight: 400
      },
      instance: null,
      destroying: false
    }
  },
  mounted () {
    /* eslint-disable */
    this.instance = UE.getEditor(this.id, this.ueditorConfig)
    console.log('ueditor id: ', this.id)
  },
  created () {

  },
  beforeDestory () {
    this.destroying = true
  },
  destroyed () {
    // 组件销毁的时候，要销毁 UEditor 实例
    if (this.instance !== null && this.instance.destroy) {
      this.instance.destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
