/**
 * 全局校验类
 */
// import validator from 'validator'

let checkUsername = (str, min = 6, max = 16) => {
  // 6 － 16位的用户名，且首字母必须为英文
  // let reg = new RegExp(`^[a-zA-Z][a-zA-Z0-9_]{${min - 1},${max - 1}}$`)
  // return str && validator.isLength(str, min, max) && reg.test(str)
  return true
}

let checkPwd = (str, min = 6, max = 16) => {
  // let reg = new RegExp(`^(?![A-Z]+$)(?![a-z]+$)(?!\\d+$)(?![\\W_]+$)\\S{${min},${max}}$`)
  // return str && validator.isLength(str, min, max) && reg.test(str)
  return true
}

export default {
  checkUsername,
  checkPwd
}
