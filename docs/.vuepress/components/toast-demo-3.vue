<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
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
        通过给<code>$toast</code>的第二个参数设置一个<code>enableHtml: true</code>就可以支持html。
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
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enableHtml: true
                })
            }
        }
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickClose () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>