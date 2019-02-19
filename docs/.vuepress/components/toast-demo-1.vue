<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <div class="demo-box">
      <div class="top">
        <div>
          <lf-button @click="$toast('点击弹出提示')">上方弹出</lf-button>
          <lf-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</lf-button>
          <lf-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</lf-button>
        </div>
      </div>
      <lf-collaspe>
        <p slot="one">
          实现 Toast 的原理是利用 toastPlugin 在 Vue.prototype 中添加一个 $toast 全局方法，并通过这个方法调用 Toast 组件。因此，需要先执行 Vue.use(toastPlugin)。
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>

  </div>
</template>
<style>
  .wrapper {
    z-index: 30 !important;
  }
</style>
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
            .wrapper {
              z-index: 30;
            }
          </style>
          <lf-button @click="$toast('点击弹出提示')">上方弹出</lf-button>
          <lf-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</lf-button>
          <lf-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</lf-button>
          <script>
            import { toastPlugin } from 'lifa-ui'
            Vue.use(plugin)

          <script>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style scoped lang="scss">
  * {
    box-sizing: border-box;
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