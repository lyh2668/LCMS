import request from '../../api/requests.js'

const state = () => ({
  articleList: [],
  articleFields: []
})

const getters = {
  articleList: (state) => { return state.articleList },
  articleFields: (state) => { return state.articleFields }
}

const mutations = {
  SET_ARTICLE_LIST: (state, list) => {
    state.articleList = list
  },
  SET_ARTICLE_FIELDS: (state, fields) => {
    state.articleFields = fields
  }
}

const actions = {
  getArticleList: async ({ commit }, params) => {
    const data = await request.getArticles(params)
    commit('SET_ARTICLE_LIST', data.list)
  },
  getArticleFields: async ({ commit }, params) => {
    const fields = await request.getTableFields()
    commit('SET_ARTICLE_FIELDS', fields)
  }
}

const article = {
  state,
  getters,
  mutations,
  actions
}

export default article
