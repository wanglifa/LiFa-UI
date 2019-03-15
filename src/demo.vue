<template>
    <div>
        <lf-pager :total-page="20" :current-page.sync="currentPage"></lf-pager>
    </div>
</template>

<script>

    import LfPager from './pager.vue'
    export default {
        name: "demo",
        components: {
            LfPager
        },
        data() {
            return {
                currentPage: 2
            }
        },
        methods: {},
        created() {

        },

    }
</script>

<style scoped lang="scss">


</style>