import api from './'

export default {
  getArticles: (params) => {
    // return api.jsonRequest('article', params, 'get')
    let data = {
      total: 7,
      list: [
        {
          id: 1,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }, {
          id: 2,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }, {
          id: 3,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }, {
          id: 4,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }, {
          id: 5,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }, {
          id: 6,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }, {
          id: 7,
          title: '这是文章标题',
          description: '这是描述',
          updateTime: '2017-09-09',
          category: '国家',
          hits: '点击数'
        }
      ]
    }
    return data
  },
  getArticleDetail: (params) => {
    return api.jsonRequest('article/detail', params, 'get')
  },
  getFormDatas: (params) => {
    return {}
  },
  // 获取表格的字段映射
  getFields: (params) => {
    // mock
    let arr = []
    switch (params.type) {
      case 'article': {
        arr = [
          {
            prop: 'title',
            label: '标题',
            isShow: true
          }, {
            prop: 'description',
            label: '描述',
            isShow: true
          }, {
            prop: 'updateTime',
            label: '更新时间',
            isShow: true
          }, {
            prop: 'category',
            label: '类别',
            isShow: true
          }, {
            prop: 'hits',
            label: '点击数',
            isShow: true
          }
        ]
        break
      }
      case 'articleDetail': {
        arr = [
          {
            prop: 'title',
            label: '标题',
            isShow: true,
            type: 'input'
          }, {
            prop: 'description',
            label: '描述',
            isShow: true,
            type: 'input'
          }, {
            prop: 'category',
            label: '类别',
            isShow: true,
            type: 'select'
          }, {
            prop: 'important',
            label: '重要性',
            isShow: true,
            type: 'switch'
          }, {
            prop: 'content',
            label: '正文',
            isShow: true,
            type: 'richText'
          }
        ]
        break
      }
      default: {
        arr = []
      }
    }
    return arr
  }
}
