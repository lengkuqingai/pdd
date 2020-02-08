import Cookies from 'js-cookie'
import config from '../config/index'

export const humpConversion = (str)=> {
  if(typeof str !== 'string'){
    return
  }
  str.replace(/[A-Z]/g,(value,index)=>index!==0?`-${value.toLowerCase()}`:value.toLowerCase())
  return str
}

export const localSave = (key,value)=> {
  isObject(value) && (value=JSON.stringify(value))
  localStorage.setItem(key,value)
}

export const localRead = (key)=> {
    return JSON.parse(JSON.stringify(localStorage.getItem(key)))
}

export const isNotSaved = (key)=> {
  return  localStorage.getItem(key) === null
}

export const encapsulateState = (obj,index)=>{
  for ( let key in obj ){
    const value = obj[key]
    Object.defineProperty(obj,key,{
      get:()=>{
        isNotSaved(`${index}_${key}`) && localSave(`${index}_${key}`,value)
        return localRead(`${index}_${key}`)
      },
      set:(value)=>localSave(`${index}_${key}`,value)
    })
  }
}

export const isObject = (obj)=> {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}




