import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
import {mount} from '@vue/test-utils'
import Popover from '@/popover.vue'



describe('Popover.vue', () => {
    it('存在.',()=>{
        expect(Popover).to.exist
    })
    it('可以设置position',()=>{
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button></button>`},
                content: `弹出内容`
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        expect(wrapper.find('.content-wrapper').contains('.position-bottom'))
    })
    it('可以设置 trigger', ()=>{
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button></button>`},
                content: `弹出内容`
            },
            propsData: {
                trigger: 'hover'
            }
        })
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.popover').trigger('mouseenter')
        expect(wrapper.find('.content-wrapper').element).to.exist
    })
    

})