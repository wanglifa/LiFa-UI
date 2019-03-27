<template>
  <div style="padding-top: 16px;">
    <h2>基础表格</h2>
    <div class="demo-box">
      <div class="top">
<lf-table :columns="columns" :data-source="dataSource">
</lf-table>
      </div>
      <lf-collaspe>
        <p slot="one">使用table组件的时候，必须在data中声明一个<code>columns</code>(用来设置表头信息)和<code>dataSource</code>(用来显示你的表格主体数据)这两个对象数组。另外<code>columns</code>里面的每一个表头数据都必须声明一个<code>width</code>字段（最后一列除外），用来定义每一列的宽度，否则会造成表头和表格主体对不齐的问题。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfTable from '../../../src/table.vue'
  import Icon from '../../../src/icon.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-icon': Icon,
      'lf-collaspe': Collaspe,
      LfTable
    },
    data () {
      return {
        content:
`
<lf-table :columns="columns" :data-source="dataSource">
</lf-table>

<script>
export default{
    data(){
        return {
                    columns: [
                      {text: '姓名', field: 'name', width: 200},
                      {text: '分数', field: 'score',width: 200},
                      {text: '年龄', field: 'age'}
                    ],
                    dataSource: [
                      {id: 1, name: '发发', score: 100, age:18},
                      {id: 2, name: '琳琳', score: 99, age: 16},
                      {id: 3, name: '西西', score: 99, age: 20},
                      {id: 4, name: '泳儿', score: 99, age: 21},
                      {id: 5, name: '美美', score: 99, age: 22},
                      {id: 6, name: '阿宇', score: 99, age: 26},
                    ],
        }
    }
}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        columns: [
          {text: '姓名', field: 'name',width: 200},
          {text: '分数', field: 'score',width: 200},
          {text: '年龄', field: 'age'}
        ],
        dataSource: [
          {id: 1, name: '发发', score: 100, age:18},
          {id: 2, name: '琳琳', score: 99, age: 16},
          {id: 3, name: '西西', score: 99, age: 20},
          {id: 4, name: '泳儿', score: 99, age: 21},
          {id: 5, name: '美美', score: 99, age: 22},
          {id: 6, name: '阿宇', score: 99, age: 26},
        ],

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
   .box{
     width: 100%;
     height: 300px;
     background: gray;
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>