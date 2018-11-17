<template>
    <div class="tabs-head">
        <slot></slot>
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
           this.$emit('update:selected','这是tabs-head抛出的数据')
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        .actions-wrapper{
            margin-left: auto;
        }
    }
</style>