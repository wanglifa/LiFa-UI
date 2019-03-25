<template>
    <div>
        <lf-upload accept="image/*" action="http://127.0.0.1:3000/upload" name="file"
            :file-list.sync="fileList" :parse-response="parseResponse" @update:fileList="x"
        >
            <button>上传</button>
            <div slot="tips">
                <div>只能上传300kb以内的png、jpeg文件</div>
            </div>
        </lf-upload>
    </div>
</template>

<script>
    import LfUpload from './upload.vue'
    export default {
        name: "demo",
        components: {
            LfUpload
        },
        data() {
            return {
                fileList: []
            }
        },
        methods: {
            parseResponse(response){
                let {id} = JSON.parse(response)
                let url = `http://127.0.0.1:3000/preview/${id}`
                return url
            },
            x(){
                console.log(this.fileList.length);
            }
        },
        watch: {

        },
        created() {

        },


    }
</script>

<style scoped lang="scss">


</style>