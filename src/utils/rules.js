import validatorUtil from './valid'

let checkRules = function (options, validCb, errMsg, trigger) {
  let rules = options

  if (validCb && typeof validCb === 'function') {
    let valid = {
      validator: (rule, value, callback) => {
        if (!validCb(value)) {
          callback(new Error(errMsg))
        } else {
          callback()
        }
      },
      trigger: trigger || 'blur'
    }
    rules.push(valid)
  }

  return rules
}

// 配置所有的rules规则
const rules = {
  username: checkRules([{ required: true, message: '请输入用户名', trigger: 'blur' }],
    validatorUtil.checkUsername, '请正确输入用户名，6-16位且首字母必须为字母！', 'change'),
  password: checkRules([{ required: true, message: '请输入密码', trigger: 'blur' }],
    validatorUtil.checkPwd, '请正确输入密码，6-12位且必须包含字母和数字!', 'change'),
  title: checkRules([{ required: true, message: '请输入标题', trigger: 'blur' }]),
  description: checkRules([{ required: true, message: '请输入描述', trigger: 'blur' }]),
  category: checkRules([{ required: true, message: '请选择类别', trigger: 'blur' }])
}

console.log('rules: ', rules)

export default rules
