import request from '../../api/requests.js'

const state = () => ({
  formFields: [],
  formDatas: []
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
  }
}

const actions = {
  getFormDatas: async ({ commit }, params) => {
    const data = await request.getFormDatas(params)
    commit('SET_FORM_DATAS', data.datas)
  },
  getFormFields: async ({ commit }, params) => {
    const fields = await request.getFields(params)
    commit('SET_FORM_FIELDS', fields)
  },
  setFormDatas: ({ commit }, value) => {
    commit('SET_FORM_DATAS', value)
  },
  setFormFields: ({ commit }, value) => {
    commit('SET_FORM_FIELDS', value)
  }
}

const forms = {
  state,
  getters,
  mutations,
  actions
}

export default forms
