<template>
    <div class="col" :class="colClass" 
    :style="colStyle"> 
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        }
    },
    data(){
        return {
             gutter: {
                type: [Number, String]
            },
            
        }
    },
    computed:{
        colClass(){
            let [span,offset]=[this.span,this.offset]
            return [span && `col-${span}`, offset && `offset-${offset}`]
        },
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'
            }
        } 
    }
}
</script>
<style lang="scss" scoped>
    .col{
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%
            }
        }
        $class1-prefix: offset-;
        @for $n from 1 through 24{
            &.#{$class1-prefix}#{$n}{
                margin-left: ($n / 24) * 100%
            }
        }
    }
</style>


