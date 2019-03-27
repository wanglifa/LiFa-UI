<template>
    <div class="lf-nav-item" :class="{active: selected,vertical}" @click="onClick"
    :data-name="name"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LiFaNavItem",
        inject: ['root','vertical'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                selected: undefined
            }
        },
        created(){
          this.root.addItem(this)
        },
        methods: {
            onClick(){
                this.root.namePath = []
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/var";
    .lf-nav-item{
        padding: 10px 20px;
        position: relative;
        text-align: left;
        &:not(.vertical){
            &.active{
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    border-bottom: 2px solid $blue;
                    width: 100%;
                }
            }
        }
        &.vertical{
            &.active{
                color: $blue-color;
            }
        }

    }
    .lf-sub-nav .lf-nav-item{
        &.active{
            &::after{
                display: none;
            }
            color: $blue-color;
        }
    }
    a{
        color: inherit;
        text-decoration: none;
    }
</style>