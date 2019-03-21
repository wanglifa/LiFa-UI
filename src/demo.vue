<template>
    <div>
        {{selectedItem}}
        <div style="margin: 28px">
            <lf-table :columns="columns" :data-source="dataSource"
                      bordered :selected-item.sync="selectedItem" :order-by.sync="orderBy"
                      @update:orderBy="changeOrder" :loading="loading" :height="400"
                      expend-field="description" checkable
            ></lf-table>
        </div>
        <div style="margin: 28px">
            <lf-table :columns="columns" :data-source="dataSource" compact :striped="false"></lf-table>
        </div>
        <div style="margin: 28px">
            <lf-pager :total-page="20" :current-page.sync="currentPage"></lf-pager>
        </div>
    </div>
</template>

<script>
    import LfPager from './pager.vue'
    import LfTable from './table.vue'
    export default {
        name: "demo",
        components: {
            LfPager,
            LfTable
        },
        data() {
            return {
                currentPage: 2,
                selected: [],
                selectedItem: [],
                columns: [
                    //表头每一列显示的文本和字段
                    {text: '姓名', field: 'name', width: 100},
                    {text: '分数', field: 'score',width: 100},
                    {text: '年龄', field: 'age'}
                ],
                orderBy: {//true:开启排序，但是不确定asc desc
                    name: true,
                    score: 'desc'
                },
                dataSource: [
                    {id: 1, name: '发发', score: 100, age:18, description: '你最帅'},
                    {id: 2, name: '琳琳', score: 99, age: 16, description: '为啥不做我媳妇'},
                    {id: 3, name: '西西', score: 99, age: 20, description: '好累啊'},
                    {id: 4, name: '泳儿', score: 99, age: 21},
                    {id: 5, name: '美美', score: 99, age: 22},
                    {id: 6, name: '阿宇', score: 99, age: 26},
                    {id: 7, name: '发发', score: 100, age:18},
                    {id: 8, name: '琳琳', score: 99, age: 16},
                    {id: 9, name: '西西', score: 99, age: 20},
                    {id: 10, name: '泳儿', score: 99, age: 21},
                    {id: 11, name: '美美', score: 99, age:18},
                    {id: 12, name: '阿宇', score: 99, age: 16}
                ],
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
        created() {

        },


    }
</script>

<style scoped lang="scss">


</style>