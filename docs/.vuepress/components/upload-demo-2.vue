<template>
  <div style="padding-top: 16px;">
    <h2>多文件上传（展示默认列表）</h2>
    <div class="demo-box">
      <div class="top">
        <lf-upload accept="image/*" action="https://node-server-19.herokuapp.com/upload" name="file"
                   :file-list.sync="fileList" :parse-response="parseResponse" multiple
        >
          <lf-button icon="upload">上传</lf-button>
        </lf-upload>
      </div>
      <lf-collaspe>
        <p slot="one">在单文件基础上添加一个<code>multiple</code>字段就可以支持多文件上传了。给<code>fileList</code>可以设置默认值，用来显示你初始化的数据列表。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import Upload from '../../../src/upload.vue'
  import Button from '../../../src/button/button.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-upload': Upload,
      'lf-button': Button,
      'lf-collaspe': Collaspe
    },
    data () {
      return {
        content:
`
<lf-upload accept="image/*" action="https://node-server-19.herokuapp.com/upload" name="file"
   :file-list.sync="fileList" :parse-response="parseResponse" multiple>
  <lf-button icon="upload">上传</lf-button>
</lf-upload>

<script>
export default {
  data() {
    return {
      fileList: [
        {
                    name: '小改改.jpg',
                    status: 'success',
                    url: 'https://i.loli.net/2019/09/11/SAf9C37r8TuVZqJ.jpg',
                    type: 'image/jpeg'
        }
      ]
    }
  },
  methods: {
    parseResponse(response){
      let {id} = JSON.parse(response)
      let url = 'https://node-server-19.herokuapp.com/preview/' + id
      return url
    },
  }
}
<script>
`.replace(/^ {10}/gm, '').trim(),
        fileList: [
          { name: '小改改.jpg',
            status: 'success',
            url: 'https://i.loli.net/2019/09/11/SAf9C37r8TuVZqJ.jpg', size: 171078
    , type: 'image/jpeg'}
        ],
        error: ''
      }
    },
    methods: {
      parseResponse(response){
        let {id} = JSON.parse(response)
        let url = `https://node-server-19.herokuapp.com/preview/${id}`
        return url
      },
      alert(error){
        window.alert(error || '上传失败')
      }
    },
    watch: {
      error(){
        if(this.error !== ''){
          setTimeout(()=>{
            this.error = ''
          },2000)
        }
      }
    },
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