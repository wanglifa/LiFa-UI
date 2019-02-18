<template>
  <div style="padding-top: 16px;">
    <h2>单个按钮用法</h2>
    <div class="demo-box">
      <div class="top">
        <lf-button>默认按钮</lf-button>
        <lf-button icon="settings">默认按钮</lf-button>
        <lf-button :loading="true">默认按钮</lf-button>
        <lf-button disabled>默认按钮</lf-button>
      </div>
      <lf-collaspe>
        <p slot="one">通过使用<code>lf-button</code>标签来使用按钮，可以通过给按钮添加<code>icon</code>属性来添加图标，这里提供了success/erroe/loading/right/settings/thumbs-up/down/download/left这些图标，你可以根据你的需要直接使用，另外你还可以给loading属性传一个布尔值，用来显示你的loading动画。最后你还可以跟按钮加一个<code>iconPosition</code>属性，来定义按钮内图标的位置，它接受'left'和'right'，默认是left。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'
  import Icon from '../../../src/icon.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-button': Button,
      'lf-icon': Icon,
      'lf-collaspe': Collaspe
    },
    data () {
      return {
        content:
`
<lf-button>默认按钮</lf-button>
<lf-button icon="settings">默认按钮</lf-button>
<lf-button :loading="true">默认按钮</lf-button>
<lf-button disabled>默认按钮</lf-button>
 `.replace(/^ {10}/gm, '').trim(),

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