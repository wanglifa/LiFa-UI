let onClickDocument = (e)=>{
    let {target} = e
    arr.forEach(item=>{
        if(item.el === target || item.el.contains(target)){
            return
        }
        item.callback()
    })
}
document.addEventListener('click',onClickDocument)
let arr = []
export default {
    // 当被绑定的元素插入到 DOM 中时……
    bind: function (el, binding, vnode) {
        arr.push({el,callback:binding.value})
    }
}