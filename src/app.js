import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})
import chai from 'chai'
let expect = chai.expect
//单元测试
{
    //将Button由对象转为名为Constructor的函数
    let Constructor = Vue.extend(Button)
    //创建Constructor这个函数的实例对象
    let vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    //将实例对象挂载到id为test的标签上
    vm.$mount()
    //vue里的实例对象操作dom api必须使用 '实例对象.$el'
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    //期望useElement里面的xlink的href等于settings
    expect(href).to.eq('#i-settings')
    //移除这个实例对象里的dom元素
    vm.$el.remove()
    //实例对象.$destroy()完全销毁这个实例对象
    vm.$destroy()
}
{
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    //移除这个实例对象里的dom元素
    vm.$el.remove()
    //实例对象.$destroy()完全销毁这个实例对象
    vm.$destroy()
}
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    //移除这个实例对象里的dom元素
    vm.$el.remove()
    //实例对象.$destroy()完全销毁这个实例对象
    vm.$destroy()
}
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    //移除这个实例对象里的dom元素
    vm.$el.remove()
    //实例对象.$destroy()完全销毁这个实例对象
    vm.$destroy()
}
{
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    vm.$on('click',function () {
        expect(1).to.eq(1)
    })
    //希望这个函数被执行
    let button = vm.$el
    button.click()
}