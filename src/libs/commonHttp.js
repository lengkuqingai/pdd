import HttpRequest from "./axios"
import config from '../config/index'
import qs from 'qs'

const http = new HttpRequest( config.baseUrl )

export const $get = (url, obj, options) => {
  return http.request({
    ...options,
    url:`${url}?${qs.stringify(obj)}`,
    method: 'get'
  })
}

export const $post = (url, data, options) => {
  return http.request({
    ...options,
    url,
    data,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

export const $postArr = (url, data, options) => {
  return http.request({
    ...options,
    url,
    data,
    method: 'post',
    transformRequest: [function (data) {
      return JSON.stringify(data)
    }],
    headers: { 'Content-Type': 'application/json' }
  })
}

export const $put = (url, data, options) => {
  return http.request({
    ...options,
    url,
    data,
    method: 'put',
    headers: { 'Content-Type': 'application/json' }
  })
}

export const $formPost = (url, data, options) => {
  return http.request({
    ...options,
    url,
    data:qs.stringify(data),
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

