<template>
    <svg class="lf-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg.js'
    export default {
        name: 'LiFaIcon',
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .lf-icon{
        width: 1em;
        height: 1em;
    }
</style>