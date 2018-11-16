const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.',()=>{
        expect(Toast).to.exist
    })
    describe('props', function(){
        it('接受 autoClose', (done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', ()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeBtn', ()=>{
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeBtn: {
                        text: '关闭吧',
                        callback
                    }
                }
            }).$mount()
            let closeBtn = vm.$el.querySelector('.close')
            expect(closeBtn.textContent.trim()).to.eq('关闭吧')
            closeBtn.click()
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml', ()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">你好</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position', ()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'top'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
        })
    })
    

})