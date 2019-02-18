<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <div class="demo-box">
      <div class="top">
        <lf-button @click="onClickClose">上方弹出</lf-button>
      </div>
      <lf-collaspe>
        <p slot="one">
          通过给<code>$toast</code>的第二个参数设置一个<code>enableHtml: true</code>就可以支持html。
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import plugin from '../../../src/plugin'
  import LfButton from '../../../src/button/button'
  import Vue from 'vue'
  import LfCollaspe from './collspse-demo.vue'

  Vue.use(plugin)

  export default {
    components: {LfButton, LfCollaspe},
    data () {
      return {
        content: `
<style>

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
<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .wrapper {
    z-index: 30 !important;
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
