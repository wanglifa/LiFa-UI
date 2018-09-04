<template>
    <div class="row" :gutter="gutter" :class="{gutter: gutter}" :style="{marginLeft:-gutter/2+'px', marginRight: -gutter/2+'px'}" >
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
    created(){},
    mounted(){
        console.log(this)
        this.$children.forEach((value)=>{
            value.gutter = this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        .col{
            width: 50%;
        }
    }
    
</style>

