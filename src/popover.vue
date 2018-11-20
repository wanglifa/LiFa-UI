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
                this.close()
            },
            close(){
                this.visibility = false;
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
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        border: 1px solid red;
        transform: translateY(-100%)
    }
</style>