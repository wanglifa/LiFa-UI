<template>
    <div>
        <lf-nav :selected.sync="selected" vertical style="margin: 20px;width: 200px">
            <lf-nav-item name="home">首页</lf-nav-item>
            <lf-sub-nav name="about">
                <template slot="title">关于</template>
                <lf-nav-item name="culture">企业文化</lf-nav-item>
                <lf-nav-item name="developers">开发团队</lf-nav-item>
                <lf-sub-nav name="contact">
                    <template slot="title">联系方式</template>
                    <lf-nav-item name="wechat">微信</lf-nav-item>
                    <lf-nav-item name="qq">QQ</lf-nav-item>
                    <lf-sub-nav name="phone">
                        <template slot="title">手机</template>
                        <lf-nav-item name="cm">移动</lf-nav-item>
                        <lf-nav-item name="cu">联通</lf-nav-item>
                        <lf-nav-item name="cn">电信</lf-nav-item>
                    </lf-sub-nav>
                </lf-sub-nav>
            </lf-sub-nav>
            <lf-nav-item name="hire">招聘</lf-nav-item>
        </lf-nav>
        <lf-nav :selected.sync="selected" style="margin: 20px;">
            <lf-nav-item name="home">
                <a href="">首页</a>
            </lf-nav-item>
            <lf-sub-nav name="about">
                <template slot="title">关于</template>
                <lf-nav-item name="culture">企业文化</lf-nav-item>
                <lf-nav-item name="developers">开发团队</lf-nav-item>
                <lf-sub-nav name="contact">
                    <template slot="title">联系方式</template>
                    <lf-nav-item name="wechat">微信</lf-nav-item>
                    <lf-nav-item name="qq">QQ</lf-nav-item>
                    <lf-sub-nav name="phone">
                        <template slot="title">手机</template>
                        <lf-nav-item name="cm">移动</lf-nav-item>
                        <lf-nav-item name="cu">联通</lf-nav-item>
                        <lf-nav-item name="cn">电信</lf-nav-item>
                    </lf-sub-nav>
                </lf-sub-nav>
            </lf-sub-nav>
            <lf-nav-item name="hire">招聘</lf-nav-item>
        </lf-nav>
    </div>
</template>

<script>

    import LfNav from './nav/nav.vue'
    import LfNavItem from './nav/nav-item.vue'
    import LfSubNav from './nav/sub-nav.vue'
    export default {
        name: "demo",
        components: {
            LfNav,
            LfNavItem,
            LfSubNav
        },
        data() {
            return {
                selected: 'culture'
            }
        },
        methods: {},
        created() {

        },
        watch: {
            selected(newVal){
                if(newVal === 'home'){
                    alert('hello')
                }
            }
        }
    }
</script>

<style scoped>


</style>