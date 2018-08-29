import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Input from './input'
import ButtonGroup from './button-group'
import Svg from './svg'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '李四'
    },
    methods: {
        inputChange(e){
            console.log(e.target.value)
        }
    }
})
