---
title: Grid 网格布局
---
# 网格

<ClientOnly>
<grid-demo-1></grid-demo-1>
<grid-demo-2></grid-demo-2>
<grid-demo-3></grid-demo-3>
</ClientOnly>

## Attributes

默认在屏幕宽度为 min-width: 993px 的设备上表现

| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| gutter         | 栅格间的间隙，单位为 px      | String | Number |   ——  |   ——  |
| offset | 栅格左侧的间隔格数      | String | Number |  —— |    0 |
| span | 栅格占据的列数     |   String | Number |  —— |     12 |
| ipad | >=577px 响应式栅格数或者栅格属性对象    |   Object |  —— |   —— |
| narrow-pc | >=768px 响应式栅格数或者栅格属性对象    |   Object |  —— |   —— |
| pc | >=993px 响应式栅格数或者栅格属性对象    |   Object |  —— |   —— |
| wide-p | >=1201px 响应式栅格数或者栅格属性对象    |   Object |  —— |   —— |
