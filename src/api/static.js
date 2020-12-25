import request from '@/utils/request'

export function startConfig() {
  return request({
    url: '/static1/',
    method: 'get'
  })
}

export function startTest() {
  return request({
    url: '/static_test/',
    method: 'get'
  })
}
