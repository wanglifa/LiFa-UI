<template>
    <div style="padding-top: 16px">
        <h2>组合按钮用法</h2>
        <p>
          <strong>预览</strong>
        </p>
        <g-button-group>
            <g-button icon="left">按钮1</g-button>
            <g-button>按钮2</g-button>
            <g-button icon="right" iconPosition="right">按钮3</g-button>
        </g-button-group>

        <p>
          <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <p>组合按钮需要通过一个<code>g-button-group</code>标签包裹<code>g-button</code>。</p>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from '../../../src/button/button-group'
    export default {
        components: {
            'g-button-group': ButtonGroup,
            'g-button': Button
        },
        data () {
          return {
            content: `
            <g-button-group>
                <g-button icon="left">按钮1</g-button>
                <g-button>按钮2</g-button>
                <g-button icon="right" iconPosition="right">按钮3</g-button>
            </g-button-group>
          `.replace(/^ {8}/gm, '').trim()
          }
        }
    }
</script>