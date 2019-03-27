<template>
  <div style="padding-top: 16px;">
    <h2>自定义列模板</h2>
    <div class="demo-box">
      <div class="top">
<lf-table :columns="columns" :data-source="dataSource"
        bordered :selected-item.sync="selectedItem" :height="400"
        expend-field="description" checkable>
  <template slot-scope="xxx">
      <lf-button @click="edit(xxx.item.id)">编辑</lf-button>
      <lf-button @click="view(xxx.item.id)">查看</lf-button>
  </template>
</lf-table>
      </div>
      <lf-collaspe>
        <p slot="one">想要自定义一列只需在<code>lf-table</code>标签内使用<code>template</code>,可以通过给它添加一个<code>slot-scope</code>属性来获取你组件内部的属性或方法。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfTable from '../../../src/table.vue'
  import LfButton from '../../../src/button/button.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-collaspe': Collaspe,
      LfTable,
        LfButton
    },
    data () {
      return {
        content:
`
<lf-table :columns="columns" :data-source="dataSource"
        bordered :selected-item.sync="selectedItem" :height="400"
        expend-field="description" checkable>
  <template slot-scope="xxx">
      <lf-button @click="edit(xxx.item.id)">编辑</lf-button>
      <lf-button @click="view(xxx.item.id)">查看</lf-button>
  </template>
</lf-table>

<script>
import LfButton from '../../../src/button/button.vue'
export default{
    data(){
        return {
                    columns: [
                      {text: '姓名', field: 'name'},
                      {text: '分数', field: 'score'},
                      {text: '年龄', field: 'age'}
                    ],
                    dataSource: [
                      {id: 1, name: '发发', score: 100, age:18, description: '你最帅，将来一定会成为一个了不起的演员'},
                      {id: 2, name: '琳琳', score: 99, age: 16, description: '为啥不做我媳妇'},
                      {id: 3, name: '西西', score: 99, age: 20, description: '好累啊'},
                      {id: 4, name: '泳儿', score: 99, age: 21},
                      {id: 5, name: '美美', score: 99, age: 22},
                      {id: 6, name: '阿宇', score: 99, age: 26},
                      {id: 7, name: '泳儿', score: 99, age: 21},
                      {id: 8, name: '美美', score: 99, age: 22},
                      {id: 9, name: '阿宇', score: 99, age: 26}
                    ],
                    selectedItem: [],
        }
    }

}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        columns: [
          {text: '姓名', field: 'name',width: 100},
          {text: '分数', field: 'score', width: 100},
          {text: '年龄', field: 'age'}
        ],
        dataSource: [
            {id: 1, name: '发发', score: 100, age:18, description: '你最帅'},
            {id: 2, name: '琳琳', score: 99, age: 16, description: '为啥不做我媳妇'},
            {id: 3, name: '西西', score: 99, age: 20, description: '好累啊'},
            {id: 4, name: '泳儿', score: 99, age: 21},
            {id: 5, name: '美美', score: 99, age: 22},
            {id: 6, name: '阿宇', score: 99, age: 26},
            {id: 7, name: '泳儿', score: 99, age: 21},
            {id: 8, name: '美美', score: 99, age: 22},
            {id: 9, name: '阿宇', score: 99, age: 26},
        ],
          key: '',
          selectedItem: []
      }
    },
      methods: {
          edit(id){
              alert(`正在编辑第${id}个`)
          },
          view(id){
              alert(`正在查看第${id}个`)
          }
      },
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
   .box{
     width: 100%;
     height: 300px;
     background: gray;
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>