---
title: Tabs 标签
---
# 标签

<ClientOnly>
<tabs-demo-1></tabs-demo-1>
<tabs-demo-2></tabs-demo-2>
</ClientOnly>

## Attributes

#### lf-tabs

| 参数           | 说明                    |   类型  | 可选值  | 默认值  |
| :------------- |:------------------------|:-------|:-------|:-------|
| seleted        | 默认显示的标签页，可用.sync修饰符绑定，必填      | String |  —  |   —  |

#### lf-tabs-head

| 参数           | 说明                    |   类型  | 可选值  | 默认值  |
| :------------- |:------------------------|:-------|:-------|:-------|
| template       | 是否需要在 tabs-head 添加内容；如确定添加，则 slot 必须为 actions      | template |  —  |   —  |

#### lf-tabs-item/ lf-tabs-pane

| 参数           | 说明                    |   类型  | 可选值  | 默认值  |
| :------------- |:------------------------|:-------|:-------|:-------|
| name      | 标签页的名称与内容标识，唯一且必填      | String / Number |  —  |   —  |
| disabled      | 是否禁用此标签页     | Boolean |  —  |   false  |
