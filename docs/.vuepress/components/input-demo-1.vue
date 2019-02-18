<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <lf-input value="中文"></lf-input>
    <lf-input value="中文" disabled></lf-input>
    <lf-input value="中文" readonly></lf-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GInput from '../../../src/input'

  export default {
    components: {GInput},
    data () {
      return {
        selected: '1',
        content: `
          <lf-input></lf-input>
          <lf-input value="中文"></lf-input>
          <lf-input value="中文" disabled></lf-input>
          <lf-input value="中文" readonly></lf-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>