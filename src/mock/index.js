console.log('[antd-pro] mock mounting')
const Mock = require('mockjs')
require('./services/user')

Mock.setup({
  timeout: 800 // setter delay time
})
console.log('[antd-pro] mock mounted')
