<template>
  <div style="padding-top: 16px;">
    <h2>双向绑定</h2>
    <div class="demo-box">
      <div class="top">
        <lf-input v-model="value"></lf-input>
        <div>
          value: {{value}}
        </div>
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
  import LfIcon from  '../../../src/icon.vue'
  export default {
    components: {LfInput, LfCollaspe, LfIcon},
    data () {
      return {
        value: '1',
        content: `
          data:{
            value: '1'
          }

          <lf-input v-model="value"></lf-input>
          <div>
            value: {{value}}
          </div>
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