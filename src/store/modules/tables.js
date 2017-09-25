import request from '../../api/requests.js'
import fields from '@/utils/fields'

const state = () => ({
  tableList: [],
  tableFields: [],
  tableTotal: 0,
  tableResize: false
})

const getters = {
  tableList: (state) => { return state.tableList },
  tableFields: (state) => { return state.tableFields },
  tableTotal: (state) => { return state.tableTotal },
  tableResize: (state) => { return state.tableResize }
}

const mutations = {
  SET_TABLE_LIST: (state, list) => {
    state.tableList = list
  },
  SET_TABLE_FIELDS: (state, fields) => {
    state.tableFields = fields
  },
  SET_TABLE_TOTAL: (state, total) => {
    state.tableTotal = total
  },
  ADD_TABLE_RESIZE: (state, flag) => {
    state.tableResize = flag
  }
}

const actions = {
  getTableList: async ({ commit }, params) => {
    const data = await request.getArticles(params)
    commit('SET_TABLE_LIST', data.list)
    commit('SET_TABLE_TOTAL', data.total)
  },
  getTableFields: ({ commit }, keys) => {
    let value = fields.createFields(keys)
    commit('SET_TABLE_FIELDS', value)
  },
  setTableList: ({ commit }, value) => {
    commit('SET_TABLE_LIST', value)
  },
  setTableFields: ({ commit }, value) => {
    commit('SET_TABLE_FIELDS', value)
  },
  tableResize: async ({ commit }, flag) => {
    commit('ADD_TABLE_RESIZE', flag)
  }
}

const tables = {
  state,
  getters,
  mutations,
  actions
}

export default tables
