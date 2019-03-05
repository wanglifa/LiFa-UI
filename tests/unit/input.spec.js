import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Input from '@/input.vue'

chai.use(sinonChai)

describe('Input.vue', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })

    describe('props', () => {
        it('接受value', () => {
            const wrapper = mount(Input, {
                propsData: {value: '123'}
            })
            const vm = wrapper.vm
            const input = vm.$el.querySelector('input')
            expect(input.value).to.equal('123')
        })
        it('接受disabled和readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: false
                }
            })
            const vm = wrapper.vm
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(false)
        })
        it('接受readonly', () => {
            const wrapper = mount(Input, {
                attachToDocument: true,
                propsData: {
                    readonly: true
                }
            })
            expect(wrapper.find('[readonly="readonly"]').exists()).to.be.true
        })
        it('接受error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: '错误信息'
                }
            })
            const vm = wrapper.vm
            const inputElement = vm.$el.querySelector('input')
            const useElement = wrapper.find('use')
            expect(useElement.attributes('href')).to.equal('#i-error')
        })
    })

    describe('事件', () => {
        it('支持 change / input / focus / blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((value) => {
                const wrapper = mount(Input)
                const vm = wrapper.vm
                const callback = sinon.fake()
                vm.$on(value, callback)
                //触发input的change事件
                wrapper.find('input').trigger(value)
                expect(callback).to.have.been.called
            })

        })
        // it('支持 change 事件', ()=>{
        // vm = new Constructor({}).$mount()
        // const callback = sinon.fake()
        // vm.$on('change', callback)
        //触发input的change事件
        // let event = new Event('change')
        // let inputElement = vm.$el.querySelector('input')
        // inputElement.dispatchEvent(event)
        // expect(callback).to.have.been.called.calledWith(event)
        //
        // })

    })
})