import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Col from '@/grid/col.vue'
chai.use(sinonChai)



describe('Col.vue', () => {
    it('存在.',()=>{
        expect(Col).to.exist
    })
    it('接受span属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                span: '1'
            }
        })
        const vm = wrapper.vm
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.eq(true)
    })
    it('接受offset属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                offset: '1'
            }
        })
        const vm = wrapper.vm
        const element = vm.$el
        expect(element.classList.contains('offset-1')).to.eq(true)
    })
    it('接受ipad属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                ipad: {span:1,offset:1}
            }
        })
        expect(wrapper.contains('.col-ipad-1')).to.eq(true)
        expect(wrapper.contains('.offset-ipad-1')).to.eq(true)
    })
    it('接受narrowPc属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: {span:1,offset:1}
            }
        })
        expect(wrapper.contains('.col-narrow-pc-1')).to.eq(true)
        expect(wrapper.contains('.offset-narrow-pc-1')).to.eq(true)
    })
    it('接受pc属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                pc: {span:1,offset:1}
            }
        })
        expect(wrapper.contains('.col-pc-1')).to.eq(true)
        expect(wrapper.contains('.offset-pc-1')).to.eq(true)
    })
    it('接受widePc属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                widePc: {span:1,offset:1}
            }
        })
        expect(wrapper.contains('.col-wide-pc-1')).to.eq(true)
        expect(wrapper.contains('.offset-wide-pc-1')).to.eq(true)
    })
})