<template>
    <div class="popover" @click="toggle" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visibility">
            <slot name="content"></slot>
        </div>
        <span ref="button">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GuluPopover',
        data(){
            return {
                visibility: false
            }
        },
        methods: {
            positionContent(){
                document.body.appendChild(this.$refs.content)
                let {left, top} = this.$refs.button.getBoundingClientRect()
                this.$refs.content.style.left = left + window.scrollX + 'px'
                this.$refs.content.style.top = top + window.scrollY + 'px'
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
            
            
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid #333;
        transform: translateY(-100%);
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
        background: white;
        margin-top: -10px;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before,&::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
            left: 10px;
        }
        &::before{
            border-top-color: #000;
            top: 100%;
        }
        &::after{
            border: 10px solid transparent;
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
</style>