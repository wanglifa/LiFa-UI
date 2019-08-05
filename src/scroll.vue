<template>
  <div class="lifa-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="lifa-scroll" ref="child">
      <slot></slot>
    </div>
    <div class="lifa-scroll-track" v-show="scrollBarVisible">
      <div class="lifa-scroll-bar" ref="scrollBar" :style="{transform: `translateY(${scrollMoveY})`}"
        @mousedown="onMouseDownScrollBar" @selectstart="onSelectStart"
      >
        <div class="lifa-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LiFaUiScroll",
    data () {
      return {
        scrollMoveY: 0,
        scrollBarVisible: false,
        isScrolling: false,
        startPosition: undefined,
        endPosition: undefined,
        translateX: 0,
        translateY: 0
      }
    },
    mounted() {
      document.addEventListener('mousemove', (e) => {
        this.onMouseMoveScrollBar(e)
      })
      document.addEventListener('mouseup', (e) => {
        this.onMouseUpScrollBar(e)
      })
      let parent = this.$refs.parent
      let child = this.$refs.child
      let translateY = 0
      // 将height命名为childHeight
      let {height: childHeight} = child.getBoundingClientRect()
      let {height: parentHeight} = parent.getBoundingClientRect()
      let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
      borderTopWidth = parseInt(borderTopWidth)
      borderBottomWidth = parseInt(borderBottomWidth)
      paddingTop = parseInt(paddingTop)
      paddingBottom = parseInt(paddingBottom)
      let maxHeight = childHeight - parentHeight + (borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
      parent.addEventListener('wheel', (e) => {
        if (e.deltaY > 20) {
          translateY -= 20 * 3
        } else if (e.deltaY < -20) {
          translateY -= -20 * 3
        } else {
          translateY -= e.deltaY * 3
        }
        if (translateY > 0) {
          translateY = 0
        } else if (translateY < -maxHeight) {
          translateY = -maxHeight
        } else {
          e.preventDefault()
        }
        child.style.transform = `translateY(${translateY}px)`
        this.updateScrollHeight(parentHeight, childHeight, translateY)
      })
      this.updateScrollHeight(parentHeight, childHeight, translateY)
    },
    methods: {
      updateScrollHeight(parentHeight, childHeight, translateY) {
        let bar = this.$refs.scrollBar
        bar.style.height = (parentHeight * parentHeight / childHeight) + 'px'
        this.scrollMoveY = -(translateY * parentHeight / childHeight) + 'px'
      },
      onMouseEnter() {
        this.scrollBarVisible = true
      },
      onMouseLeave() {
        this.scrollBarVisible = false
        this.isScrolling = false
      },
      onMouseDownScrollBar(e) {
        this.isScrolling = true
        let {screenX, screenY} = e
        this.startPosition = {x: screenX, y: screenY}
      },
      onMouseMoveScrollBar(e) {
        if (!this.isScrolling) return
        let {screenX, screenY} = e
        this.endPosition = {x: screenX, y: screenY}
        let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
        this.translateX = parseInt(this.translateX) + delta.x
        this.translateY = parseInt(this.translateY) + delta.y
        this.startPosition = this.endPosition
        this.$refs.scrollBar.style.transform = `translate(0px,${this.translateY}px)`
      },
      onMouseUpScrollBar(e) {
        this.isScrolling = false
      },
      onSelectStart(e) {
        e.preventDefault()
      }
    }
  }
</script>

<style scoped lang="scss">
  .lifa-scroll {
    transition: all .05s ease;
    &-wrapper {
      border: 1px solid green;
      overflow: hidden;
      position: relative;
    }
    &-track {
      position: absolute;
      top: 0;
      right: 0;
      width: 14px;
      height: 100%;
      background: #FAFAFA;
      border-left: 1px solid #E8E7E8;
    }
    &-bar {
      position: absolute;
      top: -1px;
      left: 50%;
      height: 20px;
      width: 8px;
      margin-left: -4px;
      &-inner {
        height: 100%;
        border-radius: 4px;
        background: #C2C2C2;
        opacity: .9;
      }
    }
  }
</style>