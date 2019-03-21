<template>
    <div class="lifa-table-wrapper" ref="wrapper">
        <div :style="{height: `${height}px`,overflow:'auto'}" ref="tableContent">
            <table class="lifa-table" :class="{bordered,compact,striped}" ref="table">
                <thead>
                <tr>
                    <th :style="{width: '50px'}" class="lifa-table-center" v-if="expendField"></th>
                    <th :style="{width: '50px'}" class="lifa-table-center" v-if="checkable">
                        <input type="checkbox" @change="onChangeItemAll($event)" ref="a" :checked="areAllItemChecked">
                    </th>
                    <th v-if="numberVisible" :style="{width: '50px'}">#</th>
                    <th v-for="column in columns" :key="column.field" :style="{width: `${column.width}px`}">
                        <div class="lifa-table-header">
                            {{column.text}}
                            <!--如果对应的key在orderBy这个对象里，就显示-->
                            <span class="lifa-table-sorter" v-if="column.field in orderBy"
                                  @click="changeOrderBy(column.field)">
                            <lf-icon name="asc" :class="{active:orderBy[column.field] === 'asc'}"></lf-icon>
                            <lf-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></lf-icon>
                        </span>
                        </div>
                    </th>
                    <th v-if="$scopedSlots.default" ref="actionsHeader"></th>
                    <th v-if="$scopedSlots.default" style="width: 17px"></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item,index) in dataSource">
                    <tr :key="item.id">
                        <td :style="{width: '50px'}" @click="expendItem(item.id)"
                            class="lifa-table-center" :class="{expend: expendVisible(item.id)}"
                            v-if="expendField"
                        >
                            <lf-icon name="right"></lf-icon>
                        </td>
                        <td :style="{width: '50px'}" class="lifa-table-center" v-if="checkable">
                            <input type="checkbox" @change="onChangeItem(item, index, $event)"
                                   :checked="onChecked(item)" class="checkbox"
                            >
                        </td>
                        <td v-if="numberVisible" :style="{width: '50px'}">{{index+1}}</td>
                        <template v-for="column in columns">
                            <!--显示dataSource中对应表头字段里的内容-->
                            <td :key="column.field" :style="{width: `${column.width}px`}">{{item[column.field]}}</td>
                        </template>
                        <td v-if="$scopedSlots.default">
                            <div ref="slotWrapper" style="display: inline-block">
                                <slot :item="item"></slot>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="expendVisible(item.id)">
                        <td :key="`${item.id}-1`" :colspan="columns.length+ expendedCellColSpan">
                            {{item[expendField] || '空'}}
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
        <div class="lifa-table-loading" v-if="loading">
            <lf-icon name="loading"></lf-icon>
        </div>
    </div>
</template>

