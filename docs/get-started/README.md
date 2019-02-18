---
title: 快速上手
---

# 快速上手

本节将介绍如何在项目中使用 LiFa-UI

## 引入LiFa-UI

你可以引入整个 LiFa-UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 LiFa-UI。


### 完整引入

在main.js中写入以下内容：

```javascript
mport Vue from 'vue';
import LiFaUI from 'lifa-ui';
import App from './App.vue';

Vue.use(LiFaUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入
如果你只希望引入部分组件，比如 Button 和 Input，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Input } from 'lifa-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Input);


new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 全局配置
特别提醒
在使用 LiFaUI 时，您需要使用 border-box 盒模型，否则会影响样式。CSS 代码示例：
```css
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```
至此，一个基于 Vue 和 LiFaUI 的开发环境已经搭建完毕，现在就可以编写代码了。 🎉 🎉

各个组件的使用方法请参阅它们各自的文档。