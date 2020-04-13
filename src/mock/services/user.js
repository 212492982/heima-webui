import Mock from 'mockjs'

const test = 'hello mock'

const userList = () => {
  var data = { results: [] }
  for (var i = 0; i < 200; i++) {
    data.results.push({
      id: Mock.mock('@guid'),
      code: Mock.mock('@last'),
      name: Mock.mock('@cname'),
      role: Mock.mock('@pick(["管理员", "部门经理", "组长", "组员"])')
    })
  }
  return data
}

const login = (info) => {
  const params = JSON.parse(info.body)
  if (params.usr !== 'admin' || params.psw !== '123') {
    return { code: '100', msg: '用户名或密码错误！' }
  }
  var data = {
    code: '000',
    msg: '登录成功！',
    token: Mock.mock('@guid')
  }
  return data
}

Mock.mock(/\/user\/test/, 'get', test)
Mock.mock(/\/user\/list/, 'get', userList)
Mock.mock(/\/user\/login/, 'post', login)
