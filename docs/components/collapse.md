---
title: Collapse 折叠面板
---

# Collapse 折叠面板


<ClientOnly>
<collapse-demo-1></collapse-demo-1>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

## Attributes

#### lf-collapse
| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| single         | 是否同时只能展开一个面板      |  Boolean |   —  |  false  |
| selected | 一个由当前展开面板的 name 组成的数组。可以用 .sync 修饰符绑定。      |  Array | — |  — |

#### lf-collapse-item
| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| name        | 面板唯一标志符，必填     |  String|   —  |  —  |
| title| 面板标题     |  String | — |  — |

