<template>
  <div style="justify-content: center;display: flex">
    <lf-table :data-source="dataSource"
              bordered :selected-item.sync="selectedItem" :height="400"
              expend-field="description" checkable>
      <lf-table-column text="姓名" field="name" :width="100">
        <template slot-scope="scope">
          <a href="#">{{scope.value}}</a>
        </template>
      </lf-table-column>
      <lf-table-column text="分数" field="score"></lf-table-column>
      <template slot-scope="xxx">
        <lf-button @click="edit(xxx.item.id)">编辑</lf-button>
        <lf-button @click="view(xxx.item.id)">查看</lf-button>
      </template>
    </lf-table>
  </div>
</template>

<script>
    import LfTable from './table'
    import LfTableColumn from './table-column'

    export default {
        name: "demo",
        components: {
            LfTable,
            LfTableColumn
        },
        data() {
            return {
                dataSource: [
                    {id: 1, name: '发发', score: 100, age: 18, description: '你最帅，将来一定会成为一个了不起的演员'},
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
        },
        methods: {},
        watch: {
            error() {
                if (this.error !== '') {
                    setTimeout(() => {
                        this.error = ''
                    }, 2000)
                }
            }
        },
        created() {

        },


    }
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }

</style>