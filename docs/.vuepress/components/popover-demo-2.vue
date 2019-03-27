<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <div class="demo-box">
      <div class="top">
        <lf-popover trigger="hover">
          <lf-button>上方弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
        <lf-popover position="bottom" trigger="hover">
          <lf-button>下方弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
        <lf-popover position="left" trigger="hover">
          <lf-button>左边弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
        <lf-popover position="right" trigger="hover">
          <lf-button>右边弹出</lf-button>
          <template slot="content">
            弹出内容
          </template>
        </lf-popover>
      </div>
      <lf-collaspe>
        <p slot="one">
          如果想要鼠标经过就显示我们定义的内容，那么只需要给<code>lf-popover</code>一个<code>trigger</code>属性，给定一个<code>'hover'</code>即可。
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
          <lf-popover trigger="hover">
            <lf-button>上方弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
          <lf-popover position="bottom" trigger="hover">
            <lf-button>下方弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
          <lf-popover position="left" trigger="hover">
            <lf-button>左边弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
          <lf-popover position="right" trigger="hover">
            <lf-button>右边弹出</lf-button>
            <template slot="content">
              弹出内容
            </template>
          </lf-popover>
      `.replace(/^ {8}/gm, '').trim()
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