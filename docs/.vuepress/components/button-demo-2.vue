<template>
    <div style="padding-top: 16px">
        <h2>组合按钮用法</h2>
        <p>
          <strong>预览</strong>
        </p>
        <lf-button-group>
            <lf-button icon="left">按钮1</lf-button>
            <lf-button>按钮2</lf-button>
            <lf-button icon="right" iconPosition="right">按钮3</lf-button>
        </lf-button-group>

        <p>
          <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <p>组合按钮需要通过一个<code>lf-button-group</code>标签包裹<code>lf-button</code>。</p>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from '../../../src/button/button-group'
    export default {
        components: {
            'lf-button-group': ButtonGroup,
            'lf-button': Button
        },
        data () {
          return {
            content: `
            <lf-button-group>
                <lf-button icon="left">按钮1</lf-button>
                <lf-button>按钮2</lf-button>
                <lf-button icon="right" iconPosition="right">按钮3</lf-button>
            </lf-button-group>
          `.replace(/^ {8}/gm, '').trim()
          }
        }
    }
</script>