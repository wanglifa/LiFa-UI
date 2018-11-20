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
            signle: Boolean,
            default: false
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            if(this.signle){
                return {
                    eventBus: this.eventBus
                }
            }
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