<template>
  <div style="padding-top: 16px;">
    <h2>引入动态数据</h2>
    <div class="demo-box">
      <div class="top">
        <lf-cascader :source.sync="source" height="100px" :selected.sync="selected"
                     :loadData="loadData"
        ></lf-cascader>
      </div>
      <lf-collaspe>
        <p slot="one">
          在上面代码的基础上引入一个loadData属性让它等于loadData
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import Cascader from '../../../src/cascader.vue'
  import db from  '../../../src/db'
  import LfCollaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-cascader': Cascader,
      LfCollaspe
    },
    data () {
      return {
          source: [

          ],
        selected: [],
        content:
                `
<lf-cascader :source.sync="source" height="200px" :selected.sync="selected" :loadData="loadData">
</lf-cascader>

<script>
import Cascader from '../../../src/cascader.vue'
...

data(){
    return {
        source: [

        ],
        selected: []
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
                },1000)
              })
    },
    },
    created() {

              this.ajax().then((result)=>{
                this.source = result
              })
    }

  }
...
<script>
 `.replace(/^ {8}/gm, '').trim(),
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
          },1000)
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
