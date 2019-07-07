<template>
    <div style="justify-content: center;display: flex">
        <div style="width: 600px;border: 1px solid red">
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <lf-sticky :distance="100">
                <div style="border: 1px solid red;">
                    <img src="https://i.loli.net/2019/05/20/5ce2b50b09e2843554.png" alt="">
                </div>
            </lf-sticky>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
            <p>段落1</p>
        </div>
    </div>
</template>

<script>
    import LfSticky from './sticky.vue'
    export default {
        name: "demo",
        components: {
            LfSticky
        },
        data() {
            return {
                fileList: [],
                error: ''
            }
        },
        methods: {
            parseResponse(response){
                console.log(response)
                let {id} = JSON.parse(response)
                console.log(id)
                let url = `http://node-server-19.herokuapp.com/preview/${id}`
                console.log(url)
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
img{
    width: 100%;
}

</style>