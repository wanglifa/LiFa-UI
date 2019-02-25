<template>
  <div style="padding-top: 16px;">
    <h2>使用静态数据</h2>
    <div class="demo-box">
      <div class="top">
        <lf-cascader :source.sync="source" height="100px" :selected.sync="selected"

        ></lf-cascader>
      </div>
      <lf-collaspe>
        <p slot="one">
          通过引入给<code>lf-cascader</code>绑定<code>source.sync</code>和<code>selected.sync</code>事件分别动态的传入一个source,这里的source就是你的数据，
          selected只需传入一个空对象
        </p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import Cascader from '../../../src/cascader/cascader.vue'
  import LfCollaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-cascader': Cascader,
      LfCollaspe
    },
    data () {
      return {
          source: [
            {
              name: '浙江',
              children: [
                {
                  name: '杭州',
                  children: [
                    {name: '上城'},
                    {name: '下城'},
                    {name: '江干'}
                  ]
                }, {
                  name: '嘉兴',
                  children: [
                    {name: '南湖'},
                    {name: '秀洲'},
                    {name: '嘉善'}
                  ]
                }
              ]
            },
            {
              name: '福建',
              children: [
                {
                  name: '福州',
                  children: [
                    {name: '鼓楼'},
                    {name: '台江'},
                    {name: '苍山'}
                  ]
                }
              ]
            }
          ],
        selected: [],
        content:
                `
<lf-cascader :source.sync="source" height="100px" :selected.sync="selected">
</lf-cascader>

<script>
import Cascader from '../../../src/cascader/cascader.vue'
...

data(){
    return {
        source: [
          {
              name: '浙江',
              children: [
                  {
                      name: '杭州',
                      children: [
                          {name: '上城'},
                          {name: '下城'},
                          {name: '江干'}
                      ]
                  },
                  {
                      name: '嘉兴',
                      children: [
                          {name: '南湖'},
                          {name: '秀洲'},
                          {name: '嘉善'}
                      ]
                  }
              ]
          },
          {
              name: '福建',
              children: [
                  name: '福州',
                  children: [
                      {name: '鼓楼'},
                      {name: '台江'},
                      {name: '苍山'}
                  ]
              ]
          }
        ],
        selected: []
    }
}
...
<script>
 `.replace(/^ {8}/gm, '').trim(),
        selected: [],
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
</style>