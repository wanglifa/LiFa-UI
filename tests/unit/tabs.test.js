const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHead from '../../src/tabs/tabs-head'
import TabsBody from '../../src/tabs/tabs-body'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPane from '../../src/tabs/tabs-pane'
Vue.component('lf-tabs',Tabs)
Vue.component('lf-tabs-head',TabsHead)
Vue.component('lf-tabs-body',TabsBody)
Vue.component('lf-tabs-item',TabsItem)
Vue.component('lf-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.',()=>{
        expect(Tabs).to.exist
    })
   
    
    it('接受selected', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <lf-tabs selected="finance">
            <lf-tabs-head>
                <lf-tabs-item name="woman">
                    美女
                </lf-tabs-item>
                <lf-tabs-item name="finance">
                    财经
                </lf-tabs-item>
                <lf-tabs-item name="sports">
                    体育
                </lf-tabs-item>
            </lf-tabs-head>
            <lf-tabs-body>
                <lf-tabs-pane name="woman">
                    美女相关资讯
                </lf-tabs-pane>
                <lf-tabs-pane name="finance">
                    财经相关资讯
                </lf-tabs-pane>
                <lf-tabs-pane name="sports">
                    体育相关资讯
            </lf-tabs-pane>
        </lf-tabs-body>
    </lf-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
            expect(x.classList.contains('active')).to.eq(true)
            done()
        })
    })
      
       
})