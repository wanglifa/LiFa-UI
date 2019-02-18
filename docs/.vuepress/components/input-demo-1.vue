<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <div class="demo-box">
      <div class="top">
        <lf-input value="默认样式"></lf-input>
        <lf-input value="不可点击" disabled></lf-input>
        <lf-input value="只读样式" readonly></lf-input>
        <lf-input value="我不爱你" error="不可以说你不爱我"></lf-input>
      </div>
      <lf-collaspe>
        <p slot="one">
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>

  </div>
</template>
<script>
  import LfInput from '../../../src/input'
  import LfCollaspe from './collspse-demo.vue'
  export default {
    components: {LfInput, LfCollaspe},
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
<style scoped lang="scss">
  .demo-box{
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    .top{
      padding: 24px;
      .wrapper{
        &:last-child{
          margin-top: 14px;
        }
      }
    }
  }
</style>