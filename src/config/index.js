export default {
  /**
   * vuex防刷新数据缓存
   */
  vuexCacheAlias:'VUEX_Module',
  /**
   * 默认打开路由页面
   */
  indexRouterName:'Index',
  /**
   * token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * 路由模式hash or history
   */
  mode: "hash",
  /**
   * 请求超时
   */
  timeout:20*1000,
  /**
   * 请求公共路径
   */
  baseUrl:process.env.NODE_ENV === 'development' ? '' : window.location.origin
}
