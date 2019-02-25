import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Slides from '../../src/slides/slides.vue'
import SlidesItem from '../../src/slides/slides-item.vue'
import Vue from 'vue'

chai.use(sinonChai)


describe('Slides.vue', () => {
    it('存在.', () => {
        expect(Slides).to.exist
    })
    it('接受SliderItem，它默认显示第一个', (done) => {
        Vue.component('LfSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
                    <lf-slides-item name="1">
                        <div class="box1">1</div>
                    </lf-slides-item>
                    <lf-slides-item name="2">
                        <div class="box2">2</div>
                    </lf-slides-item>
                    <lf-slides-item name="3">
                        <div class="box3">3</div>
                    </lf-slides-item>
                    <lf-slides-item name="4">
                        <div class="box4">4</div>
                    </lf-slides-item>
                `
            }
        })
        setTimeout(()=>{
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
    })
    it('selected是几选中的就是几', (done) => {
        Vue.component('LfSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: '2'
            },
            slots: {
                default: `
                    <lf-slides-item name="1">
                        <div class="box1">1</div>
                    </lf-slides-item>
                    <lf-slides-item name="2">
                        <div class="box2">2</div>
                    </lf-slides-item>
                    <lf-slides-item name="3">
                        <div class="box3">3</div>
                    </lf-slides-item>
                    <lf-slides-item name="4">
                        <div class="box4">4</div>
                    </lf-slides-item>
                `
            }
        })
        setTimeout(()=>{
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    })
    xit('点击第二个展示第二个', (done) => {
        Vue.component('LfSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            slots: {
                default: `
                    <lf-slides-item name="1">
                        <div class="box1">1</div>
                    </lf-slides-item>
                    <lf-slides-item name="2">
                        <div class="box2">2</div>
                    </lf-slides-item>
                    <lf-slides-item name="3">
                        <div class="box3">3</div>
                    </lf-slides-item>
                    <lf-slides-item name="4">
                        <div class="box4">4</div>
                    </lf-slides-item>
                `
            },
            listeners: {
                'update:selected': (x)=>{
                   expect(x).to.eq('2')
                }
            }
        })
        setTimeout(()=>{
            console.log(wrapper.html())
            wrapper.find('[data-index="1"]').trigger('click')
        })
    })
    it('会自动播放', (done) => {
        Vue.component('LfSlidesItem', SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                selected: '1',
                autoPlayDelay: 300
            },
            slots: {
                default: `
                    <lf-slides-item name="1">
                        <div class="box1">1</div>
                    </lf-slides-item>
                    <lf-slides-item name="2">
                        <div class="box2">2</div>
                    </lf-slides-item>
                    <lf-slides-item name="3">
                        <div class="box3">3</div>
                    </lf-slides-item>
                    <lf-slides-item name="4">
                        <div class="box4">4</div>
                    </lf-slides-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('2')
            done()
        },300)
    })
    it('可以设置trigger', (done) => {
        Vue.component('LfSlidesItem', SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            propsData: {
                selected: '1',
                trigger: 'hover'
            },
            slots: {
                default: `
                    <lf-slides-item name="1">
                        <div class="box1">1</div>
                    </lf-slides-item>
                    <lf-slides-item name="2">
                        <div class="box2">2</div>
                    </lf-slides-item>
                    <lf-slides-item name="3">
                        <div class="box3">3</div>
                    </lf-slides-item>
                    <lf-slides-item name="4">
                        <div class="box4">4</div>
                    </lf-slides-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('mouseenter')
            expect(callback).to.have.been.called
            done()
        },300)
    })
    xit('可以点击上一张', (done) => {
        Vue.component('LfSlidesItem', SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            propsData: {
                selected: '1',
            },
            slots: {
                default: `
                    <lf-slides-item name="1">
                        <div class="box1">1</div>
                    </lf-slides-item>
                    <lf-slides-item name="2">
                        <div class="box2">2</div>
                    </lf-slides-item>
                    <lf-slides-item name="3">
                        <div class="box3">3</div>
                    </lf-slides-item>
                    <lf-slides-item name="4">
                        <div class="box4">4</div>
                    </lf-slides-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('.left').trigger('click')
            expect(callback).to.have.been.calledWith('4')
            done()
        })
    })

})
