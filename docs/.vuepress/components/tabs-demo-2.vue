<template>
  <div style="padding-top: 16px;">
    <h2>右侧添加按钮</h2>
    <p>
      <strong>预览</strong>
    </p>
    <lf-tabs :selected="selected">
      <lf-tabs-head>
        <lf-tabs-item name="1"><lf-icon name="settings"></lf-icon>1</lf-tabs-item>
        <lf-tabs-item name="2">2</lf-tabs-item>
        <template slot="actions">
            <lf-button>按钮</lf-button>
        </template>
      </lf-tabs-head>
      <lf-tabs-body>
        <lf-tabs-pane name="1">content 1</lf-tabs-pane>
        <lf-tabs-pane name="2">content 2</lf-tabs-pane>
      </lf-tabs-body>
    </lf-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
        如果想要在顶部添加一个按钮，就需要引入一个<code>template</code>标签，然后给它一个<code>slot="actions"</code>。
        这里你也可以直接在tab栏顶部加一个图标，只需要在<code>lf-tabs-item</code>下添加一个<code>lf-icon</code>标签就可以，然后在这个标签上，通过<code>name</code>属性指定我们需要的图标，这里所有的图标在<a href="button.html">Button</a>组件中都有提到。
    </p>
  </div>
</template>
<script>
  import GTabs from '../../../src/tabs/tabs'
  import GTabsBody from '../../../src/tabs/tabs-body'
  import GTabsHead from '../../../src/tabs/tabs-head'
  import GTabsItem from '../../../src/tabs/tabs-item'
  import GTabsPane from '../../../src/tabs/tabs-pane'
  import GButton from '../../../src/button/button'
  import GIcon from '../../../src/icon'
  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane, GButton, GIcon},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

          <lf-tabs :selected="selected">
            <lf-tabs-head>
              <lf-tabs-item name="1">1</lf-tabs-item>
              <lf-tabs-item name="2">2</lf-tabs-item>
              <template slot="actions">
                <lf-button>按钮</lf-button>
              </template>
            </lf-tabs-head>
            <lf-tabs-body>
              <lf-tabs-pane name="1">content 1</lf-tabs-pane>
              <lf-tabs-pane name="2">content 2</lf-tabs-pane>
            </lf-tabs-body>
          </lf-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>