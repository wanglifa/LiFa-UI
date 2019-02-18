<template>
  <div style="padding-top: 16px;">
    <h2>右侧添加按钮</h2>
    <div class="demo-box">
      <div class="top">
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
      </div>
      <lf-collaspe>
        <p slot="one">
          如果想要在顶部添加一个按钮，就需要引入一个<code>template</code>标签，然后给它一个<code>slot="actions"</code>。
          这里你也可以直接在tab栏顶部加一个图标，只需要在<code>lf-tabs-item</code>下添加一个<code>lf-icon</code>标签就可以，然后在这个标签上，通过<code>name</code>属性指定我们需要的图标，这里所有的图标在<a href="button.html">Button</a>组件中都有提到。
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
  import LfIcon from '../../../src/icon'
  import LfCollaspe from './collspse-demo.vue'
  export default {
    components: {
      LfTabs, LfTabsBody, LfTabsHead, LfTabsItem, LfTabsPane, LfButton, LfIcon,
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