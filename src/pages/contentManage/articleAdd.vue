<template lang="html">
  <div class="cm-article-add">
    <div class="btn-confirm-cancel">
      <el-button size="small" type="primary" @click="confirm">确定</el-button>
      <el-button size="small" @click="back">返回</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CMArticleAdd',
  methods: {
    confirm: function () {

    },
    back: function () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.cm-article-add {
  .btn-confirm-cancel {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
}
</style>
