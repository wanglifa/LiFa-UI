import Toast from './toast.vue'
let currentToast
export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message, dataoptions){
            console.log(currentToast)
             if(currentToast){
                 currentToast.close()
             }
             currentToast = createToast(Vue,message,dataoptions) 
        }
    }
}


function createToast(Vue, message, propsData){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}