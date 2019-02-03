<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisibility = !popoverVisibility">
        </div>
        <div class="popover" v-if="popoverVisibility">
            <cascader-item :items="source" :style="{height}" :height="height"></cascader-item>
        </div>
    </div>
</template>
<script>
import CascaderItem from './cascader-items.vue'
export default {
    name: 'GuluCascader',
    props: {
        source: {
            type: Array
        },
        height: {
            type: String
        }
    },
    data(){
        return {
            popoverVisibility: false,
        }
    },
    components: {CascaderItem}
}
</script>
<style lang="scss" scoped>
@import './var.scss';
.cascader{
    position: relative;
    .trigger{
        border: 1px solid red;
        height: 32px;
        width: 100px;
    }
    .popover{
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        height: 200px;
        display: flex;
        @extend .box-shadow;
    }
}
</style>
