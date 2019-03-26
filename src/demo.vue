<template>
    <div>
        {{error}}
        <br>
        <div>只能上传300kb以内的png、jpeg文件</div>
        <lf-upload accept="image/*" action="http://127.0.0.1:3000/upload" name="file"
            :file-list.sync="fileList" :parse-response="parseResponse"
                   @error="error=$event" multiple
        >
            <lf-button icon="upload">上传</lf-button>
        </lf-upload>
    </div>
</template>

<script>
    import LfUpload from './upload.vue'
    import LfButton from './button/button.vue'
    export default {
        name: "demo",
        components: {
            LfUpload,
            LfButton
        },
        data() {
            return {
                fileList: [],
                error: ''
            }
        },
        methods: {
            parseResponse(response){
                let {id} = JSON.parse(response)
                let url = `http://127.0.0.1:3000/preview/${id}`
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
        created() {

        },


    }
</script>

<style scoped lang="scss">


</style>