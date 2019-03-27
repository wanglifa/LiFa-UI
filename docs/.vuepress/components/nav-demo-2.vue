<template>
  <div style="padding-top: 16px;">
    <h2>侧栏导航</h2>
    <div class="demo-box">
      <div class="top">
<lf-nav :selected.sync="selected" vertical>
  <lf-nav-item name="home">首页</lf-nav-item>
  <lf-sub-nav name="about">
    <template slot="title">关于</template>
    <lf-nav-item name="culture">企业文化</lf-nav-item>
    <lf-nav-item name="developers">开发团队</lf-nav-item>
    <lf-sub-nav name="contact">
      <template slot="title">联系方式</template>
      <lf-nav-item name="wechat">微信</lf-nav-item>
      <lf-nav-item name="qq">QQ</lf-nav-item>
      <lf-sub-nav name="phone">
        <template slot="title">手机</template>
        <lf-nav-item name="cm">移动</lf-nav-item>
        <lf-nav-item name="cu">联通</lf-nav-item>
        <lf-nav-item name="cn">电信</lf-nav-item>
      </lf-sub-nav>
    </lf-sub-nav>
  </lf-sub-nav>
  <lf-nav-item name="hire">招聘</lf-nav-item>
</lf-nav>
      </div>
      <lf-collaspe>
        <p slot="one">如需指定为侧栏导航模式，只需在<code>lf-nav</code>中添加一个<code>vertical</code>属性。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfNav from '../../../src/nav/nav.vue'
  import LfNavItem from '../../../src/nav/nav-item.vue'
  import LfSubNav from '../../../src/nav/sub-nav.vue'
  import Icon from '../../../src/icon.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-icon': Icon,
      'lf-collaspe': Collaspe,
      LfSubNav,
      LfNav,
      LfNavItem
    },
    data () {
      return {
        content:
`
<lf-nav :selected.sync="selected" vertical>
  <lf-nav-item name="home">首页</lf-nav-item>
  <lf-sub-nav name="about">
    <template slot="title">关于</template>
    <lf-nav-item name="culture">企业文化</lf-nav-item>
    <lf-nav-item name="developers">开发团队</lf-nav-item>
    <lf-sub-nav name="contact">
      <template slot="title">联系方式</template>
      <lf-nav-item name="wechat">微信</lf-nav-item>
      <lf-nav-item name="qq">QQ</lf-nav-item>
      <lf-sub-nav name="phone">
        <template slot="title">手机</template>
        <lf-nav-item name="cm">移动</lf-nav-item>
        <lf-nav-item name="cu">联通</lf-nav-item>
        <lf-nav-item name="cn">电信</lf-nav-item>
      </lf-sub-nav>
    </lf-sub-nav>
  </lf-sub-nav>
  <lf-nav-item name="hire">招聘</lf-nav-item>
</lf-nav>

<script>
export default{
    data(){
        return {
                       selected: 'home'
        }
    }
}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        selected: 'home'

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