<template>
    <div class="tabs-item" @click="xxx" :class="{active:active}">
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
            this.eventBus.$on('update:selected',(name)=>{
                if(this.name === name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        methods: {
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        &.active{
            background: red;
        }
    }
</style>