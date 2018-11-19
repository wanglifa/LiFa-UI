<template>
    <div class="popover" @click.stop="toggle">
        <div class="content-wrapper" v-if="visibility" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
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
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            box-shadow: 0 0 3px rgba(0,0,0,.5);
            border: 1px solid red;
        }
    }
</style>