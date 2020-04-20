import request from '@/utils/request'

export function list (data) {
  return request({
    url: 'user/list',
    method: 'get',
    data
  })
}

export function singleDelete (id) {
  return request({
    url: 'user/' + id,
    method: 'delete'
  })
}

export function batchDelete (ids) {
  return request({
    url: 'user/' + ids,
    method: 'delete'
  })
}

export function detail (id) {
  return request({
    url: 'user/detail',
    method: 'get',
    id
  })
}

export function fields (id) {
  return request({
    url: 'user/fields',
    method: 'get',
    id
  })
}

export function add (detail) {
  return request({
    url: 'user/save',
    method: 'post',
    detail
  })
}

export function update (detail) {
  return request({
    url: 'user/save',
    method: 'put',
    detail
  })
}

export function login (data) {
  return request({
    url: 'user/login',
    method: 'post',
    data
  })
}
