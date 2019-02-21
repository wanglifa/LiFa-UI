<template>
    <div class="lf-slides">
        <div class="lf-slides-window" ref="window">
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
              lastSelectedIndex: undefined
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
            updateChildren(){
                let selected = this.getSelected()
                this.$children.forEach((vm)=>{
                    vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    this.$nextTick(()=>{
                        vm.selected = selected
                    })
                })
            },
            automaticPlay(){
                let selected = this.getSelected()
                //拿到每一次的索引值，下次动画好在基础上累加
                let index = this.names.indexOf(selected)
                let run = ()=>{
                    let newIndex = index -1
                    if(newIndex < 0){
                        newIndex = this.names.length - 1
                    }
                    if(newIndex === this.names.length){
                        newIndex = 0
                    }
                    this.select(newIndex)
                    setTimeout(()=>{
                        run()
                    },3000)
                }
                setTimeout(run, 3000)
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
    border: 1px solid black;
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