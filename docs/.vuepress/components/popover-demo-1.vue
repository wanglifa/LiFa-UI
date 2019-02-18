<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <div class="demo-box">
      <div class="top">
        <lf-popover>
          <lf-button>上方弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
        <lf-popover position="bottom">
          <lf-button>下方弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
        <lf-popover position="left">
          <lf-button>左边弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
        <lf-popover position="right">
          <lf-button>右边弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
      </div>
      <lf-collaspe>
        <p slot="one">
          popover组件使用的时候，因为对于弹出内容的处理是使用了一个具名插槽，所以我们必须要将弹出的内容写在一个<code>template</code>里然后给它一个<code>slot='content'</code> ，这里弹出内容显示的位置通过给<code>lf-popover</code>一个<code>positon</code>属性来设置。
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfButton from '../../../src/button/button'
  import LfPopover from '../../../src/popover'
  import LfCollaspe from './collspse-demo.vue'

  export default {
    components: {LfButton, LfPopover, LfCollaspe},
    data () {
      return {
        content: `
          <lf-popover>
            <lf-button>上方弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
          <lf-popover position="bottom">
            <lf-button>下方弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
          <lf-popover position="left">
            <lf-button>左边弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
          <lf-popover position="right">
            <lf-button>右边弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
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