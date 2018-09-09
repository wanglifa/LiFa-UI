<template>
    <transition name="slider" v-if="visible">
        <div class="sider">
           <slot></slot>
           <button @click="visible=false">close</button>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'GuluSider',
    data(){
        return {
            visible: true
        }
    }

}
</script>
<style lang="scss" scoped>
    .sider{
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .sider-enter-active, .slider-leave-active{
        transition: all .3s linear;
    }
    .slider-enter, .slider-leave-to{
        margin-left: -200px;
    }
</style>

