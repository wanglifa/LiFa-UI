const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.',()=>{
        expect(Col).to.exist
    })
    it('接受span属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            span: '1'
        }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.eq(true)
        vm.$destroy()
    })
    it('接受offset属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            offset: '1'
        }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-1')).to.eq(true)
        vm.$destroy()
    })
    it('接受ipad属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            ipad: {span:1,offset:1}
        }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-1')).to.eq(true)
        expect(element.classList.contains('offset-ipad-1')).to.eq(true)
        vm.$destroy()
    })
    it('接受narrowPc属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            narrowPc: {span:1,offset:1}
        }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(element.classList.contains('offset-narrow-pc-1')).to.eq(true)
        vm.$destroy()
    })
    it('接受pc属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            pc: {span:1,offset:1}
        }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-1')).to.eq(true)
        expect(element.classList.contains('offset-pc-1')).to.eq(true)
        vm.$destroy()
    })
    it('接受widePc属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
        propsData: {
            widePc: {span:1,offset:1}
        }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-wide-pc-1')).to.eq(true)
        expect(element.classList.contains('offset-wide-pc-1')).to.eq(true)
        vm.$destroy()
    })
})