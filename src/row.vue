<template>
    <div class="row" :gutter="gutter" :style="rowStyle" :align="align" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluRow',
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator(value){
                return ['left','right','center'].includes(value)
            }
        },
    },
    computed: {
        rowStyle(){
            return {
                marginLeft:-this.gutter/2+'px', 
                marginRight: -this.gutter/2+'px'
            }
        },
        rowClass(){
            let {align} = this;
            return align && `align-${align}`
        }
    },
    mounted(){
        this.$children.forEach((value)=>{
            value.gutter = this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-right{
            justify-content: flex-end;
        }
    }
    
</style>

