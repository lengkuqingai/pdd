/**
 * 需要全局注册使用的vux组件或插件
 * */
const globalComponent = [ 'Field','CellGroup','Button' ]
const installComponent = (Vue) => {
  globalComponent.forEach((com)=>{
    Vue.use(require('vant')[com])
  })
}

export default installComponent

