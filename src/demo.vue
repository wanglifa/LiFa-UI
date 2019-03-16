<template>
    <div>
        {{selectedItem}}
        <div style="margin: 28px">
            <lf-table :columns="columns" :data-source="dataSource"
                      bordered :selected-item.sync="selectedItem"
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
                    {text: '姓名', field: 'name'},
                    {text: '分数', field: 'score'}
                ],
                dataSource: [
                    {id: 1, name: '发发', score: 100},
                    {id: 2, name: '琳琳', score: 99},
                    {id: 3, name: '西西', score: 99},
                    {id: 4, name: '泳儿', score: 99},
                    {id: 5, name: '美美', score: 99},
                    {id: 6, name: '阿宇', score: 99}
                ]
            }
        },
        methods: {

        },
        created() {

        },

    }
</script>

<style scoped lang="scss">


</style>