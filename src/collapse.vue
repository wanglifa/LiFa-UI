<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'GuluCollapse',
        props: {
            signle: {
                type: Boolean,
                default: false
            },
            selected: {
                type: String,
                default: '1'
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            
                return {
                    eventBus: this.eventBus
                }
            
        },
        mounted(){
            this.eventBus.$on('update:selected',(name)=>{
                this.$emit('update:selected',name)
            })
            this.eventBus.$emit('update:selected',this.selected)
            
        }
    }
</script>
<style lang="scss" scoped>
    $gray: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $gray;
        border-radius: $border-radius;
    }
</style>