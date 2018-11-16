import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Input from './input'
import ButtonGroup from './button-group'
import Svg from './svg.js'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
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
Vue.use(plugin)//会去执行install方法


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '李四'
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
                }   
            })  
        }
    }
})
