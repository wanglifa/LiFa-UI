<template>
  <div style="justify-content: center;display: flex">
    <lf-date-picker></lf-date-picker>
  </div>
</template>

<script>

    import LfDatePicker from './date-picker/date-picker'
    export default {
        name: "demo",
        components: {
            LfDatePicker
        },
        data() {
            return {

            }
        },
        methods: {},
        watch: {

        },
        created() {

        },


    }
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }

</style>