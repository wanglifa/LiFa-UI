<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <lf-button @click="$toast('点击弹出提示')">上方弹出</lf-button>
      <lf-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</lf-button>
      <lf-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</lf-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
          <lf-button @click="$toast('点击弹出提示')">上方弹出</lf-button>
          <lf-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</lf-button>
          <lf-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</lf-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>