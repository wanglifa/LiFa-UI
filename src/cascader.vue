<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisibility = !popoverVisibility">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover" v-if="popoverVisibility">
            <cascader-item :items="source" :style="{height}" :height="height" :selected="selected" :level="level"
            @update:selected="onUpdateSelected"
            ></cascader-item>
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
        },
        selected: {
            type: Array,
            default: []
        },
        level: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            popoverVisibility: false,
        }
    },
    computed: {
        result(){
            return this.selected.map(item=>{return item.name}).join('/')
        }
    },
    components: {CascaderItem},
    methods: {
        onUpdateSelected(val){
            this.$emit('update:selected',val)
        }
    }
}
</script>
<style lang="scss" scoped>
@import './var.scss';
.cascader{
    position: relative;
    .trigger{
        border: 1px solid $border-color;
        height: $height;
        align-items: center;
        min-width: 10em;
        display: inline-flex;
        padding: 0 1em;
        border-radius: $border-radius;
    }
    .popover{
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        height: 200px;
        display: flex;
        margin-top: 8px;
        @extend .box-shadow;
    }
}
</style>
