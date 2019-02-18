<template>
  <div style="padding-top: 16px;">
    <h2>设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <lf-button @click="onClickClose">上方弹出</lf-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
        通过点击触发一个<code>onClickClose</code>事件，调用<code>$toast</code>方法，里面接受两个参数，第一个参数是字符串，用于设置你弹出的消息；第二个参数是一个对象，它内部定义了一个<code>closeBtn</code>对象，里面的<code>text</code>就是你关闭按钮的文字内容，<code>callback</code>就是你点击关闭按钮后要做的。
    </p>
  </div>
</template>
<style>
  .wrapper {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import LfButton from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {LfButton},
    data () {
      return {
        content: `
          <style>
            .wrapper {
              z-index: 30;
            }
          </style>

          <div>
            <lf-button @click="onClickClose">上方弹出</lf-button>
          </div>

          methods: {
            onClickClose () {
              this.$toast('你知道我在等你吗？', {
                closeBtn: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickClose () {
        this.$toast('你知道我在等你吗？', {
          closeBtn: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      }
    },
  }
</script>