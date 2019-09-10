<template>
  <div style="padding-top: 16px;">
    <h2>基础用法</h2>
    <div class="demo-box">
      <div class="top">
        <lf-scroll height="240px">
          <p>雨丝在石板路上打出了水花</p>
          <p>叶尖也挂着似要流下的泪啊</p>
          <p>斑驳的脚印 是生活的画</p>
          <p>双眸无法抹去 失意的疲乏</p>
          <p>思绪总 要飘去 看看世界之大</p>
          <p>却又被 惧和怕 捎了信寄回家</p>
          <p>海浪风卷着细沙打湿了脸颊</p>
          <p>黎明像是不舍夜温的孩子啊</p>
          <p>日出和日落 谱人生的变化</p>
          <p>梦想和时光 无法全部都留下</p>
          <p>他匆匆 行囊里 背着很多问话</p>
          <p>也路过风 拥过雨 依旧找不到回答</p>
          <p>虚无的 繁华里 有谁在等你吗</p>
          <p>回头看 是孤独 留下的痕迹啊</p>
          <p>转过身 远方还 有很多梦追啊</p>
        </lf-scroll>
      </div>
      <lf-collaspe>
        <p slot="one">通过使用<code>lf-scroll</code>标签，然后通过<code>height</code>设置它的高度来实现滚动条功能，支持滚轮滚动和鼠标拖动</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import Scroll from '../../../src/scroll.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-scroll': Scroll,
      'lf-collaspe': Collaspe
    },
    data () {
      return {
        content:
`
<lf-scroll height="240px">
  内容
</lf-scroll>
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
       p {
         margin: 0;
         padding: 8px 0;
       }
     }
   }
</style>