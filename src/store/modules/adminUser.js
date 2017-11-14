// import api from '@/api'

// import cookies from '@/utils/cookies'

const state = () => ({
  loginForm: {
    username: '',
    password: ''
  },
  token: null,
  roles: []
})

const getters = {
  loginForm: (state) => { return state.loginForm },
  token: (state) => { return state.token },
  roles: (state) => { return state.roles }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    // token应该在登录成功以后被设置，这里只是模拟一下
    if (token) {
      // cookies.setToken(token)
    } else {
      // cookies.removeToken()
    }
    state.token = token
  },
  SET_USERINFO: (state, userinfo) => {
    state.roles = userinfo.roles
  }
}

const actions = {
  signin: async ({ commit }, userinfo) => {
    // 这里应该调用api的登录接口
    console.log('Signin success.')
    commit('SET_TOKEN', '123123123')
  },
  getUserInfo: async ({ commit }, token) => {
    commit('SET_USERINFO', {roles: {id: '123'}})
  }
}

const adminUser = {
  state,
  getters,
  mutations,
  actions
}

export default adminUser
