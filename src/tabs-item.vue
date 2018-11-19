<template>
    <div class="tabs-item" @click="onClick" :class="{active:active,disabled:disabled}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluItem',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        data(){
            return {
                active: false
            }
        },
        inject: ['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(name,vm)=>{
                console.log(vm.$el)
                if(this.name === name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        methods: {
            onClick(){
                if(this.disabled) return
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        height: 100%;
        align-items: center;
        display: flex;
        cursor: pointer;
        &.active{
            color: $blue;
        }
        &.disabled{
            color: #999;
            cursor: not-allowed;
        }
    }
</style>