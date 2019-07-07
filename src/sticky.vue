<template>
    <div class="lifa-sticky-wrapper" ref="sticky" :style="{height}">
        <div class="lifa-sticky" :class="classes" :style="{left,width,top}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LiFaSticky",
        props: {
          distance: {
              type: Number,
              default: 0
          }
        },
        data() {
            return {
                sticky: false,
                height: undefined,
                width: undefined,
                left: undefined,
                top: undefined
            }
        },
        mounted() {
            // 在一开始还没有脱离文档流的时候获取一下父元素的高度，然后将他的
            // 高度赋值给它，这样当脱离文档流的时候他也会有高度
            let top = this.offsetTop()
            this.windowScrollHandler = () => {
                if(window.scrollY > top - this.distance) {
                    // 滚动的时候直接获取高度，防止因为网络延迟原因获取高度不准确
                    let {left,width,height} = this.$refs.sticky.getBoundingClientRect()
                    this.left = left + 'px'
                    this.height = height + 'px'
                    this.width = width + 'px'
                    this.sticky = true
                    this.top = this.distance + 'px'
                }else {
                    this.sticky = false
                }
            }
            window.addEventListener('scroll', this.windowScrollHandler)
        },
        methods: {
            offsetTop() {
                let {top} = this.$refs.sticky.getBoundingClientRect()
                top = top + window.scrollY
                return top
            }
        },
        computed: {
            classes() {
                return {
                    sticky: this.sticky
                }
            }
        },
        beforeDestroy() {
            window.removeEventListener('scroll',this.windowScrollHandler)
        }
    }
</script>

<style scoped lang="scss">
    .lifa-sticky{
        &.sticky {
            position: fixed;
            top: 0;
        }
    }
</style>