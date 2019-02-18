<template>
  <div style="padding-top: 16px;">
    <h2>上、左中、右中、下布局</h2>
    <div class="demo-box">
      <div class="top">
        <lf-layout style="color: white; overflow:hidden;">
          <lf-header style="height: 50px; background:lightskyblue;">
            header
          </lf-header>
          <lf-layout>
            <lf-sider style="height: 100px; background:#ddd; width:200px; color: black;">
              sider
            </lf-sider>
            <lf-content style="height: 100px; background:deepskyblue;">
              content
            </lf-content>
          </lf-layout>
          <lf-footer style="height: 50px; background:lightskyblue;">
            footer
          </lf-footer>
        </lf-layout>
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
  import LfLayout from '../../../src/layout/layout'
  import LfHeader from '../../../src/layout/header'
  import LfFooter from '../../../src/layout/footer'
  import LfContent from '../../../src/layout/content'
  import LfSider from '../../../src/layout/sider'
  import LfCollaspe from './collspse-demo.vue'

  export default {
    components: {LfLayout, LfHeader, LfFooter, LfContent, LfSider, LfCollaspe},
    data () {
      return {
        content: `
          <lf-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <lf-header style="height: 50px; background:lightskyblue;">
              header
            </lf-header>
            <lf-layout>
              <lf-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                sider
              </lf-sider>
              <lf-content style="height: 100px; background:deepskyblue;">
                content
              </lf-content>
            </lf-layout>
            <lf-footer style="height: 50px; background:lightskyblue;">
              footer
            </lf-footer>
          </lf-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .demo-box{
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    .top{
      padding: 24px;
    }
  }
</style>