<script>
    import LfIcon from './icon.vue'

    export default {
        name: "LiFaTable",
        data(){
          return {
              expendIds: []
          }
        },
        props: {
            columns: {
                type: Array,
                required: true
            },
            dataSource: {
                type: Array,
                required: true
            },
            selectedItem: {
                type: Array,
                default: () => []
            },
            expendField: {
               type: String
            },
            striped: {
                type: Boolean,
                default: true
            },
            //是否显示索引
            numberVisible: {
                type: Boolean,
                default: false
            },
            //是否带边框
            bordered: {
                type: Boolean,
                default: false
            },
            //是否是紧凑型
            compact: {
                type: Boolean,
                default: false
            },
            //通过什么排序
            orderBy: {
                type: Object,
                default: () => ({})
            },
            loading: {
                type: Boolean
            },
            height: {
                type: Number,
            },
            //是否显示选择框
            checkable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            let oldTable = this.$refs.table
            let newTable = oldTable.cloneNode()
            let {height} = oldTable.children[0].getBoundingClientRect()
            newTable.appendChild(oldTable.children[0])
            this.$refs.tableContent.style.marginTop = height + 'px'
            this.$refs.wrapper.children[0].style.height = this.height - height + 'px'
            newTable.classList.add('lifa-table-copy')
            this.$refs.wrapper.appendChild(newTable)
            this.fixButtonCol()

        },
        computed: {
            areAllItemChecked() {
                const a = this.dataSource.map(n => n.id).sort()
                const b = this.selectedItem.map(n => n.id).sort()
                let equal = false
                if (a.length === b.length) {
                    for (let i = 0; i < a.length; i++) {
                        if (a[i] !== b[i]) {
                            equal = false
                            break
                        } else {
                            equal = true
                        }
                    }
                }
                return equal
            },
            expendedCellColSpan(){
                let result = 0
                if(this.checkable){
                    result += 1
                }
                if(this.expendField){
                    result += 1
                }
                return result
            }
        },
        components: {
            LfIcon
        },
        methods: {
            fixButtonCol(){
                let div = this.$refs.slotWrapper
                if(div){
                    let {width} = div[0].getBoundingClientRect()
                    let parent = div[0].parentNode
                    let styles = getComputedStyle(parent)
                    let paddingLeft = styles.getPropertyValue('padding-left')
                    let paddingRight = styles.getPropertyValue('padding-right')
                    let paddingTop = styles.getPropertyValue('padding-top')
                    let paddingBottom = styles.getPropertyValue('padding-bottom')
                    let width2  = parseInt(width)+parseInt(paddingLeft)+parseInt(paddingRight)+parseInt(paddingTop)+parseInt(paddingBottom) + 'px'
                    this.$refs.actionsHeader.style.width = width2
                    div.map(node=>{
                        node.parentNode.style.width = width2
                    })
                }
            },
            expendItem(id){
                if(this.expendIds.indexOf(id) >= 0){
                    this.expendIds.splice(this.expendIds.indexOf(id),1)
                }else{
                    this.expendIds.push(id)
                }
            },
            expendVisible(id){
                return this.expendIds.indexOf(id) >= 0
            },
            onChangeItem(item, index, e) {
                let copy = JSON.parse(JSON.stringify(this.selectedItem))
                if (e.target.checked) {
                    copy.push(item)
                } else {
                    //取消选中状态：点击当前的checkbox保留数组中id不等于当前id的项
                    copy = copy.filter(i => i.id !== item.id)
                }
                this.$emit('update:selectedItem', copy)
            },
            onChangeItemAll(e) {
                if (e.target.checked) {
                    this.$emit('update:selectedItem', this.dataSource)
                } else {
                    this.$emit('update:selectedItem', [])
                }
            },
            onChecked(item) {
                return this.selectedItem.filter(n => n.id === item.id).length > 0 ? true : false
            },
            changeOrderBy(key) {
                const copy = JSON.parse(JSON.stringify(this.orderBy))
                if (copy[key] === 'asc') {
                    copy[key] = 'desc'
                } else if (copy[key] === 'desc') {
                    copy[key] = true
                } else {
                    copy[key] = 'asc'
                }
                this.$emit('update:orderBy', copy)
            }
        },
        watch: {
            selectedItem() {
                if (this.selectedItem.length === this.dataSource.length) {
                    this.$refs.a.indeterminate = false
                    this.$refs.a.checked = true
                } else if (this.selectedItem.length === 0) {
                    this.$refs.a.indeterminate = false
                    this.$refs.a.checked = false
                } else {
                    this.$refs.a.indeterminate = true
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';
    .lifa-table {
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid $gray;
        width: 100%;

        &.bordered {
            border: 1px solid $gray;

            td, th {
                border: 1px solid $gray;
                box-sizing: border-box;
            }
        }

        &.compact {
            td, th {
                padding: 4px;
            }
        }

        &.striped {
            tbody {
                > tr {
                    &:nth-child(odd) {
                        background: white;
                    }

                    &:nth-child(even) {
                        background: #fafafa;
                    }
                }
            }
        }

        .checkbox {
            background: #fff;
        }

        th, td {
            border-bottom: 1px solid $gray;
            text-align: left;
            padding: 8px;
        }

        th {
            color: #909399;
        }

        td {
            color: #606266;
        }

        &-sorter {
            display: inline-flex;
            flex-direction: column;
            cursor: pointer;

            svg {
                width: 10px;
                height: 10px;
                fill: $gray;

                &:first-child {
                    position: relative;
                    bottom: -1px;
                }

                &:last-child {
                    position: relative;
                    top: -1px;
                }

                &.active {
                    fill: $blue;
                }
            }
        }

        &-header {
            display: flex;
            align-items: center;
        }

        &-loading {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, .8);

            svg {
                @include spin;
                width: 50px;
                height: 50px;
            }
        }

        &-wrapper {
            position: relative;
            overflow: hidden;
            border: 1px solid #eee;
        }

        &-copy {
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
        }
        &-gutter{
            width: 17px;
            box-sizing: border-box;
        }
        & &-center{
            text-align: center;
            .lf-icon{
                fill: #666;
                width: 0.6em;
                height: 0.6em;
                cursor: pointer;
            }
            &.expend{
                .lf-icon{
                    transform: rotate(90deg);
                    transition: all .3s linear;
                }
            }
        }
    }

</style>