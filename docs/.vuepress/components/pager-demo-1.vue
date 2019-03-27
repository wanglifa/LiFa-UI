<template>
  <div style="padding-top: 16px;">
    <h2>基础样式</h2>
    <div class="demo-box">
      <div class="top">
        <lf-pager :total-page="20" :current-page.sync="currentPage"></lf-pager>
      </div>
      <lf-collaspe>
        <p slot="one">通过<code>lf-pager</code>标签你可以使用我们的分页组件，其中你必须传入一个当前显示的页码和总共显示多少页。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfPager from '../../../src/pager.vue'
  import Icon from '../../../src/icon.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-icon': Icon,
      'lf-collaspe': Collaspe,
      LfPager
    },
    data () {
      return {
        content:
`
<lf-pager :total-page="20" :current-page.sync="currentPage">

</lf-pager>

<script>
   export default{
       data(){
                   return {
                       currentPage: 2
                   }
       }
   }
<script>
 `.replace(/^ {10}/gm, '').trim(),
        currentPage: 2

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