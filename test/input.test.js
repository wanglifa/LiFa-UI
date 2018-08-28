 const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
     it('存在.',()=>{
         expect(Input).to.exist
     })
    
     describe('props', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
         })
        it('接受value', () => {
            vm = new Constructor({
            propsData: {
                value: '123'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123')
        })
        it('接受disabled和readonly', () => {
           vm = new Constructor({
           propsData: {
               disabled: false
           }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           expect(inputElement.disabled).to.equal(false)
       })
       it('接受readonly', () => {
           vm = new Constructor({
           propsData: {
               readonly: false
           }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           expect(inputElement.readOnly).to.equal(false)
       })
       it('接受error', () => {
           vm = new Constructor({
           propsData: {
               error: '错误信息'
           }
           }).$mount()
           const useElement = vm.$el.querySelector('use')
           expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
           const errorMessage = vm.$el.querySelector('.errorMessage')
           expect(errorMessage.innerText).to.equal('错误信息')
       })
     })

     describe('事件', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持 change / input / focus / blur 事件', ()=>{
            ['change','input','focus','blur'].forEach((value)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(value, callback)
                //触发input的change事件
                let event = new Event(value)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.called.calledWith(event)
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