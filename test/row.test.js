const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.',()=>{
        expect(Row).to.exist
    })
    //如果里面不传入done，默认为你的测试代码全都是同步的，不会去执行你下面的setTimeout，所以要想异步就要
    //在参数里传入一个done，然后在你异步代码结束后写一个done() 
    it('接受gutter属性', (done) => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        
        div.innerHTML = `
            <g-row gutter="20">
                <g-col sapn="12"></g-col>
                <g-col sapn="12"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: div
        })
        //这里之所以写在setTimeout里是因为，gutter是写在mounted里的，而mounted是异步操作，需要时间，所以需要加一个延时，才能在mounted后获取到最新的gutter,否则就是在mounted前获取的gutter
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)
    })
    it('接受align属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
        propsData: {
            align: 'right'
        }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
        vm.$destroy()
    })

})