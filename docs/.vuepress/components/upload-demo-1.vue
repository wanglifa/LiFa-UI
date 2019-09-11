<template>
  <div style="padding-top: 16px;">
    <h2>单文件上传</h2>
    <div class="demo-box">
      <div class="top">
        <lf-upload accept="image/*" action="https://node-server-19.herokuapp.com/upload" name="file"
                   :file-list.sync="fileList" :parse-response="parseResponse"
        >
          <lf-button icon="upload">上传</lf-button>
        </lf-upload>
      </div>
      <lf-collaspe>
        <p slot="one">使用<code>lf-upload</code>标签，其中<code>accept</code>是支持传入的文件类型，<code>action</code>是要上传到的网址或接口，<code>name</code>是你要上传的文件名称，还有<code>fileList</code>是保存文件的数组集合，<code>parseResponse</code>用来对我们上传后的url进行解析。</p>
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
   :file-list.sync="fileList" :parse-response="parseResponse">
  <lf-button icon="upload">上传</lf-button>
</lf-upload>

<script>
export default {
  data() {
    return {
      fileList: []
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
        fileList: [],
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