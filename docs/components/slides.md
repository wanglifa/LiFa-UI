---
title: Slides 走马灯
---

# Slides 走马灯


<ClientOnly>
<slides-demo-1></slides-demo-1>
<slides-demo-2></slides-demo-2>
</ClientOnly>

## Attributes

#### lf-slides
| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| selected         | 默认显示第几张      |  String |   —  |   —  |
| autoPlay | 是否自动切换  |  Boolean |  true / false |  true |
| autoPlayDelay | 自动切换的时间间隔，单位为毫秒   |   Number |  — |  3000 |
| trigger | 指示器的触发方式   |  String |  click / hover |  click |

#### lf-slides-item

| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| name        | 幻灯片的名字，必填      |  String |   —  |   —  |
