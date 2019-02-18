<template>
  <div style="padding-top: 16px;">
    <h2>设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <lf-row class="demoRow" gutter="10">
      <lf-col span="8">
        <div class="demoCol">8</div>
      </lf-col>
      <lf-col span="8">
        <div class="demoCol">8</div>
      </lf-col>
      <lf-col span="8">
        <div class="demoCol">8</div>
      </lf-col>
    </lf-row>
    <lf-row class="demoRow" gutter="10">
      <lf-col span="6">
        <div class="demoCol">6</div>
      </lf-col>
      <lf-col span="6">
        <div class="demoCol">6</div>
      </lf-col>
      <lf-col span="6">
        <div class="demoCol">6</div>
      </lf-col>
      <lf-col span="6">
        <div class="demoCol">6</div>
      </lf-col>
    </lf-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
        通过给<code>lf-row</code>标签添加<code>gutter</code>属性来设置<code>lf-col</code>之间的间隔。
    </p>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import LfRow from '../../../src/grid/row'
  import LfCol from '../../../src/grid/col'

  export default {
    components: {LfRow, LfCol},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <lf-row class="demoRow" gutter="10">
            <lf-col span="8">
              <div class="demoCol">8</div>
            </lf-col>
            <lf-col span="8">
              <div class="demoCol">8</div>
            </lf-col>
            <lf-col span="8">
              <div class="demoCol">8</div>
            </lf-col>
          </lf-row>

          <lf-row class="demoRow" gutter="10">
            <lf-col span="6">
              <div class="demoCol">6</div>
            </lf-col>
            <lf-col span="6">
              <div class="demoCol">6</div>
            </lf-col>
            <lf-col span="6">
              <div class="demoCol">6</div>
            </lf-col>
            <lf-col span="6">
              <div class="demoCol">6</div>
            </lf-col>
          </lf-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>