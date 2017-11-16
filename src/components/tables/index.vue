<template lang="html">
  <div class="l-table-container">
    <el-table
      :data="tableList"
      border
      tooltip-effect="dark"
      :style="style"
      ref="table"
      class="table">
      <el-table-column
        type="selection"
        width="50"
        v-if="hasSelection">
      </el-table-column>
      <el-table-column
        v-for="item in tableFields"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || ''"
        v-if="!item.noShow"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        :width="operateCellWidth">
        <template slot-scope="scope">
          <div class="operate-cell">
            <el-button
              size="small"
              type="primary"
              @click="handleOperate('view', scope.$index, scope.row)"
              v-if="(operateType >> 2 & 1) || validTypes('view')">查看</el-button>
            <el-button
              size="small"
              @click="handleOperate('edit', scope.$index, scope.row)"
              v-if="operateType >> 1 & 1 || validTypes('edit')">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleOperate('delete', scope.$index, scope.row)"
              v-if="operateType & 1 || validTypes('delete')">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :pageSize="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableTotal"
      class="pagination">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  name: 'LTable',
  props: {
    // type区分读取的table
    name: {
      type: String
    },
    // 如果从外部传入fields和list则不调用接口
    fields: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    },
    hasSelection: {
      type: Boolean,
      default: true
    },
    // operateType 删除 001 编辑 010 查看 100
    operateType: {
      type: Number,
      default: 0
    },
    operateTypes: {
      type: Array,
      default: () => [],
      validator: function (value) {
        let validArr = ['view', 'edit', 'delete']
        let flag = true
        for (let i = 0; i < value.length; ++i) {
          if (validArr.indexOf(value[i]) < 0) {
            flag = false
            break
          }
        }
        return flag
      }
    }
  },
  data () {
    return {
      lList: this.list,
      lFields: this.fields,
      currentPage: 1,
      pageSize: 10,
      style: '',
      styleWidth: ''
    }
  },
  computed: {
    ...mapGetters([
      'tableResize',
      'tableList',
      'tableFields',
      'tableTotal'
    ]),
    operateCellWidth: function () {
      let op = this.operateType
      let ops = this.operateTypes
      let cnt = 0

      if (op === 0) {
        cnt = ops.length
      } else {
        let cnt = 0
        while (op) {
          cnt = op & 1 ? ++cnt : cnt
          op = op >> 1
          // console.log(`op: ${op}, cnt: ${cnt}`)
        }
      }
      return cnt * 75
    }
  },
  async created () {
    if ((!this.fields || this.fields.length === 0) ||
      (!this.list || this.list.length === 0)) {
      await this.$store.dispatch('getTableList', { type: this.name })

      let keys = []
      if (this.tableList.length > 0) {
        keys = Object.keys(this.tableList[0])
      }
      this.$store.dispatch('getTableFields', keys)
    } else {
      this.tableFields = this.fields
      this.tableList = this.list
    }
    this.styleWidth = this.$refs.table.bodyWidth
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleOperate (type, index, row) {
      this.$emit('handleOperate', type, this.tableList[index])
    },
    validTypes: function (type) {
      return this.operateTypes.indexOf(type) > -1
    }
  },
  watch: {
    // table 由小变大时将会撑开父类，导致父类展示不全，通过折衷的办法修改style来保证
    'tableResize' (newVal) {
      if (!newVal) {
        this.style = 'width: ' + this.styleWidth + ';transition: 0.3s width ease-in-out;'
        setTimeout(() => {
          this.style = ''
        }, 500)
      } else {
        this.styleWidth = this.$refs.table.bodyWidth
      }
    }
  }
}
</script>

<style lang="scss">
.l-table-container {
  // position: absolute;
  max-width: 100%;
  .table {
    .operate-cell {
      display: flex;
      justify-content: space-between;
    }
  }
  .pagination {
    margin-top: 20px;
    float: right;
  }
}
</style>
