<template>
    <div class="cascader">
        <div class="tigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
               <cascader-item :sourceItem="item"></cascader-item>
            </div>
        </div>
    </div>
</template>
<script>
import CascaderItem from './cascaderitem.vue'
export default {
    name: 'GuluCascader',
    props: {
        source: {
            type: Array
        }
    },
    components: {CascaderItem}
}
</script>
<style lang="scss" scoped>
@import './var.scss';
.cascader{

}
</style>
