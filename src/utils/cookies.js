import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

let getToken = () => {
  return Cookies.get(TokenKey)
}

let setToken = (token) => {
  return Cookies.set(TokenKey, token)
}

let removeToken = () => {
  return Cookies.remove(TokenKey)
}

export default {
  getToken,
  setToken,
  removeToken
}
