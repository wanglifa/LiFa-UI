<template>
    <div class="layout" :style="{height:height}" :class="{hasSider:flag}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluLayout',
    props: {
        height: {
            type: String
        }
    },
    data(){
        return {
            flag:false
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'GuluSider'){
                this.flag=true
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        border: 1px solid red;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>

