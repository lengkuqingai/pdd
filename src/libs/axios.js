import axios from 'axios'
import store from "../store/index"
import config from '../config/index'
import { Toast } from "vant"

/**
 * 登录页面路径
 */
class HttpRequest {
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
    this.loginPath = config.mode === "hash" ? window.location.origin + '/pdd/#/login' : window.location.origin + '/pdd/login'
  }

  getInsideConfig() {
    const configs = {
      baseURL: this.baseUrl,
      timeout: config.timeout,
      headers: {}
    }
    return configs
  }

  goLogin() {
    window.location.href = this.loginPath
  }
  getCookie(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos != -1) {
      cookie_pos = cookie_pos + cookie_name.length + 1;
      var cookie_end = allcookies.indexOf(";", cookie_pos);
      if (cookie_end == -1) {
        cookie_end = allcookies.length;
      }
      var value = allcookies.substring(cookie_pos, cookie_end);
    }
    return value;
  }
  interceptors(instance, url) {
    /**
     * 请求拦截器
     */
    //Authorization
    instance.interceptors.request.use((config) => {
      const accessToken = this.getCookie("token")
      // console.log("accessToken",accessToken)
      if (accessToken) {
        config.headers.Authorization = accessToken
      } else {
        // this.goLogin()
      }
      return config
    }, function (error) {
      return Promise.reject(error)
    })

    /**
     * 响应拦截器
     * 601 token过期, 602 token无效, 651 密钥过期, 653密钥无效
     */
    instance.interceptors.response.use((response) => {
      const code = response.data.status
      if (code === 200) {
        return response.data
      }else  if (code == 401) {
        // Toast("请重新登录！")
        store.commit("user/setUserInfo",{})
        this.goLogin()
        // return response.data
      } else{
        return Promise.reject(response)
      }
    }, function (error) {
      return Promise.reject(error)
    })
  }

  request=(options)=> {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}


export default HttpRequest
