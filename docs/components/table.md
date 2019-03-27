---
title: Table 表格
---

# Table 表格


<ClientOnly>
<table-demo-1></table-demo-1>
<table-demo-2></table-demo-2>
<table-demo-3></table-demo-3>
<table-demo-4></table-demo-4>
<table-demo-5></table-demo-5>
<table-demo-6></table-demo-6>
<table-demo-7></table-demo-7>
<table-demo-8></table-demo-8>
<table-demo-9></table-demo-9>
<table-demo-10></table-demo-10>
</ClientOnly>

## Attributes

#### lf-table
| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| columns        | 表头信息（需包含text和field）  |  Array |   —  |   —  |
| data-source | 表格主体数据（每一个数据必须包含一个唯一的id）  |  Array |  — | — |
| selected-item | 用来记录选中状态实现全选 |  Array | —  | [] |
| expend-field | 开启展开行，对应data-source里的展开行字段（description） |  String | —  | — |
| striped | 是否为斑马纹table | Boolean | true / false | false |
| number-visible | 是否显示索引（从1开始） | Boolean | true / false | false |
| bordered | 是否带边框 | Boolean | true / false | false |
| compact | 是否为紧凑型 | Boolean | true / false | false |
| order-by | 指定排序规则（true: 开启排序；'desc': 降序；'asc': 升序） | Object | — | {} |
| loading| 是否显示loading状态 | Boolean | true / false | — |
| height| 指定表格的高度，在数据多的情况下用来固定表头 | Number | — | — |
| checkable| 是否显示选择框 | Boolean | true / false | false |

## Methods

| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| changeOrder       | 自定义排序方法   |  Function|   —  |   —  |
