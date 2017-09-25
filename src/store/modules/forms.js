import request from '../../api/requests.js'
import fields from '@/utils/fields'

const state = () => ({
  formFields: [],
  formDatas: {}
})

const getters = {
  formFields: (state) => { return state.formFields },
  formDatas: (state) => { return state.formDatas }
}

const mutations = {
  SET_FORM_FIELDS: (state, fields) => {
    state.formFields = fields
  },
  SET_FORM_DATAS: (state, datas) => {
    state.formDatas = datas
  },
  RESET_FORM_DATAS: (state) => {
    let obj = {}
    Object.keys(state.formDatas).forEach((key) => {
      obj[key] = null
    })
    state.formDatas = obj
  }
}

const actions = {
  getFormDatas: async ({ commit }, params) => {
    const data = await request.getFormDatas(params)
    commit('SET_FORM_DATAS', data.datas)
  },
  getFormFields: ({ commit }, keys) => {
    let value = fields.createFields(keys)
    commit('SET_FORM_FIELDS', value)
  },
  setFormDatas: ({ commit }, value) => {
    commit('SET_FORM_DATAS', value)
  },
  setFormFields: ({ commit }, value) => {
    commit('SET_FORM_FIELDS', value)
  },
  resetForm: ({ commit }) => {
    commit('RESET_FORM_DATAS')
  }
}

const forms = {
  state,
  getters,
  mutations,
  actions
}

export default forms
