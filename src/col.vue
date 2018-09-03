<template>
    <div class="col" :class="[span ? `col-${span}` : '']">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props: {
        span: {
            type: [Number, String]
        }
    }
}
</script>
<style lang="scss" scoped>
    .col{
        $class-prefix: col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%
            }
        }
    }
</style>


