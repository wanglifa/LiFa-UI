<template>
    <div>
        <div style="padding: 20px;">
            <g-cascader :source.sync="source" height="200px" :selected.sync="selected"
             :loadData="loadData"
            ></g-cascader>
        </div>
        <div style="padding: 20px;">
            <g-cascader :source.sync="source" height="200px" :selected.sync="selected"
                        :loadData="loadData"
            ></g-cascader>
        </div>
    </div>
</template>

<script>
    import Button from './button/button.vue'
    import Cascader from  './cascader.vue'
    import db from './db.js'
    export default {
        name: "demo",
        components: {
            'g-button': Button,
            'g-cascader': Cascader
        },
        data(){
            return {
                source: [

                ],
                selected: [],
            }
        },
        methods: {
            loadData(node,fn){
                let {id}=node
                this.ajax(id).then((result)=>{
                    fn(result)
                })
            },
            ajax(id=0){
                return new Promise((resolve,reject)=>{
                    let result = db.filter(item=>item.parent_id === id)
                    result.map(node=>{
                        //如果数据库里有对应的对象的id等于当前节点的id，说明当前节点有children
                        if(db.filter(item=>item.parent_id === node.id).length > 0){
                            node.isLeaf = false
                        }else{
                            node.isLeaf = true
                        }

                    })
                    setTimeout(()=>{
                        resolve(result)
                    },300)
                })
            },
        },
        created() {

            this.ajax().then((result)=>{
                this.source = result
            })
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    body{
        font-size: var(--font-size);
    }

    html{
        --font-size: 14px;
    }

</style>