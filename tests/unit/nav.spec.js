import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Nav from '../../src/nav/nav.vue'
import NavItem from '../../src/nav/nav-item.vue'
import SubNav from '../../src/nav/sub-nav.vue'
import Vue from "vue";
import {mount} from "@vue/test-utils";

chai.use(sinonChai)




describe('Nav.vue', () => {
    it('存在.', () => {
        expect(Nav).to.exist
    })
    it('接受NavItem，默认显示第一个', () => {
        Vue.component('LfNavItem', NavItem)
        Vue.component('LfSubNav',SubNav)
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
                    <lf-nav-item name="home">
                        <a href="">首页</a>
                    </lf-nav-item>
                    <lf-sub-nav name="about">
                        <template slot="title">关于</template>
                        <lf-nav-item name="culture">企业文化</lf-nav-item>
                        <lf-nav-item name="developers">开发团队</lf-nav-item>
                    </lf-sub-nav>
                    <lf-nav-item name="hire">招聘</lf-nav-item>
                `
            }
        })
        setTimeout(()=>{
            expect(wrapper.find('[data-name="home"]').exists()).to.be.true
        })
    })
    it('点击修改selected', () => {
        Vue.component('LfNavItem', NavItem)
        Vue.component('LfSubNav',SubNav)
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
                    <lf-nav-item name="home">
                        <a href="">首页</a>
                    </lf-nav-item>
                    <lf-sub-nav name="about">
                        <template slot="title">关于</template>
                        <lf-nav-item name="culture">企业文化</lf-nav-item>
                        <lf-nav-item name="developers">开发团队</lf-nav-item>
                    </lf-sub-nav>
                    <lf-nav-item name="hire">招聘</lf-nav-item>
                `
            },
            listeners: {
                'update:selected':(x)=>{
                    expect(x).to.eq('culture')
                }
            }
        })
        setTimeout(()=>{
            wrapper.find('[data-name="culture"]').trigger('click')
        })
    })
})
