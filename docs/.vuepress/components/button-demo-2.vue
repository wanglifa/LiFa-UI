<template>
    <div style="padding-top: 16px">
        <h2>组合按钮用法</h2>
        <div class="demo-box">
            <div class="top">
                <lf-button-group>
                    <lf-button icon="left">按钮1</lf-button>
                    <lf-button>按钮2</lf-button>
                    <lf-button icon="right" iconPosition="right">按钮3</lf-button>
                </lf-button-group>
            </div>
            <lf-collaspe>
                <p slot="one">
                    组合按钮需要通过一个<code>lf-button-group</code>标签包裹<code>lf-button</code>。
                </p>
                <code slot="two">{{content}}</code>
            </lf-collaspe>
        </div>

    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from '../../../src/button/button-group'
    import Collaspe from './collspse-demo.vue'
    export default {
        components: {
            'lf-button-group': ButtonGroup,
            'lf-button': Button,
            'lf-collaspe': Collaspe
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
<style scoped lang="scss">
    .demo-box{
        border: solid 1px #ebebeb;
        border-radius: 3px;
        transition: .2s;
        .top{
            padding: 24px;
        }
    }
</style>