<template>
    <div class="cascader-item">
        <div class="left">
            <div class="label" v-for="(item,index) in items" @click="onSelected(item,index)" :class="{active: currentItem === index}">
                <span class="name">{{item.name}}</span>
                <icon name="right" v-if="rightArrowVisible(item)"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-item :items="rightItems" :style="{height}" :height="height" :selected="selected" :level="level+1"
              @update:selected="onUpdateSelected" :loadData="loadData"
            ></gulu-cascader-item>
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
        },
        selected: {
            type: Array,
            default: ()=>{return []}
        },
        level: {
            type: Number,
            default: 0
        },
        loadData: {
            type: Function
        }
    },
    data(){
        return {
            currentIndex: -1
        }
    },
    computed: {
        rightItems(){
            if(this.selected[this.level]){
                let selected = this.items.filter((item)=>item.name === this.selected[this.level].name)
                if(selected && selected[0].children&&selected[0].children.length > 0){
                    return selected[0].children
                }
            }
        },
        currentItem(){
            return this.currentIndex
        }
    },
    components: {
        Icon
    },
    methods: {
        onSelected(item,index){
            let copy = JSON.parse(JSON.stringify(this.selected))
            //之所以写copy[this.level]是为了你点击当前层的每一个都让数组里只保留一个
            //而不是点一个就往数组里加一个，如果不写的话你点杭州数组里有一个杭州，再点福建
            //数组就会变成['杭州','福建']可这两个属于同一层，我们统一层只想保留一个
            copy[this.level]= item
            copy.splice(this.level+1)
            this.currentIndex = index
            this.$emit('update:selected',copy)
        },
        onUpdateSelected(val){
            this.$emit('update:selected',val)

        },
        rightArrowVisible(item){
            return this.loadData ? !item.isLeaf : item.children
        }
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
            overflow: auto;
            box-sizing: border-box;
            .label{
                padding: 0.3em 1em;
                display: flex;
                align-items: center;
                cursor: pointer;
                white-space: nowrap;
                &:hover{
                    background: $gray;
                }
                &.active{
                    background: $gray;
                }
                .name{
                    margin-right: 1em;
                    user-select: none;
                }
                .g-icon{
                    margin-left: auto;
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