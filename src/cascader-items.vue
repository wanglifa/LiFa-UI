<template>
    <div class="cascader-item">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
                <icon name="right" v-if="item.children"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-item :items="rightItems" :style="{height}" :height="height"></gulu-cascader-item>
        </div>
    </div>
</template>
<script>
import Icon from './icon.vue'
export default {
    name: 'GuluCascaderItem',
    props: {
        items: {
            type: Array
        },
        height: {
            type: String
        }
    },
    data(){
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems(){
            if(this.leftSelected && this.leftSelected.children){
                return this.leftSelected.children
            }else {
                return null
            }
        }
    },
    components: {
        Icon
    }
}
</script>
<style lang="scss">
    @import "./var";
    .cascader-item{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left{
            height: 100%;
            padding: .3em 0;
            .label{
                padding: 0.3em 1em;
                display: flex;
                align-items: center;
                .g-icon{
                    transform: scale(.6);
                }
            }
        }
        .right{
            margin-top: -1px;
            border-left: 1px solid $border-color-light;
        }
    }
</style>