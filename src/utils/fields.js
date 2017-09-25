// const types = ['input', 'select', 'switch', 'richText']

// 这是所有字段的数组，里面的顺序决定着显示的默认顺序
const fields = [
  {
    prop: 'id',
    label: '编号',
    noShow: true
  }, {
    prop: 'title',
    label: '标题',
    type: 'input'
  }, {
    prop: 'description',
    label: '描述',
    type: 'textarea'
  }, {
    prop: 'category',
    label: '类别',
    type: 'select'
  }, {
    prop: 'important',
    label: '重要性',
    type: 'switch',
    onText: '是',
    offText: '否'
  }, {
    prop: 'avatar',
    label: '头像',
    type: 'upload-avatar'
  }, {
    prop: 'pictures',
    label: '图片',
    type: 'upload-pictures'
  }, {
    prop: 'attachment',
    label: '附件',
    type: 'upload-files',
    drag: true
  }, {
    prop: 'content',
    label: '正文',
    type: 'richText'
  }, {
    prop: 'updateTime',
    label: '更新时间'
  }, {
    prop: 'hits',
    label: '点击数'
  }
]

let createFields = function (keys) {
  let arr = []
  for (let i in fields) {
    for (let j in keys) {
      if (keys[j] === fields[i]['prop']) {
        arr.push(fields[i])
        break
      }
    }
  }
  return arr
}

export default {
  createFields
}
