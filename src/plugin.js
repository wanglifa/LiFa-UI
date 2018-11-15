import Toast from './toast.vue'
export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message, dataoptions={}){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeBtn: dataoptions.closeBtn,
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}