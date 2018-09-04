<template>
    <div class="row" :gutter="gutter" :style="rowStyle" >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluRow',
    props: {
        gutter: {
            type: [Number, String]
        }
    },
    computed: {
        rowStyle(){
            return {
                marginLeft:-this.gutter/2+'px', 
                marginRight: -this.gutter/2+'px'
            }
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

    }
    
</style>

