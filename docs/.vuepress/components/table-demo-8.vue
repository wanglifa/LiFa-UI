<template>
  <div style="padding-top: 16px;">
    <h2>排序</h2>
    <div class="demo-box">
      <div class="top">
<lf-table :columns="columns" :data-source="dataSource" :order-by.sync="orderBy"
          @update:orderBy="changeOrder" :loading="loading">
</lf-table>
      </div>
      <lf-collaspe>
        <p slot="one">开启排序，需要传入一个<code>orderBy</code>属性，它是一个<code>Object</code>类型，默认是一个空对象，我们可以通过<code>orderBy</code>来指定我们的排序规则（true: 开启排序；'desc': 降序；'asc': 升序），然后通过动态<code>.sync</code>动态监听<code>update:orderBy</code>事件，来更新<code>orderBy</code>也就是<code>:order-by.sync="orderBy"</code>；这里需要注意排序的方法需要我们自己定义，只需在<code>changeOrder</code>方法中定义你的排序算法即可。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfTable from '../../../src/table1.vue'
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
<lf-table :columns="columns" :data-source="dataSource" :order-by.sync="orderBy"
          @update:orderBy="changeOrder" :loading="loading">
</lf-table>

<script>
export default{
    data(){
        return {
                    columns: [
                      {text: '姓名', field: 'name'},
                      {text: '分数', field: 'score'},
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
                    selectedItem: [],
                    orderBy: {
                        name: true,
                        score: 'desc'
                    },
                    key: '',
                    loading: false
        }
    },
    methods: {
      changeOrder(data){
                    this.loading = true
                    this.$nextTick(()=>{
                    setTimeout(()=>{
                      let type
                      let arr = this.dataSource.map(item=>{
                          type = typeof item[this.key]
                          return item[this.key]
                      })
                      if( data[this.key]=== 'asc'){
                          if(type === 'number'){
                              arr.sort((a,b)=>a-b)
                          }else{
                              arr.sort((a, b) => b.localeCompare(a, 'zh-Hans-CN', {sensitivity: 'accent'}))
                          }
                      }else if(data[this.key] === 'desc'){
                          if(type === 'number'){
                              arr.sort((a,b)=>b-a)
                          }else{
                              arr.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'}))
                          }
                      }
                      arr.map((item,index)=>{
                          this.dataSource[index][this.key]=item
                      })
                      this.loading = false
                    },300)
                 })
      },
    },
    watch: {
      orderBy(val,oldVal){
                  for(let key in this.orderBy){
                      if(val[key] !== oldVal[key]){
                          this.key = key
                      }
                  }
      }
    },
}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        columns: [
          {text: '姓名', field: 'name',width: 200},
          {text: '分数', field: 'score', width: 200},
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
          orderBy: {//true:开启排序，但是不确定asc desc
              name: true,
              score: 'desc'
          },
          key: '',
          loading: false
      }
    },
methods: {
  changeOrder(data){
      this.loading = true
      this.$nextTick(()=>{
          setTimeout(()=>{
              let type
              let arr = this.dataSource.map(item=>{
                  type = typeof item[this.key]
                  return item[this.key]
              })
              if( data[this.key]=== 'asc'){
                  if(type === 'number'){
                      arr.sort((a,b)=>a-b)
                  }else{
                      arr.sort((a, b) => b.localeCompare(a, 'zh-Hans-CN', {sensitivity: 'accent'}))
                  }
              }else if(data[this.key] === 'desc'){
                  if(type === 'number'){
                      arr.sort((a,b)=>b-a)
                  }else{
                      arr.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'}))
                  }
              }
              arr.map((item,index)=>{
                  this.dataSource[index][this.key]=item
              })
              this.loading = false
          },300)
      })
  },
},
watch: {
  orderBy(val,oldVal){
      for(let key in this.orderBy){
          if(val[key] !== oldVal[key]){
              this.key = key
          }
      }
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