<template>
    <div class="popover" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visibility" 
        :class="`position-${position}`"
        >
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="button">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'LiFaPopover',
        data(){
            return {
                visibility: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value){
                    return ['top','left', 'bottom','right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value){
                    return ['click','hover'].indexOf(value) >= 0
                }
            }
        },
        // computed: {
        //     openEvent(){
        //         if(this.trigger === 'click'){
        //             return 'click'
        //         }else{
        //             return 'mouseenter'
        //         }
        //     },
        //     closeEvent(){
        //         if(this.trigger === 'click'){
        //             return 'click'
        //         }else{
        //             return 'mouseleave'
        //         }
        //     }
        // },
        methods: {
            positionContent(){
                let {content,button} = this.$refs
                document.body.appendChild(content)
                let {left, top, height, width} = button.getBoundingClientRect()
                let {height: height2} = content.getBoundingClientRect();
                let positions = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top  + height + window.scrollY
                    },
                    left: {
                        left: left  + window.scrollX,
                        top: top  + (height-height2)/2 + window.scrollY
                    },
                    right: {
                        left: left + width+ window.scrollX,
                        top: top  + (height-height2)/2 + window.scrollY
                    }
                }
                content.style.left = positions[this.position].left + 'px'
                content.style.top = positions[this.position].top + 'px'
            },
            onClickDocument(e){
                if(this.$refs.popover.contains(e.target)){
                    return
                }
                if(this.$refs.content && this.$refs.content.contains(e.target)) return
                this.close()
            },
            close(){
                this.visibility = false;
                console.log('关闭')
                document.removeEventListener('click',this.onClickDocument)
            },
            open(){
                this.visibility = true
                this.$nextTick(()=>{
                    this.positionContent()
                    document.addEventListener('click',this.onClickDocument)
                })
            },
            toggle(e){
                //说明点击了按钮
                if(this.$refs.button.contains(e.target)){
                    if(this.visibility === true){
                        this.close()
                    }else{
                        this.open()
                    }
                }   
            }
        },
        mounted(){
            if(this.trigger === 'click'){
                this.$refs.popover.addEventListener('click',this.toggle)
            }else{
                this.$refs.popover.addEventListener('mouseenter',this.open)
                this.$refs.popover.addEventListener('mouseleave',this.close)
            }   
        },
        beforeDestroy(){
            if(this.trigger === 'click'){
                this.$refs.popover.removeEventListener('click',this.toggle)
            }else{
                this.$refs.popover.removeEventListener('mouseenter',this.open)
                this.$refs.popover.removeEventListener('mouseleave',this.close)
            }   
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        span{
            display: inline-block;
        }
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid #333;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        border-radius: 5px;
        &::before,&::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top{
            transform: translateY(-100%);
            margin-top: -10px;
            &::before,&::after{
                left: 10px;
            }
            &::before{
                border-bottom: none;
                border-top-color: #000;
                top: 100%;
            }
            &::after{
                border-bottom: none;
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom{
            margin-top: 10px;
            &::before,&::after{
                left: 10px;
            }
            &::before{
                border-top: none;
                border-bottom-color: #000;
                bottom: 100%;
            }
            &::after{
                border-top: none;
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -10px;
            &::before,&::after{
                transform: translateY(-50%);
                top: 50%;
                border-right: none;
            }
            &::before{
                border-left-color: #000;
                left: 100%;
            }
            &::after{
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.position-right{
            margin-left: 10px;
            &::before,&::after{
                transform: translateY(-50%);
                top: 50%;
                border-left: none;
            }
            &::before{
                border-right-color: #000;
                right: 100%;
            }
            &::after{
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
</style>