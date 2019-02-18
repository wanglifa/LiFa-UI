<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <lf-tabs :selected="selected">
      <lf-tabs-head>
        <lf-tabs-item name="1">1</lf-tabs-item>
        <lf-tabs-item name="2">2</lf-tabs-item>
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
        tabs组件使用的时候必须在<code>lf-tabs-item</code>和<code>lf-tabs-pane</code>中都传入一个name属性，并且要一一对应，通过给<code>lf-tabs</code>添加一个<code>selected</code>可以实现默认选中。
    </p>
  </div>
</template>
<script>
  import LfTabs from '../../../src/tabs/tabs'
  import LfTabsBody from '../../../src/tabs/tabs-body'
  import LfTabsHead from '../../../src/tabs/tabs-head'
  import LfTabsItem from '../../../src/tabs/tabs-item'
  import LfTabsPane from '../../../src/tabs/tabs-pane'
  import LfButton from '../../../src/button/button'
  export default {
    components: {LfTabs, LfTabsBody, LfTabsHead, LfTabsItem, LfTabsPane, LfButton},
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