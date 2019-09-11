<template>
  <div style="padding-top: 16px;">
    <h2>基础用法</h2>
    <div class="demo-box">
      <div class="top">
        <lf-sticky :distance="100">
          <div style="border: 1px solid red;">
            <img src="https://i.loli.net/2019/09/10/bzjZGRYPhTk3EWr.jpg" alt="">
          </div>
        </lf-sticky>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
        <p>哈哈哈哈哈哈哈</p>
      </div>
      <lf-collaspe>
        <p slot="one">通过使用<code>lf-sticky</code>标签，接受一个<code>distance</code>属性，用来设置固定位置时距顶部的距离。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import Sticky from '../../../src/sticky.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-sticky': Sticky,
      'lf-collaspe': Collaspe
    },
    data () {
      return {
        content:
`
<lf-sticky :distance="100">
  <div style="border: 1px solid red;">
    <img src="https://i.loli.net/2019/09/10/bzjZGRYPhTk3EWr.jpg" alt="">
  </div>
</lf-sticky>
<p>文本内容....</p>
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