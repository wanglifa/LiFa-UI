---
title: Layout 布局
---
# 布局

用于布局的容器组件，方便快速搭建页面的基本结构：

```<lf-layout>```: 外层容器，当子元素中包含 ```<lf-header>``` 或 ```<lf-footer>``` 时，全部子元素会垂直上下排列，否则会水平左右排列。
```<lf-header>```：顶栏容器。

```<lf-content>```: 主要区域容器。

```<lf-sider>```: 侧边栏容器。

```<lf-footer>```: 底栏容器。

::: tip 关于浏览器兼容性的提示
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，```<lf-layout>``` 的子元素只能是后四者，后四者的父元素也只能是 ```<lf-layout>```。
:::

<ClientOnly>
<layout-demo-1></layout-demo-1>
<layout-demo-2></layout-demo-2>
<layout-demo-3></layout-demo-3>
</ClientOnly>