import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Upload from '@/upload.vue'
chai.use(sinonChai)
import http from '../../src/http.js'


describe('Upload.vue', () => {
    it('存在.', () => {
        expect(Upload).to.exist
    })
    it('可以上传一个文件', (done)=>{
        http.post = (url, options) => {
            setTimeout(()=>{
                options.success({id: "123123"})
                done()
            },1000)
        }
        const wrapper = mount(Upload, {
            propsData: {
                name: 'file',
                action: '/xxx',
                method: 'post',
                parseResponse: (response)=>{
                    let object = JSON.parse(response)
                    return `/preview/${object.id}`
                },
                fileList: []
            },
            slots: {
                default: '<button id="x">click me</button>'
            },
            listeners: {
                'update:fileList': (fileList) => {
                    wrapper.setProps({fileList})
                },
                'uploaded': () => {
                    expect(wrapper.find('use').exists()).to.eq(false)
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
                }
            }
        })
        wrapper.find('#x').trigger('click')
        let inputWrapper =  wrapper.find('input[type="file"]')
        let input = inputWrapper.element
        //new File接受两个参数第一个文件内容（必须是数组），第二个是文件名
        let file1 = new File(['xxxx'], 'xxx.txt')
        const data = new DataTransfer()
        data.items.add(file1)
        input.files = data.files

        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    })
})
