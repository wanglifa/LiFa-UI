<template>
    <div class="toast" @click="onClickClose" ref="b">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="a"></div>
        <span class="close" v-if="closeBtn">
            {{closeBtn.text}}
        </span>
    </div>
</template>
<script>

export default {
    name: 'GuluToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
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
        }
    },
    created(){
        console.log(this.closeBtn)
        
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
                },this.autoCloseDelay*10000)
            }
        },
        close(){
            //移除这个dom元素
            this.$el.remove()
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
.toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-height;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px $toast-bg;
    padding: 0 16px;
    color: #fff;
}
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
</style>


