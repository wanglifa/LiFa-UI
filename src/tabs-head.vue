<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluHead',
        inject: ['eventBus'],
        methods: {
            
        },
        created(){
           this.eventBus.$on('update:selected',(name, vm)=>{
               let {left, width} = vm.$el.getBoundingClientRect()
               this.$refs.line.style.width = `${width}px`
               this.$refs.line.style.left = `${left}px`
           })
           
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        position: relative;
        .line{
            border: 1px solid $blue;
            position: absolute;
            bottom: 0;
            transition: all .3s linear;
        }
        .actions-wrapper{
            margin-left: auto;
        }
    }
</style>