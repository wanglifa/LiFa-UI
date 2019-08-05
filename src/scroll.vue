<template>
  <div class="lifa-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="lifa-scroll" ref="child" :style="{transform: `translateY(${this.contentY}px)`}">
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
        scrollBarY: 0,
        barHeight: undefined,
        parentHeight: undefined,
        contentY: 0,
        childHeight: undefined
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
      // 将height命名为childHeight
      let {height: childHeight} = child.getBoundingClientRect()
      let {height: parentHeight} = parent.getBoundingClientRect()
      this.parentHeight = parentHeight
      this.childHeight = childHeight
      let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
      borderTopWidth = parseInt(borderTopWidth)
      borderBottomWidth = parseInt(borderBottomWidth)
      paddingTop = parseInt(paddingTop)
      paddingBottom = parseInt(paddingBottom)
      let maxHeight = childHeight - parentHeight + (borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
      parent.addEventListener('wheel', (e) => {
        if (e.deltaY > 20) {
          this.contentY -= 20 * 3
        } else if (e.deltaY < -20) {
          this.contentY -= -20 * 3
        } else {
          this.contentY -= e.deltaY * 3
        }
        if (this.contentY > 0) {
          this.contentY = 0
        } else if (this.contentY < -maxHeight) {
          this.contentY = -maxHeight
        } else {
          e.preventDefault()
        }
        this.updateScrollHeight(parentHeight, childHeight, this.contentY)
      })
      this.updateScrollHeight(parentHeight, childHeight, this.contentY)
    },
    methods: {
      updateScrollHeight(parentHeight, childHeight, translateY) {
        let bar = this.$refs.scrollBar
        let barHeight = (parentHeight * parentHeight / childHeight)
        this.barHeight = barHeight
        bar.style.height = barHeight + 'px'
        let y = -(translateY * parentHeight / childHeight)
        this.scrollMoveY = y + 'px'
        this.scrollBarY = y
      },
      onMouseEnter() {
        this.scrollBarVisible = true
      },
      onMouseLeave() {
        // this.scrollBarVisible = false
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
        let maxHeight = this.parentHeight - this.barHeight
        this.endPosition = {x: screenX, y: screenY}
        let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
        this.scrollBarY = parseInt(this.scrollBarY) + delta.y
        if (this.scrollBarY < 0) {
          this.scrollBarY = 0
        } else if (this.scrollBarY > maxHeight) {
          this.scrollBarY = maxHeight
        }
        this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight)
        this.startPosition = this.endPosition
        this.$refs.scrollBar.style.transform = `translate(0px,${this.scrollBarY}px)`
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