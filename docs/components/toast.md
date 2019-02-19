---
title: Toast 信息提示框
---

# Toast

<ClientOnly>
<toast-demo-1></toast-demo-1>
<toast-demo-2></toast-demo-2>
<toast-demo-3></toast-demo-3>
</ClientOnly>

## Attributes


| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| message         | 消息提示的文本      | String / Template |   —  |   —  |
| closeButton | 是否设置关闭按钮，及关闭按钮的文本以及回调函数      | Object |  — |  — |
| enableHtml | 是否渲染 message 文本为 HTML     |   Boolean |  — |     false |
| autoClose | 是否自动关闭 Toast    |  Boolean / Number |  — |   5（5S 后自动关闭）|
| position	 | Toast 出现的位置   |   String | top / bottom / middle / right / left |  middle |
