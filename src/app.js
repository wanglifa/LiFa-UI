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
import Cascader from './cascader.vue'
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-col',Col)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-header',Header)
Vue.component('g-icon',Icon)
Vue.component('g-input',Input)
Vue.component('g-layout',Layout)
Vue.component('g-popover',Popover)
Vue.component('g-row',Row)
Vue.component('g-sider',Sider)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-toast',Toast)
Vue.component('g-cascader',Cascader)
Vue.use(plugin)//会去执行install方法


new Vue({
    el: '#app',
    data: {
        source: [
            {
                name: '浙江',
                children: [
                    {
                        name: '杭州',
                        children: [
                            {name: '上城'},
                            {name: '下城'},
                            {name: '江干'}
                        ]
                    },{
                        name: '嘉兴',
                        children: [
                            {name: '南湖'},
                            {name: '秀洲'},
                            {name: '嘉善'}
                        ]
                    }
                ]
            },
            {
                name: '福建',
                children: [
                    {
                        name: '福州',
                        children: [
                            {name: '鼓楼'},
                            {name: '台江'},
                            {name: '苍山'}
                        ]
                    }
                ]
            }
        ]
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
