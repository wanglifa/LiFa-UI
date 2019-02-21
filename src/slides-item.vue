<template>
    <transition name="fade">
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
    .fade-enter-active, .fade-leave-active {
        transition: all 3s;
    }

    .fade-enter {
        transform: translateX(100%);
    }
    .fade-enter.reverse{
        transform: translateX(-100%);
    }
    .fade-leave-active{
        position: absolute;
    }

    .fade-leave-to {
        transform: translateX(-100%);
    }
    .fade-leave-to.reverse{
        transform: translateX(100%);
    }
</style>