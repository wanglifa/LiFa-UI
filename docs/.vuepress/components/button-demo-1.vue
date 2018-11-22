<template>
  <div style="padding-top: 16px;">
    <h2>单个按钮用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
        通过使用<code>g-button</code>标签来使用按钮，可以通过给按钮添加<code>icon</code>属性来添加图标，这里提供了success/erroe/loading/right/settings/thumbs-up/down/download/left这些图标，你可以根据你的需要直接使用，另外你还可以给loading属性传一个布尔值，用来显示你的loading动画。最后你还可以跟按钮加一个<code>iconPosition</code>属性，来定义按钮内图标的位置，它接受'left'和'right'，默认是left。
    </p>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'

  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style scoped>
   
</style>