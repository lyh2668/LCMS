const state = {
  routes: []
}

const getters = {
  routes: (state) => {
    return state.routes
  }
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}

const actions = {
  setRoutes: async ({ commit }, routes) => {
    commit('SET_ROUTES', routes)
  }
}

const permission = {
  state,
  getters,
  mutations,
  actions
}

export default permission
