<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <lf-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <lf-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </lf-sider>
      <lf-layout>
        <lf-header style="height: 50px; background:lightskyblue;">
          header
        </lf-header>
        <lf-content style="height: 100px; background:deepskyblue;">
          content
        </lf-content>
        <lf-footer style="height: 50px; background:lightskyblue;">
          footer
        </lf-footer>
      </lf-layout>
    </lf-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import LfLayout from '../../../src/layout/layout'
  import LfHeader from '../../../src/layout/header'
  import LfFooter from '../../../src/layout/footer'
  import LfContent from '../../../src/layout/content'
  import LfSider from '../../../src/layout/sider'

  export default {
    components: {LfLayout, LfHeader, LfFooter, LfContent, LfSider},
    data () {
      return {
        content: `
          <lf-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <lf-sider style=" background:#ddd; width:200px; color: black;">
              sider
            </lf-sider>
            <lf-layout>
              <lf-header style="height: 50px; background:lightskyblue;">
                header
              </lf-header>
              <lf-content style="height: 100px; background:deepskyblue;">
                content
              </lf-content>
              <lf-footer style="height: 50px; background:lightskyblue;">
                footer
              </lf-footer>
            </lf-layout>
          </lf-layout>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>