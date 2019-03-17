<template>
    <div class="lifa-table-wrapper">
        <table class="lifa-table" :class="{bordered,compact,striped}">
            <thead>
            <tr>
                <th>
                    <input type="checkbox" @change="onChangeItemAll($event)" ref="a" :checked="areAllItemChecked">
                </th>
                <th v-if="numberVisible">#</th>
                <th v-for="column in columns" :key="column.field">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in dataSource" :key="item.id">
                <th>
                    <input type="checkbox" @change="onChangeItem(item, index, $event)"
                           :checked="onChecked(item)" class="checkbox"
                    >
                </th>
                <td v-if="numberVisible">{{index+1}}</td>
                <template v-for="column in columns">
                    <!--显示dataSource中对应表头字段里的内容-->
                    <td :key="column.field">{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
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
            }
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

    }
</style>