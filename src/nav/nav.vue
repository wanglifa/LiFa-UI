<template>
    <div class="lf-nav" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LiFaNav",
        props: {
            selected: {
                type: String,
            },
            vertical: {
                type: Boolean
            }
        },
        data(){
            return {
                item: [],
                namePath: []
            }
        },
        provide(){
            return {
                root: this,
                vertical: this.vertical
            }
        },
        mounted() {
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.updateChildren()
            this.listenToChildren()
        },
        methods: {
            addItem(vm){
                this.item.push(vm)
            },
            updateChildren: function () {
                this.item.forEach(vm => {
                    if(this.selected === vm.name) {
                        vm.selected = true
                    } else {
                        vm.selected = false
                    }
                })
            },
            listenToChildren(){
                this.item.forEach(vm=>{
                    vm.$on('update:selected', (name) => {
                        this.$emit('update:selected',name)
                    })
                })

            }
        }

    }
</script>

<style scoped lang="scss">
    @import "../../styles/var";
.lf-nav{
    display: flex;
    border-bottom: 1px solid $gray;
    color: $color;
    cursor: default;
    &.vertical{
        flex-direction: column;
        border: 1px solid $gray;
    }
}
</style>