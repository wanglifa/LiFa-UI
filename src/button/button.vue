<template>
    <button class="lf-button" :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click')">
        <lf-icon class="icon" v-if="icon && !loading" :name="icon"></lf-icon>
        <lf-icon class="loading icon" v-if="loading" name="loading"></lf-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from '../icon'
    import '../svg.js'
    export default {
        name: 'LiFaButton',
        components: {
            'lf-icon': Icon
        },
        //props: ['icon','iconPosition']
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                //默认值是left
                default: 'left',
                //validator函数用于拿到你传入的参数
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../var.scss';


    .lf-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        > .content {
            order: 2;
            padding: 0;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }

</style>
