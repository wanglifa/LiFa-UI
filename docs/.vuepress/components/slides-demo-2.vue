<template>
  <div style="padding-top: 16px;">
    <h2>指示器hover触发</h2>
    <div class="demo-box">
      <div class="top">
<lf-slides :selected.sync="selected" trigger="hover" :auto-play="false">
  <lf-slides-item name="1">
    <div class="box">1</div>
  </lf-slides-item>
  <lf-slides-item name="2">
    <div class="box">2</div>
  </lf-slides-item>
  <lf-slides-item name="3">
    <div class="box">3</div>
  </lf-slides-item>
  <lf-slides-item name="4">
    <div class="box">4</div>
  </lf-slides-item>
</lf-slides>
      </div>
      <lf-collaspe>
        <p slot="one">通过给<code>lf-slides</code>设置一个<code>tigger="hover"</code>实现鼠标经过分页器切换轮播图。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfSlides from '../../../src/slides/slides.vue'
  import LfSlidesItem from '../../../src/slides/slides-item.vue'
  import Icon from '../../../src/icon.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-icon': Icon,
      'lf-collaspe': Collaspe,
      LfSlidesItem,
      LfSlides
    },
    data () {
      return {
        content:
`
<lf-slides :selected.sync="selected" trigger="hover" :auto-play="false">
  <lf-slides-item name="1">
    <div class="box">1</div>
  </lf-slides-item>
  <lf-slides-item name="2">
    <div class="box">2</div>
  </lf-slides-item>
  <lf-slides-item name="3">
    <div class="box">3</div>
  </lf-slides-item>
  <lf-slides-item name="4">
    <div class="box">4</div>
  </lf-slides-item>
</lf-slides>

<script>
export default{
    data(){
        return {
                       selected: '1'
        }
    }
}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        selected: '1'

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
   .box{
     width: 100%;
     height: 300px;
     background: gray;
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>