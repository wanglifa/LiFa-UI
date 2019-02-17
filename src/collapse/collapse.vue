<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'LiFaCollapse',
        props: {
            signle: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
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
        mounted(){
            this.eventBus.$emit('update:selected',this.selected)
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            this.eventBus.$on('update:addSelected',(name)=>{ 
                if(this.signle){
                    selectedCopy = [name]
                }else {
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })
            this.eventBus.$on('update:removeSelected',(name)=>{
                
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index,1)
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })
            
            
        }
    }
</script>
<style lang="scss" scoped>
    $gray: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $gray;
        border-radius: $border-radius;
    }
</style>