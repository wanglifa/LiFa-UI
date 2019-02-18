<template>
  <div style="padding-top: 16px;">
    <h2>设置 gutter</h2>
    <div class="demo-box">
      <div class="top">
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
      </div>
      <lf-collaspe>
        <p slot="one">
          通过给<code>lf-row</code>标签添加<code>gutter</code>属性来设置<code>lf-col</code>之间的间隔。
        </p>
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