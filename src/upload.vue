<template>
    <div class="lifa-upload">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <ol class="lifa-upload-fileList">
            <li v-for="(file,index) in fileList" :key="file.name">
                <template v-if="file.status === 'uploading'">
                    <lf-icon name="loading" class="lifa-upload-spin"></lf-icon>
                </template>

                <template v-else-if="file.type.indexOf('image') === 0">
                    <img class="lifa-uploader-image" :src="file.url" :alt="file.name" width="80" height="80">
                </template>
                <template v-else>
                    <div class="lifa-upload-defaultImage"></div>
                </template>

                <span class="lifa-upload-name" :class="{[file.status]:file.status}">{{file.name}}</span>
                <button class="lifa-upload-remove" @click="onRemoveFile(index)">x</button>
            </li>
        </ol>
        <div ref="tmp" style="width: 0;height:0;overflow: hidden;"></div>
    </div>
</template>

<script>
    import LfIcon from './icon.vue'
    export default {
        name: "LiFaUpload",
        props: {
            name: {
                type: String,
                required: true
            },
            action: {
                type: String,
                required: true
            },
            method: {
                type: String,
                default: 'post'
            },
            fileList: {
                type: Array,
                default: () => []
            },
            parseResponse: {
                type: Function,
                required: true
            },
            sizeLimit: {
                type: Number,
                default: 3*1024*1024
            },
            multiple: {
                type: Boolean,
                default: false
            },
            accept: {
                type: String,
                default: 'image/png'
            }
        },
        components: {
            LfIcon
        },
        data() {
            return {
                url: 'about:blank'
            }
        },
        methods: {
            onClickUpload() {
                let input = this.createInput()
                input.addEventListener('change', () => {
                    let files = input.files
                    input.remove()
                    this.uploadFiles(files)

                })
                input.click()
            },
            createInput() {
                this.$refs.tmp.innerHTML = ''
                let input = document.createElement('input')
                input.type = 'file'
                input.accept = this.accept
                input.multiple = this.multiple
                this.$refs.tmp.appendChild(input)
                return input
            },
            uploadFiles(rawFiles) {
                let newNames = []
                for(let i = 0;i<rawFiles.length;i++){
                    let rawFile = rawFiles[i]
                    let {name,size,type} = rawFile
                    let newName = this.generateName(name)
                    newNames[i] = newName
                }
                if(!this.beforeuploadFiles(rawFiles, newNames)){return}
                Array.from(rawFiles).forEach((rawFile,i)=>{
                    let newName = newNames[i]
                    let formData = new FormData()
                    formData.append(this.name, rawFile)
                    this.doUploadFile(formData, (response) => {
                        let url = this.parseResponse(response)
                        this.url = url
                        this.afteruploadFile(rawFile, newName, url)
                    }, (xhr) => {
                        this.uploadError(xhr,newName)
                    })
                })
            },
            uploadError(xhr,newName) {
                let file = this.fileList.filter(f => f.name === newName)[0]
                let index = this.fileList.indexOf(file)
                let fileCopy = JSON.parse(JSON.stringify(file))
                fileCopy.status = 'fail'
                let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
                fileListCopy.splice(index, 1, fileCopy)
                this.$emit('update:fileList', fileListCopy)
                let error = ''
                if(xhr.status === 0){
                    error = '网络无法连接'
                }
                this.$emit('error',error)
            },
            generateName(name) {
                while (this.fileList.filter(n => n.name === name).length > 0) {
                    let dotIndex = name.lastIndexOf('.')
                    let nameWithoutExtension = name.substring(0, dotIndex)
                    let extension = name.substring(dotIndex)
                    //每一次在.前面加一个(1)
                    name = nameWithoutExtension + '(1)' + extension
                }
                return name
            },
            doUploadFile(formData, success, fail) {
                let xhr = new XMLHttpRequest()
                xhr.open(this.method, this.action)
                xhr.onload = () => {
                    console.log('this.fileList');
                    console.log(this.fileList);
                    success(xhr.response)
                }
                xhr.onerror = () => {
                    fail(xhr)
                }
                xhr.send(formData)
            },
            beforeuploadFiles(rawFiles, newNames) {
                for(let i = 0;i<rawFiles.length;i++){
                    let {size,type} = rawFiles[i]
                    if(size > this.sizeLimit){
                        this.$emit('error',`文件大小不能超过${this.sizeLimit}`)
                        return false
                    }else{
                        //把所有的文件都放到x这个数组里
                        let selectFiles = Array.from(rawFiles).map((rawFile,i)=>{
                            return {name: newNames[i],type,size,status: 'uploading'}
                        })
                        this.$emit('update:fileList',[...this.fileList,...selectFiles])
                        return true
                    }
                }
            },
            afteruploadFile(rawFile, newName, url) {
                //因为name是唯一的，所以根据name来获取这个文件的一些属性
                let file = this.fileList.filter(i => i.name === newName)[0]
                //file是通过fileList获取的，fileList是props不能直接修改
                let fileCopy = JSON.parse(JSON.stringify(file))
                let index = this.fileList.indexOf(file)
                fileCopy.url = url
                fileCopy.status = 'success'
                let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
                //将数组中之前的file删除换成fileCopy
                fileListCopy.splice(index, 1, fileCopy)
                this.$emit('update:fileList', fileListCopy)
            },
            onRemoveFile(index) {
                let copy = JSON.parse(JSON.stringify(this.fileList))
                let confirm = window.confirm('你确定要删除吗？')
                if (confirm) {
                    copy.splice(index, 1)
                    this.$emit('update:fileList', copy)
                    this.$emit('error','')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/var";

    .lifa-upload {
        &-fileList {
            list-style: none;

            > li {
                display: flex;
                align-items: center;
                margin: 8px 0;
                border: 1px solid $gray;
            }
        }

        &-defaultImage {
            border: 1px solid red;
            width: 32px;
            height: 32px;
        }

        &-image-wrapper {
            margin-right: 8px;
        }

        &-name {
            margin-left: 1em;
            &.success {
                color: $blue;
            }

            &.fail {
                color: red;
            }
        }

        &-remove {
            margin-left: auto;
            background: none;
            border: 1px solid $blue;
            color: $blue;
            cursor: pointer;
            border-radius: $border-radius;
            width: 32px;
            height: 32px;
            margin-right: 1em;
        }

        &-spin {
            @include spin;
            width: 32px;
            height: 32px;
        }
    }
</style>