import request from '@/utils/request'

export function startConfig() {
  return request({
    url: '/reuse/',
    method: 'get'
  })
}

export function startTest() {
  return request({
    url: '/reuse_test/',
    method: 'get'
  })
}
