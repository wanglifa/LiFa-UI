<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <div class="demo-box">
      <div class="top">
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
      </div>
      <lf-collaspe>
        <p slot="one">
          tabs组件使用的时候必须在<code>lf-tabs-item</code>和<code>lf-tabs-pane</code>中都传入一个name属性，并且要一一对应，通过给<code>lf-tabs</code>添加一个<code>selected</code>可以实现默认选中。
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfTabs from '../../../src/tabs/tabs'
  import LfTabsBody from '../../../src/tabs/tabs-body'
  import LfTabsHead from '../../../src/tabs/tabs-head'
  import LfTabsItem from '../../../src/tabs/tabs-item'
  import LfTabsPane from '../../../src/tabs/tabs-pane'
  import LfButton from '../../../src/button/button'
  import LfCollaspe from './collspse-demo.vue'
  export default {
    components: {
      LfTabs, LfTabsBody, LfTabsHead, LfTabsItem, LfTabsPane, LfButton,
      LfCollaspe
    },
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
<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .demo-box{
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    .top{
      padding: 24px;
    }
  }
</style>