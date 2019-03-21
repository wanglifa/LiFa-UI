<template>
    <div class="lifa-table-wrapper" ref="wrapper">
        <div :style="{height: `${height}px`,overflow:'auto'}" ref="tableContent">
            <table class="lifa-table" :class="{bordered,compact,striped}" ref="table">
                <thead>
                <tr>
                    <th :style="{width: '50px'}">
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
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in dataSource" :key="item.id">
                    <th :style="{width: '50px'}">
                        <input type="checkbox" @change="onChangeItem(item, index, $event)"
                               :checked="onChecked(item)" class="checkbox"
                        >
                    </th>
                    <td v-if="numberVisible" :style="{width: '50px'}">{{index+1}}</td>
                    <template v-for="column in columns">
                        <!--显示dataSource中对应表头字段里的内容-->
                        <td :key="column.field" :style="{width: `${column.width}px`}">{{item[column.field]}}</td>
                    </template>
                </tr>
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
            }
        },
        mounted() {
            let oldTable = this.$refs.table
            let newTable = oldTable.cloneNode()
            let {height} = oldTable.children[0].getBoundingClientRect()
            newTable.appendChild(oldTable.children[0])
            this.$refs.tableContent.style.marginTop = height + 'px'
            this.$refs.wrapper.style.height = this.height - height + 'px'
            newTable.classList.add('lifa-table-copy')
            this.$refs.wrapper.appendChild(newTable)
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
            }
        },
        components: {
            LfIcon
        },
        methods: {
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
    }

</style>