import Toast from './toast.vue'
let currentToast
export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message, dataoptions){
             if(currentToast){
                 currentToast.close()
             }
             currentToast = createToast(
                 Vue,
                 message,
                 dataoptions,
                 function closeFn(){
                     currentToast = null
                 }
                ) 
        }
    }
}


function createToast(Vue, message, propsData, closeFn){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',closeFn)
    document.body.appendChild(toast.$el)
    return toast
}