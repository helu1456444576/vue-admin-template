import request from '@/utils/request'

export function startConfig() {
  return request({
    url: '/balance/',
    method: 'get'
  })
}

export function startTest() {
  return request({
    url: '/balance_test/',
    method: 'get'
  })
}
