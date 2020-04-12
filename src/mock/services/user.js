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

const login = () => {
  var data = {
    id: Mock.mock('@guid'),
    code: Mock.mock('@last'),
    name: Mock.mock('@cname'),
    role: Mock.mock('@pick(["管理员", "部门经理", "组长", "组员"])')
  }
  return data
}

Mock.mock(/\/user\/test/, 'get', test)
Mock.mock(/\/user\/list/, 'get', userList)
Mock.mock(/\/user\/login/, 'post', login)
