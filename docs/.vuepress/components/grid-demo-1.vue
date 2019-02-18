<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo-box">
      <div class="top">
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
      </div>
      <lf-collaspe>
        <p slot="one">
          使用<code>lf-row</code>来划分行，<code>lf-col</code>来划分列，每行最多24格，通过给<code>lf-col</code>添加<code>span</code>属性来定义格数。        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfRow from '../../../src/grid/row'
  import LfCol from '../../../src/grid/col'
  import LfCollaspe from './collspse-demo.vue'
  export default {
    components: {LfRow, LfCol, LfCollaspe},
    data () {
      return {
        content: `
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
<style scoped lang="scss">
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
  .demo-box{
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    .top{
      padding: 24px;
    }
  }
</style>