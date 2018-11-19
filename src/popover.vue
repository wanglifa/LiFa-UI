<template>
    <div class="popover" @click="toggle">
        <div class="content-wrapper" v-if="visibility">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluPopover',
        data(){
            return {
                visibility: false
            }
        },
        methods: {
            toggle(){
                this.visibility = !this.visibility
            }
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            box-shadow: 0 0 3px rgba(0,0,0,.5);
            border: 1px solid red;
        }
    }
</style>