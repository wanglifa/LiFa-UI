<template>
    <div class="tabs-item" @click="$emit('change',name)">
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
            }
        },
        methods: {
           
        }
    }
</script>
<style lang="scss" scoped>
    
</style>