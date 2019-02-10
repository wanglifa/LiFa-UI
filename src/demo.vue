<template>
    <div>
        <div style="padding: 20px;">
            <g-cascader :source.sync="source" height="200px" :selected.sync="selected"
               @update:selected="xxx" :loadData="loadData"
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
                        setTimeout(()=>{
                            resolve(result)
                        },300)
                })
            },
            xxx(){
              this.ajax(this.selected[0].id).then((result)=>{
                  let lastLevelSelected = this.source.filter(item=>item.id === this.selected[0].id)[0]
                  let parent = this.selected[0]
                  this.$set(parent,'children',result)
              })
            }
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