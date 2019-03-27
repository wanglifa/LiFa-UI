<template>
  <div style="padding-top: 16px;">
    <h2>顶部导航</h2>
    <div class="demo-box">
      <div class="top">
<lf-nav :selected.sync="selected">
  <lf-nav-item name="home">
    <a>首页</a>
  </lf-nav-item>
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
        <p slot="one">导航菜单默认是水平模式，一级菜单直接在<code>lf-nav-item</code>里指定你的导航内容就可以，如果有链接可直接在里面添加a标签，二级菜单需要搭配<code>lf-sub-nav</code>来使用，二级菜单中的一级标题标题需通过 <code>template</code>标签指定一个<code>slot="title"</code>，然后里面的展示内容还是通过 <code>lf-nav-item</code>来使用，所有的都必须指定name。</p>
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
<lf-nav :selected.sync="selected" style="margin: 20px;">
  <lf-nav-item name="home">
    <a>首页</a>
  </lf-nav-item>
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