<template lang="html">
  <div class="cm-list">
    <div class="top">
      <!-- <el-button-group> -->
        <el-button type="primary" @click="onArticleAdd">文章添加</el-button>
      <!-- </el-button-group> -->
    </div>
    <div class="table-container">
      <l-table name="article"
        :operate-types="['view', 'edit', 'delete']"
        @handleOperate="handleOperate">
      </l-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LTable from 'components/tables'
import { mapGetters } from 'vuex'
export default {
  name: 'CMArticles',
  components: {
    LTable
  },
  computed: {
    ...mapGetters([
      'tableDatas'
    ])
  },
  data () {
    return {

    }
  },
  methods: {
    onArticleAdd () {
      this.$router.push({ name: 'CMArticleAdd' })
    },
    handleOperate (type, val) {
      console.log('type: ', type, 'val: ', val)
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.table-container {
  margin-top: 20px;
}
</style>
