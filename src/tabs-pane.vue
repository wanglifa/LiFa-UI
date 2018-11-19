<template>
    <div class="tabs-pane" v-show="active" :class="{active:active}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluPane',
        inject: ['eventBus'],
        data(){
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                 if(this.name === name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-pane{
        padding: 1em;
        &.active{
            
        }
    }
</style>