import request from '@/utils/request'

export function startConfig() {
  return request({
    url: '/dynamic/',
    method: 'get'
  })
}

export function startTest() {
  return request({
    url: '/dynamic_test/',
    method: 'get'
  })
}
