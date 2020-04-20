import Mock from 'mockjs'

const userList = () => {
  const data = []
  for (var i = 0; i < 10; i++) {
    data.push({
      id: Mock.mock('@guid'),
      code: Mock.mock('@last'),
      name: Mock.mock('@cname'),
      role: Mock.mock('@pick(["管理员", "部门经理", "组长", "组员"])'),
      address: Mock.mock('@county(true)')
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

// const menuList = () => {
//   const data = [
//     {
//       id: 0,
//       title: '首页',
//       url: '/home',
//       icon: 'el-icon-s-home'
//     },
//     {
//       id: 1,
//       title: '关于',
//       url: '/about',
//       icon: 'el-icon-s-promotion'
//     },
//     {
//       id: 2,
//       title: '权限管理',
//       icon: 'el-icon-s-check',
//       children: [
//         {
//           id: 20,
//           title: '角色管理',
//           url: '/role',
//           icon: 'el-icon-video-camera-solid'
//         },
//         {
//           id: 21,
//           title: '用户管理',
//           url: '/user/list',
//           icon: 'el-icon-s-custom'
//         }
//       ]
//     }
//   ]
//   return data
// }

const detail = () => {
  const data = {
    id: Mock.mock('@id'),
    name: Mock.mock('@cname'),
    age: 16,
    address: Mock.mock('@guid'),
    role: Mock.mock('@guid'),
    certid: Mock.mock('@guid')
  }
  return data
}

const delResult = () => {
  const data = {
    code: '000',
    msg: '删除成功！'
  }
  return data
}

const fields = () => {
  const data = {
    name: '',
    age: '',
    address: '',
    role: '',
    certid: ''
  }
  return data
}

const saveResult = () => {
  const data = {
    code: '000',
    msg: '保存成功！'
  }
  return data
}

Mock.mock(/\/user\/list/, 'get', userList)
Mock.mock(/\/user\/login/, 'post', login)
Mock.mock(/\/user\/detail/, 'get', detail)
Mock.mock(/\/user\/fields/, 'get', fields)
Mock.mock(/\/user\/*/, 'delete', delResult)
Mock.mock(/\/user\/save/, 'post', saveResult)
Mock.mock(/\/user\/save/, 'put', saveResult)
