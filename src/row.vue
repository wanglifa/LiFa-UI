<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluRow'
}
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        .col{
            width: 50%;
            background: #ccc;
            border: 1px solid red;
        }
    }
    
</style>

