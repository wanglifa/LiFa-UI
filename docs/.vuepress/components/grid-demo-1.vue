<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <lf-row class="demoRow">
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
    <lf-row class="demoRow">
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
    <lf-row class="demoRow">
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
      <lf-col span="4">
        <div class="demoCol">4</div>
      </lf-col>
    </lf-row>
    <lf-row class="demoRow">
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
      <lf-col span="2">
        <div class="demoCol">2</div>
      </lf-col>
    </lf-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>使用<code>lf-row</code>来划分行，<code>lf-col</code>来划分列，每行最多24格，通过给<code>lf-col</code>添加<code>span</code>属性来定义格数。</p>
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

          <lf-row class="demoRow">
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

          <lf-row class="demoRow">
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

          <lf-row class="demoRow">
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
            <lf-col span="4">
              <div class="demoCol">4</div>
            </lf-col>
          </lf-row>

          <lf-row class="demoRow">
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
            <lf-col span="2">
              <div class="demoCol">2</div>
            </lf-col>
          </lf-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>