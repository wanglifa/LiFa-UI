<template>
    <div class="lf-slides">
        <div class="lf-slides-window" ref="window" @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        >
            <div class="lf-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <ul class="dots">
            <li v-for="n in childrenLength" :class="{active: selectedIndex === n-1}"
            @click="select(n-1)"
            >
                {{n-1}}
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
            }
        },
        data(){
          return {
              childrenLength: 0,
              lastSelectedIndex: undefined,
              timerId: null
          }
        },
        mounted() {
            this.childrenLength = this.$children.length
            this.updateChildren()
            this.automaticPlay()
        },
        updated() {
            this.updateChildren()
        },
        computed: {
          selectedIndex(){
              return this.names.indexOf(this.selected) || 0
          },
          names(){
              return this.$children.map(vm=>vm.name)
          }
        },
        methods: {
            onMouseEnter(){
                this.pause()
            },
            onMouseLeave(){
              this.automaticPlay()
            },
            pause(){
              window.clearTimeout(this.timerId)
              this.timerId = null
            },
            updateChildren(){
                let selected = this.getSelected()
                this.$children.forEach((vm)=>{
                    vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    //如果上一张是第一张，当前这张是最后一张（也就是反向动画的时候）就让它依然是反向动画
                    if(this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length-1){
                        vm.reverse = true
                    }
//如果上一张是最后一张，当前这张是第一张（也就是正向动画的时候）就让它依然是正向
if(this.lastSelectedIndex === this.names.length-1 && this.selectedIndex === 0){
    vm.reverse = false
}
                    this.$nextTick(()=>{
                        vm.selected = selected
                    })
                })
            },
            automaticPlay(){
                //如果当前正在轮播中就不再次执行这个方法
                if(this.timerId){
                    return
                }
                let selected = this.getSelected()
                //拿到初始的索引值
                let index = this.names.indexOf(selected)
                let run = ()=>{
                    let newIndex = index +1
                    if(newIndex < 0){
                        newIndex = this.names.length - 1
                    }
                    if(newIndex === this.names.length){
                        newIndex = 0
                    }
                    index = newIndex
                    this.select(newIndex)
                    this.timerId =setTimeout(()=>{
                        run()
                    },3000)
                }
                this.timerId = setTimeout(run, 3000)
            },
            getSelected(){
                let first = this.$children[0]
                return this.selected || first.$attrs.name
            },
            select(index){
                //当选中新的index的时候，就把旧的index赋给lastSelectedIndex
                this.lastSelectedIndex = this.selectedIndex
                //然后把新的index和选中值传给selected
                this.$emit('update:selected',this.names[index])
            }
        }
    }
</script>

<style scoped lang="scss">
.lf-slides{
    display: block;
    &-window{
        overflow: hidden;
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
            &.active{
                color: red;
            }
        }
    }
}
</style>