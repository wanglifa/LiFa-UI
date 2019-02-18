<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

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

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
        如果想要鼠标经过就显示我们定义的内容，那么只需要给<code>lf-popover</code>一个<code>trigger</code>属性，给定一个<code>'hover'</code>即可。
    </p>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import GButton from '../../../src/button/button'
  import GPopover from '../../../src/popover'


  export default {
    components: {GButton, GPopover},
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
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>