<template>
    <div>
        <h2>每次只展开一个面板</h2>
        <div class="demo-box">
            <div class="top">
                <lf-collapse :selected.sync="selectedCollapse" signle>
                    <lf-collapse-item title="大老婆" name="1">大女儿</lf-collapse-item>
                    <lf-collapse-item title="二老婆" name="2">二女儿</lf-collapse-item>
                    <lf-collapse-item title="三老婆" name="3">三女儿</lf-collapse-item>
                </lf-collapse>
            </div>
            <lf-collapse-demo>
                <p slot="one">
                    可添加参数 single，每次只能展开一个面板
                </p>
                <code slot="two">{{content}}</code>
            </lf-collapse-demo>
        </div>
    </div>
</template>

<script>
    import LfCollapse from '../../../src/collapse/collapse.vue'
    import LfCollapseItem from '../../../src/collapse/collapse-item.vue'
    import LfCollapseDemo from './collspse-demo.vue'
    export default {
        name: "collaspe-demo-1",
        components: {LfCollapse, LfCollapseItem, LfCollapseDemo},
        data(){
            return {
                selectedCollapse: [],
                content: `
<lf-collapse :selected.sync="selectedCollapse" signle>
    <lf-collapse-item title="大老婆" name="1">大女儿</lf-collapse-item>
    <lf-collapse-item title="二老婆" name="2">二女儿</lf-collapse-item>
    <lf-collapse-item title="三老婆" name="3">三女儿</lf-collapse-item>
</lf-collapse>

<script>
...
new Vue({
    el:"#app",
    data:{
        selectedCollapse:[]
    },
})
<script>
                `.replace(/^ {10}/gm, '')
            }
        }
    }
</script>

<style scoped lang="scss">
    .demo-box{
        border: solid 1px #ebebeb;
        border-radius: 3px;
        transition: .2s;
        .top{
            padding: 24px;
        }
    }
</style>