<template>
    <div class="cascader">
        <div class="popover" @click="popoverVisibility = !popoverVisibility">
        </div>
        <div class="leave" v-if="popoverVisibility">
            <cascader-item :items="source"></cascader-item>
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
    .popover{
        border: 1px solid red;
        height: 40px;
        width: 100px;
    }
    .leave{
        border: 1px solid green;
    }
}
</style>
