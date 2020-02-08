/**
 * @注入到vue原型的方法
 * */
const _property = {

}

export default function (Vue) {
    for (let key in _property){
        Vue.prototype['_' + key] = _property[key]
    }
}
