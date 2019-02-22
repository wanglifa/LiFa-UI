<template>
    <div class="lf-slides">
        <div class="lf-slides-window" ref="window" @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave" @touchstart="onTouchStart"
             @touchmove="onTouchMove" @touchend="onTouchEnd"
        >
            <transition name="fade">
                <div class="icon-wrapper">
                    <span class="left" @click="onClickPrev">
                        <i>&lt;</i>
                    </span>
                    <span class="right" @click="onClickNext">
                        <i>&gt;</i>
                    </span>
                </div>
            </transition>
            <div class="lf-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <ul class="dots" ref="ul">
            <li v-for="n in childrenLength" :class="{active: selectedIndex === n-1}"

            >

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LiFaslides",
        props: {
            selected: {
                type: String
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value){
                    return ['click','hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timerId: null,
                touchStart: null,
                isClickArrow: false,
                arrowClickInfo: false,
                eventType: 'click'
            }
        },
        mounted() {
            this.childrenLength = this.$children.length
            this.updateChildren()
            if (this.autoPlay) {
                this.automaticPlay()
            }
            if(this.trigger === 'hover'){
                this.eventType = 'mouseenter'
            }
            this.$nextTick(() => {
                this.li = this.$refs.ul.children
                for (let i = 0; i < this.li.length; i++) {
                    this.li[i].setAttribute('data-index',i)
                    this.li[i].addEventListener(this.eventType, this.triggerMethods)
                }
            })


        },
        updated() {
            this.updateChildren()
        },
        computed: {
            selectedIndex() {
                return this.names.indexOf(this.selected) || 0
            },
            names() {
                return this.$children.map(vm => vm.name)
            }
        },
        methods: {
            triggerMethods(e){
                let index = parseInt(e.target.getAttribute('data-index'))
                for (let j = 0; j < this.li.length; j++) {
                    this.li[j].classList.remove('active')
                }
                e.target.classList.add('active')
                this.select(index)
            },
            onClickPrev() {
                this.isClickArrow = true
                this.select(this.selectedIndex - 1)
                this.isClickArrow = false
            },
            onClickNext() {
                this.isClickArrow = true
                this.select(this.selectedIndex + 1)
                this.isClickArrow = false
            },
            onTouchStart(e) {
                if (e.touches.length > 1) {
                    return
                }
                this.touchStart = {clientX: e.touches[0].clientX, clientY: e.touches[0].clientY}
                this.pause()
            },
            onTouchMove(e) {
                console.log(e)
            },
            onTouchEnd(e) {
                let {clientX, clientY} = e.changedTouches[0]
                let [x1, y1] = [this.touchStart.clientX, this.touchStart.clientY]
                let [x2, y2] = [clientX, clientY]
                let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                let deltaY = Math.abs(y2 - y1)
                let rate = distance / deltaY
                if (rate > 2) {
                    if (clientX > this.touchStart && this.touchStart.clientX) {
                        this.isClickArrow = true
                        this.select(this.selectedIndex - 1)
                        this.isClickArrow = false
                    } else {
                        this.isClickArrow = true
                        this.select(this.selectedIndex + 1)
                        this.isClickArrow = false
                    }
                }
                if (this.autoPlay) {
                    this.automaticPlay()
                }
            },
            onMouseEnter() {
                this.pause()
            },
            onMouseLeave() {
                if (this.autoPlay) {
                    this.automaticPlay()
                }
            },
            pause() {
                window.clearTimeout(this.timerId)
                this.timerId = null
            },
            updateChildren() {
                let selected = this.getSelected()
                this.$children.forEach((vm) => {
                    let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    //如果是自动滚动的情况下
                    if (this.timerId || this.arrowClickInfo) {
                        //如果上一张是第一张，当前这张是最后一张（也就是反向动画的时候）就让它依然是反向动画
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length - 1) {
                            reverse = true
                        }
                        //如果上一张是最后一张，当前这张是第一张（也就是正向动画的时候）就让它依然是正向
                        if (this.lastSelectedIndex === this.names.length - 1 && this.selectedIndex === 0) {
                            reverse = false
                        }
                    }
                    vm.reverse = reverse
                    this.$nextTick(() => {
                        vm.selected = selected
                    })
                })
            },
            automaticPlay() {
                //如果当前正在轮播中就不再次执行这个方法
                if (this.timerId) {
                    return
                }
                let selected = this.getSelected()
                //拿到初始的索引值
                let index = this.names.indexOf(selected)
                let run = () => {
                    this.newIndex = index + 1
                    this.select(this.newIndex)
                    index = this.newIndex
                    this.timerId = setTimeout(() => {
                        run()
                    }, 3000)
                }
                this.timerId = setTimeout(run, 3000)
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.$attrs.name
            },
            select(newIndex) {
                this.arrowClickInfo = this.isClickArrow
                if (newIndex < 0) {
                    newIndex = this.names.length - 1
                }
                if (newIndex >= this.names.length) {
                    newIndex = 0
                }
                //让newIndex等于条件内的newIndex
                this.newIndex = newIndex
                //当选中新的index的时候，就把旧的index赋给lastSelectedIndex
                this.lastSelectedIndex = this.selectedIndex
                //然后把新的index和选中值传给selected
                this.$emit('update:selected', this.names[newIndex])
            }
        }
    }
</script>

<style scoped lang="scss">
.lf-slides{
    display: block;
    &-window{
        overflow: hidden;
        position: relative;
        .left,.right{
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,.2);
            width: 3em;
            height: 3em;
            border-radius: 50%;
            * {
                font-style: normal;
                color: #fff;
            }
        }
        .left{
            left: 1em;
        }
        .right{
            right: 1em;
        }
        .fade-enter-active,.fade-leave-active{
            transition: all .5s;
        }
        .fade-enter,.fade-leave-to{
            opacity: 0;
            .left{
                left: -100%;
            }
            .right{
                right: -100%;
            }
        }
    }
    &-wrapper{
        position: relative;
        display: flex;
    }
    .dots{
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            list-style: none;
            width: 4em;
            height: 4px;
            background: #ccc;
            margin: 0.2em;
            cursor: pointer;
            &.active{
                background: #4fa6ff;
            }
        }
    }
}
</style>