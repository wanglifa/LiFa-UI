<template>
    <div>
        <lf-nav :selected.sync="selected">
            <lf-nav-item name="home">首页</lf-nav-item>
            <lf-nav-item name="about">关于</lf-nav-item>
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
                selected: ['home']
            }
        },
        methods: {},
        created() {

        }
    }
</script>

<style scoped>


</style>