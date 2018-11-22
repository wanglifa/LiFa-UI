<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
        tabs组件使用的时候必须在<code>g-tabs-item</code>和<code>g-tabs-pane</code>中都传入一个name属性，并且要一一对应，通过给<code>g-tabs</code>添加一个<code>selected</code>可以实现默认选中。
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
  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane, GButton},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>