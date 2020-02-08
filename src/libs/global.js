/**
 * @挂载到window上的api
 * */


const _ = {

}

Object.getOwnPropertyNames(_).forEach(key=>{
    if(window[key])
        console.error("warn:",'当前挂载在window上的属性已重复')
    else
        window[key] = _[key]
})
