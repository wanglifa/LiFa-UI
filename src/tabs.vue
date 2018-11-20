<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'GuluTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value) >=0
                }
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            return {
                eventBus: this.eventBus
            }
        },
        created(){
        
            //this.$emit('update:selected', $event.tagrget)
        
        },
        methods: {
            checkChildren(){
                if(this.$children.length === 0){
                    console && console.warn &&
                    console.warn('你tabs组件的子组件应该是tabs-head和tabs-body')
                }
            },
            selectTab(){
                this.$children.forEach(vm=>{
                    if(vm.$el.classList[0] === 'tabs-head'){
                        vm.$children.forEach(item=>{
                            this.eventBus.$emit('update:selected', this.selected,item)
                        })
                    }
                })
            }
        },
        mounted(){
            this.checkChildren()
            this.selectTab()   
        }
    }
</script>
<style lang="scss" scoped>
    .tabs{
        
    }
</style>