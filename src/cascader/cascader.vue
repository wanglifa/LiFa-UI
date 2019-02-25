<template>
    <div class="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
            <div v-if="result">{{result}}</div>
            <span v-else style="color: #ccc">请选择</span>
        </div>
        <div class="popover" v-show="popoverVisibility">
            <cascader-item :items="source" :style="{height}" :height="height" :selected="selected" :level="level"
            @update:selected="onUpdateSelected" :loadData="loadData" :loadItem="loadItem"
            ></cascader-item>
        </div>
    </div>
</template>
<script>
import CascaderItem from './cascader-items.vue'
import clickOutside from '../click-outside.js'
export default {
    name: 'LiFaCascader',
    props: {
        source: {
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
    directives: {clickOutside},
    data(){
        return {
            popoverVisibility: false,
            target: null,
            loadItem: {}
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
            let lastVal = val[val.length-1]
            this.loadItem = lastVal
            let simplest = (children,id)=>{
                return children.filter(item=>item.id === id)[0]
            }
            let complex = (children,id)=>{
                let noChildren = []
                let hasChildren = []
                children.forEach(item=>{
                    if(item.children){
                        hasChildren.push(item)
                    }else{
                        noChildren.push(item)
                    }
                })
                let found = simplest(noChildren,id)
                if(found){
                    return found
                }else{
                    // 如果是有children我们先把它当做没children的找一遍，然后再对它里面
                    // 的children的每一项使用complex方法找一遍
                    found = simplest(hasChildren, id)
                    if(found){
                        return found
                    }else{
                        for(let i = 0;i<hasChildren.length;i++){
                            found = complex(hasChildren[i].children,id)
                            if(found){
                                return found
                            }
                        }
                        return undefined
                    }
                }
            }
            let updateSource = (result)=>{
                this.loadItem={}
                let copy = JSON.parse(JSON.stringify(this.source))
                let toUpdate = complex(copy,lastVal.id)
                toUpdate.children = result
                this.$emit('update:source',copy)
            }
            if(!lastVal.isLeaf && this.loadData){
                this.loadData(lastVal,updateSource)
            }else if(lastVal.isLeaf){
                setTimeout(()=>{
                    this.close()
                },500)
            }
        },
        close(){
            this.popoverVisibility = false
        },
        open(){
            this.popoverVisibility = true
        },
        toggle(){
            if(this.popoverVisibility){
                this.close()
            }else{
                this.open()
            }
        },
        handle(val){
            this.close()
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../var';
.cascader{
    position: relative;
    display: inline-block;
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
        display: flex;
        margin-top: 8px;
        z-index: 1;
        @extend .box-shadow;
    }
}
</style>
