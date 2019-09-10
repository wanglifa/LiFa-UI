<template>
  <div class="lifa-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave" @wheel="onWheel"
  >
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
        childHeight: undefined,
        maxHeight: undefined
      }
    },
    props: {
      height: {
        type: String
      }
    },
    mounted() {
      this.listenerDocument()
      this.$refs.parent.style.height = this.height
      this.parentHeight = this.$refs.parent.getBoundingClientRect().height
      this.childHeight = this.$refs.child.getBoundingClientRect().height
      this.maxHeight = this.calculateContentYMax()
      this.updateScrollHeight()
    },
    methods: {
      listenerDocument () {
        document.addEventListener('mousemove', e => {
          console.log('哈哈哈')
          this.onMouseMoveScrollBar(e)
        })
        document.addEventListener('mouseup', e => this.onMouseUpScrollBar(e))
      },
      calculateContentYMax () {
        let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(this.$refs.parent)
        borderTopWidth = parseInt(borderTopWidth)
        borderBottomWidth = parseInt(borderBottomWidth)
        paddingTop = parseInt(paddingTop)
        paddingBottom = parseInt(paddingBottom)
        let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
        return maxHeight
      },
      calculateContentYFromDeltaY (deltaY) {
        if (deltaY > 20) {
          this.contentY -= 20 * 3
        } else if (deltaY < -20) {
          this.contentY -= -20 * 3
        } else {
          this.contentY -= deltaY * 3
        }
      },
      calculateScrollBarYMaxAndMin (e) {
        let maxHeight = this.parentHeight - this.barHeight
        this.endPosition = {x: e.screenX, y: e.screenY}
        let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
        this.scrollBarY = parseInt(this.scrollBarY) + delta.y
        if (this.scrollBarY < 0) {
          this.scrollBarY = 0
        } else if (this.scrollBarY > maxHeight) {
          this.scrollBarY = maxHeight
        }
      },
      onWheel (e) {
        this.calculateContentYFromDeltaY(e.deltaY)
        if (this.contentY > 0) {
          this.contentY = 0
        } else if (this.contentY < -this.maxHeight) {
          this.contentY = -this.maxHeight
        } else {
          e.preventDefault()
        }
        this.updateScrollHeight()
      },
      updateScrollHeight() {
        this.barHeight = (this.parentHeight * this.parentHeight / this.childHeight)
        this.$refs.scrollBar.style.height = this.barHeight + 'px'
        let y = -(this.contentY * this.parentHeight / this.childHeight)
        this.scrollMoveY = y + 'px'
        this.scrollBarY = y
      },
      onMouseEnter() {
        this.scrollBarVisible = true
      },
      onMouseLeave() {
        // this.scrollBarVisible = false
        // this.isScrolling = false
      },
      onMouseDownScrollBar(e) {
        this.isScrolling = true
        let {screenX, screenY} = e
        this.startPosition = {x: screenX, y: screenY}
      },
      onMouseMoveScrollBar(e) {
        if (!this.isScrolling) return
        this.calculateScrollBarYMaxAndMin(e)
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