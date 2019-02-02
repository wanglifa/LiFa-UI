<template>
    <div class="cascader-item">
        {{sourceItem.name}}
        <gulu-cascader-item v-for="(item,index) in sourceItem.children" 
        v-if="sourceItem.children"
        :sourceItem="item"
        :key="index"   
        >
        </gulu-cascader-item>
    </div>
</template>
<script>
export default {
    name: 'GuluCascaderItem',
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>
<style lang="scss">
    .cascader-item{
        border: 1px solid red;
        margin: 10px;
    }
</style>