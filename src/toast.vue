<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" @click="onClickClose" ref="b" 
    >
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="a"></div>
        <span class="close" v-if="closeBtn">
            {{closeBtn.text}}
        </span>
    </div>
    </div>
</template>
<script>

export default {
    name: 'LiFaToast',
    props: {
        autoClose: {
            type: [Boolean, Number],
            default: 5,
            validator(value){
                return value === false || typeof value === 'number'
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        closeBtn: {
            type: Object,
            default: ()=>{
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        position: {
            type: String,
            default: 'top',
            validator(value){
                return ['top','middle','bottom'].indexOf(value) >= 0
            }
        }
    },
    created(){
        
        
    },
    computed: {
        toastClasses(){
            return `position-${this.position}`
        }
    },
    mounted() {
        this.updateStyles()
        this.execAutoClose()
    },
    methods: {
        updateStyles(){
            this.$nextTick(function(){
                this.$refs.a.style.height = this.$refs.b.offsetHeight + 'px'
            })
        },
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoClose*1000)
            }
        },
        close(){
            //移除这个dom元素
            this.$el.remove()
            this.$emit('close')
            //完全销毁一个实例
            this.$destroy()
        },
        log(){
            console.log('aaaa')
        },
        onClickClose(){
            this.close()
            if(this.closeBtn && typeof this.closeBtn.callback === 'function'){
                this.closeBtn.callback(this) //this是toast组件实例，也就是app.js里传入的形参a
            }
        }
    }
}
</script>
<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,.75);
$animation-duration: 300ms;
@keyframes slide-down {
    0%{
        opacity: 0;
        transform: translateY(100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0%)
    }
}
@keyframes slide-up {
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0%)
    }
}
@keyframes fade-in {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top{
        top: 0;
        transform: translateX(-50%);
        .toast{
            animation: slide-up $animation-duration;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
    &.position-bottom{
        bottom: 0;
        transform: translateX(-50%);
        .toast{
            animation: slide-down $animation-duration;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    &.position-middle{
        top: 50%;
        transform: translate(-50%, -50%);
        .toast{
            animation: fade-in $animation-duration;
        }
    }
}
.toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px $toast-bg;
    padding: 0 16px;
    color: #fff;
    .message{
    padding: 8px 0;
    }
    .close{
        padding-left: 16px;
        flex-shrink: 0;
    }
    .line{
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
}

</style>


