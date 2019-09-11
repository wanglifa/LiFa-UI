<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <div class="demo-box">
      <div class="top">
        <lf-date-picker :value.sync="value" @input="value = $event"></lf-date-picker>
      </div>
      <lf-collaspe>
        <p slot="one">通过使用<code>lf-date-picker</code>标签，给它动态绑定一个<code>value</code>，监听一个<code>input</code>事件，把你输入的新的日期值传给你的<code>value</code>。我们可以使用它修改当月的某一天，点击左右单箭头进行月份加减，双箭头进行年份加减切换，直接点击中间的月份显示可同时修改年和月。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import DatePicker from '../../../src/date-picker/date-picker.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-date-picker': DatePicker,
      'lf-collaspe': Collaspe
    },
    data () {
      return {
        content:
`
<lf-date-picker :value.sync="value" @input="value = $event"></lf-date-picker>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        value: new Date()

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