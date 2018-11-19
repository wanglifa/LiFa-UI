<template>
    <div class="popover" @click.stop="toggle">
        <div ref="content" class="content-wrapper" v-if="visibility" @click.stop>
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
            toggle(){
                this.visibility = !this.visibility
                if(this.visibility){
                    this.$nextTick(()=>{
                        document.body.appendChild(this.$refs.content)
                        let {left, top} = this.$refs.button.getBoundingClientRect()
                        this.$refs.content.style.left = left + window.scrollX + 'px'
                        this.$refs.content.style.top = top + window.scrollY + 'px'
                        let x = ()=>{
                            this.visibility = false
                            console.log('document隐藏popover')
                            document.removeEventListener('click',x)
                        }
                        document.addEventListener('click',x)
                    })
                }else{
                    console.log('vm隐藏popover')
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