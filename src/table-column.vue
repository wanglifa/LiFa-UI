<template>
  <div></div>
</template>

<script>
    export default {
        name: "table-column.vue",
        props: {
            text: {
                type: String,
                required: true
            },
            field: {
                type: String,
                required: true
            },
            width: {
                type: Number
            }
        }
    }
</script>

<style scoped>

</style>