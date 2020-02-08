import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import config from '../config/index'
import { encapsulateState } from '../libs/util'

Vue.use(Vuex)
const modules = {
  user
}
Object.keys(modules).forEach((key,index)=>
  encapsulateState(modules[key].state,`${config.vuexCacheAlias}${index}`)
)
const store = new Vuex.Store({
  modules
})

export default store
