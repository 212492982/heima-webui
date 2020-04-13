import Mock from 'mockjs'

const test = 'hello mock'

const userList = () => {
  const data = { results: [] }
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
  const data = {
    code: '000',
    msg: '登录成功！',
    token: Mock.mock('@guid')
  }
  return data
}

const menuList = () => {
  const data = [
    {
      id: 1,
      title: '公共服务',
      icon: 'el-icon-s-help',
      children: [
        {
          id: 10,
          title: '首页',
          url: '/home',
          icon: 'el-icon-message-solid'
        },
        {
          id: 11,
          title: '关于',
          url: '/about',
          icon: 'el-icon-s-ticket'
        }
      ]
    },
    {
      id: 2,
      title: '权限管理',
      icon: 'el-icon-s-open',
      children: [
        {
          id: 20,
          title: '角色管理',
          url: '/role',
          icon: 'el-icon-s-opportunity'
        }
      ]
    }
  ]
  return data
}

Mock.mock(/\/user\/test/, 'get', test)
Mock.mock(/\/user\/list/, 'get', userList)
Mock.mock(/\/user\/login/, 'post', login)
Mock.mock(/\/user\/menuList/, 'get', menuList)
