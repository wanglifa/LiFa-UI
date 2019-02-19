---
title: Popover 弹出层
---

# 弹出层

<ClientOnly>
<popover-demo-1></popover-demo-1>
<popover-demo-2></popover-demo-2>
</ClientOnly>

## Attributes


| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| position         | popover 显示的位置      | String |   top / bottom / lef / right  |   top  |
| trigger | popover 触发的方式      | String |  click / hover |   click |
| template | popover 的内容，slot 必须为 content(```<template slot="content">```)     |   tempalte |  — |   — |
| slot-scope | 如果需要在 popover 内添加关闭 popover 的设置，则需要 slot-scope 引用 close 方法    |   Object |  — |   — |
