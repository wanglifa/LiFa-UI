<template>
    <div class="lf-sub-nav" :class="{active,vertical}" v-click-outside="close">
        <span @click="open = !open" class="title">
            <slot name="title"></slot>
            <span class="icon" :class="{open,vertical}">
                <lf-icon name="right"></lf-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition @enter="enter" @leave="leave"
                        @after-enter="afterEnter" @after-leave="afterLeave"
            >
                <div class="popover" v-show="open" :class="{vertical}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="popover" v-show="open">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
    import ClickOutside from '../click-outside.js'
    import LfIcon from '../icon.vue'
    export default {
        name: "LiFaSubNav",
        data(){
            return {
                open: false,
            }
        },
        components: {LfIcon},
        directives: {ClickOutside},
        inject: ['root','vertical'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        computed: {
          active(){
              return this.root.namePath.indexOf(this.name) >= 0 ? true : false
          }
        },
        methods: {
            updateNamePath(){
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.root.namePath.push(this.name)
            },
            close(){
                this.open = false
            },
            enter(el, done){
                //先设置为auto来获取它的高度
                el.style.height = 'auto'
                let {height} = el.getBoundingClientRect()//113
                //然后让他等于0，因为高度的变化只能是数字之间0-113而不能是auto-113
                el.style.height = 0
                //之所以要加el.getBoundingClientRect()，是因为如果不加浏览器会对你的
                //多次赋值进行合并，也就是说你先赋值了0，接着赋值113，它只会记下你的最后这一次113
                //而如果你想让0也生效，就需要在它赋值后紧接着进行一个与高度有关的操作
                el.getBoundingClientRect()
                //最后让高度等于你元素自身的高度
                el.style.height = `${height}px`
                el.addEventListener('transitionend',()=>{
                    done()
                })
            },
            afterEnter(el){
                el.style.height='auto'
            },
            leave(el,done){
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect()
                el.style.height = 0
                //这里之所以要监听transitionend是因为如果直接写done的话它就会直接
                //display:none
                el.addEventListener('transitionend',()=>{
                    done()
                })
            },
            afterLeave(el){
                el.style.height = 'auto'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/var";
    .lf-sub-nav{
        position: relative;
        .icon{
            display: none;
        }
        .open{
            &.icon{
                transition: all .3s linear;
                transform: rotate(180deg);
            }
        }
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
        .title{
            padding: 10px 20px;
            display: flex;
            align-items: center;
            vertical-align: top;
        }
        .popover{
            position: absolute;
            top: 100%;
            left: 0;
            white-space: nowrap;
            background: white;
            margin-top: 1px;
            box-shadow: 0 0 3px fade_out(black, 0.8);
            border-radius: $border-radius;
            font-size: $font-size;
            color: $light-color;
            min-width: 8em;
            color: $light-color;
            font-size: $font-size;
            transition: all .5s;
            &.vertical{
                position: static;
                border-radius: 0;
                border: none;
                box-shadow: none;
                overflow: hidden;
            }
        }
    }
    .lf-sub-nav .lf-sub-nav .popover{
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
    .lf-sub-nav .lf-sub-nav{
        &.active{
            &::after{
                display: none;
            }
            color: $blue-color;
            >.title{
                .icon{
                    .lf-icon{
                        fill: $blue-color;
                    }
                }
            }
        }
        .icon{
            display: inline-flex;
            margin-left: 1em;
            fill: $light-color;
            &.vertical{
                transform: rotate(90deg);
                &.open{
                    transform: rotate(270deg);
                }
            }
        }
    }


</style>