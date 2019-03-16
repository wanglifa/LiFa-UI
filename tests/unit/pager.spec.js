import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Pager from '@/pager.vue'
chai.use(sinonChai)


describe('Pager.vue', () => {
    it('存在.', () => {
        expect(Pager).to.exist
    })
    it('可以设置totalPage',()=>{
        const wrapper = mount(Pager,{
            propsData: {
                totalPage: 20,
                currentPage: 5
            }
        })
        expect(wrapper.find("[data-index='20']").exists()).to.be.true
    })
    it('可以设置currentPage',()=>{
        const wrapper = mount(Pager,{
            propsData: {
                totalPage: 20,
                currentPage: 5
            }
        })
        expect(wrapper.find("[data-index='5']").classes('active')).to.be.true
    })
    it('点击第二页跳到第二页',()=>{
        const wrapper = mount(Pager,{
            propsData: {
                totalPage: 10,
                currentPage: 3,
            },
            listeners: {
                'update:current-page': (x)=>{
                    expect(x).to.eq(2)
                }
            }
        })
        wrapper.find('[data-index="2"]').trigger('click')
    })
})
