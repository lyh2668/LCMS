<template lang="html">
  <div class="cm-article-add">
    <l-forms name="articleDetail" ref="form" :datas="datas"></l-forms>
    <div class="btn-confirm-cancel">
      <div class="button">
        <el-button size="small" @click="reset">重置</el-button>
      </div>
      <div class="button">
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </div>
      <div class="button">
        <el-button size="small" @click="back">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LForms from 'components/forms'
export default {
  name: 'CMArticleAdd',
  components: {
    LForms
  },
  computed: {

  },
  data () {
    return {
      datas: {
        'title': '',
        'description': '',
        'category': '',
        'important': '',
        'avatar': '',
        'pictures': [],
        'attachment': [],
        'content': ''
      }
    }
  },
  methods: {
    confirm: function () {

    },
    back: function () {
      this.$router.back()
    },
    reset: function () {
      this.$refs['form'].resetFields()
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
    .button {
      margin-top: 10px;
    }
  }
}
</style>
