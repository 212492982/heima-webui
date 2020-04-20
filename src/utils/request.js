import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1',
  timeout: 300
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

export default service
