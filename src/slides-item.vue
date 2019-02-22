<template>
    <transition name="slide">
        <div class="lf-slides-item" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "slides-item",
        data() {
            return {
                selected: undefined,
                reverse: false
            }
        },
        props: {
          name: {
              type: String,
              required: true
          }
        },
        computed: {
            visible(){
                return this.selected === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
    .lf-slides-item{
        width: 100%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }

    .slide-enter {
        transform: translateX(100%);
    }
    .slide-enter.reverse{
        transform: translateX(-100%);
    }
    .slide-leave-active{
        position: absolute;
    }

    .slide-leave-to {
        transform: translateX(-100%);
    }
    .slide-leave-to.reverse{
        transform: translateX(100%);
    }
</style>