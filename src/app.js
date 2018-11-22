import Vue from 'vue'
import Button from './button/button'
import Icon from './icon'
import Input from './input'
import ButtonGroup from './button/button-group'
import Svg from './svg.js'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Sider from './layout/sider'
import Footer from './layout/footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs/tabs.vue'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapse-item.vue'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)//会去执行install方法


new Vue({
    el: '#app',
    data: {
        selectedTab: ['2']
    },
    created(){
        

    },
    methods: {
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你的智商余额为${parseInt(Math.random()*100)}`,{
                position,
                closeBtn: {
                    text: '测试',
                    callback: (a)=>{
                        a.log()
                    }
                },
                autoClose: 1   
            })  
        },
        yyy(){
            console.log('yyy')
        }
    }
})
