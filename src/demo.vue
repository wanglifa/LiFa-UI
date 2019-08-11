<template>
  <div style="justify-content: center;display: flex" class="page">
        <lf-date-picker :value.sync="value" @input="value = $event"></lf-date-picker>
  </div>
</template>

<script>

    import LfDatePicker from './date-picker/date-picker'
import LfScroll from './scroll'
export default {
    name: "demo",
    components: {
      LfScroll,
      LfDatePicker
    },
    data() {
        return {
            value: new Date()
        }
    },
    methods: {},
    watch: {},
    created() {

    },
mounted() {

}


}
</script>

<style scoped lang="scss">

.hide {
  transform: translateX(-9999px);
}


</style>