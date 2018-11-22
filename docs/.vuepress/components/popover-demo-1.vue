<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
       popover组件使用的时候，因为对于弹出内容的处理是使用了一个具名插槽，所以我们必须要将弹出的内容写在一个<code>template</code>里然后给它一个<code>slot='content'</code> ，这里弹出内容显示的位置通过给<code>g-popover</code>一个<code>positon</code>属性来设置。
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
          <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
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