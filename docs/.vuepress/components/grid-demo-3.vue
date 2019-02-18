<template>
  <div style="padding-top: 16px;">
    <h2>使用offset属性设置空隙</h2>
    <p>
      <strong>预览</strong>
    </p>
    <lf-row class="demoRow" gutter="10">
      <lf-col span="8">
        <div class="demoCol">8</div>
      </lf-col>
      <lf-col span="8" offset="8">
        <div class="demoCol">8</div>
      </lf-col>
    </lf-row>
    <lf-row class="demoRow" gutter="10">
      <lf-col span="6" offset="6">
        <div class="demoCol">6</div>
      </lf-col>
      <lf-col span="6" offset="6">
        <div class="demoCol">6</div>
      </lf-col>
    </lf-row>
    <lf-row class="demoRow" gutter="10">
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4" offset="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4" offset="8">
        <div class="demoCol">4</div>
      </lf-col>
    </lf-row>
    <lf-row class="demoRow" gutter="10">
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2" offset="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2" offset="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2" offset="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2" offset="2">
        <div class="demoCol">2</div>
      </lf-col>
    </lf-row>

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
            <lf-col span="8" offset="8">
              <div class="demoCol">8</div>
            </lf-col>
          </lf-row>
          <lf-row class="demoRow" gutter="10">
            <lf-col span="6" offset="6">
              <div class="demoCol">6</div>
            </lf-col>
            <lf-col span="6" offset="6">
              <div class="demoCol">6</div>
            </lf-col>
          </lf-row>
          <lf-row class="demoRow" gutter="10">
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4" offset="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4" offset="8">
              <div class="demoCol">4</div>
            </lf-col>
          </lf-row>
          <lf-row class="demoRow" gutter="10">
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2" offset="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2" offset="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2" offset="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2" offset="2">
              <div class="demoCol">2</div>
            </lf-col>
          </lf-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>