<template>
    <div class="col" :class="colClass" 
    :style="colStyle"> 
        <slot></slot>
    </div>
</template>
<script>
let validator = (value)=>{
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach((key)=>{
        if(!['span','offset'].includes(key)){
            valid = false
        }
    })
    return valid;
}
export default {
    name: 'LiFaCol',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        },
        ipad: {
            type: Object,
            validator,
        },
        narrowPc: {
            type: Object,
            validator,
        },
        pc: {
            type: Object,
            validator,
        },
        widePc: {
            type: Object,
            validator,
        }
    },
    data(){
        return {
             gutter: {
                type: [Number, String]
            },
            
        }
    },
    methods: {
        //str=''的意思是如果你不传入第二个参数，那么str=''
        createClasses(obj,str=''){
            let arr = []
            if(obj){
                if(obj.span){
                    arr.push(`col-${str}${obj.span}`)
                }
                if(obj.offset){
                    arr.push(`offset-${str}${obj.offset}`)
                }
            }
            return arr;
        }
    },
    computed:{
        colClass(){
            let {span,offset,ipad,narrowPc,pc,widePc} = this
            let createClasses = this.createClasses
            return [
                //span和offset都是变量，在调用组件的时候比如<g-col span="24" offset="0"></g-col>
                //这时候就相当于x({span:'24',offset:'0'})
                ...createClasses({span,offset}),
                ...createClasses(ipad,'ipad-'),
                ...createClasses(narrowPc, 'narrow-pc-'),
                ...createClasses(pc, 'pc-'),
                ...createClasses(widePc, 'wide-pc-'),
                //之所以使用...，是因为createClasses返回的是一个数组，而这里面有多个createClasses也就是多个数组，使用...可以将数组连接起来，比如上面的createClasses({span,offset})最后得到的是[col-24,offset-0]，而假设createClasses(ipad,'ipad-')得到的是[col-ipad-2]，那么在他们前面都加...就相当于[col-24,offset-0,col-ipad-2]
            ]
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
        @media screen and (min-width: 577px){
            $class-prefix: col-ipad-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%
                }
            }
            $class1-prefix: offset-ipad-;
            @for $n from 1 through 24{
                &.#{$class1-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%
                }
            }
        }
        @media screen and (min-width: 768px){
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%
                }
            }
            $class1-prefix: offset-narrow-pc-;
            @for $n from 1 through 24{
                &.#{$class1-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%
                }
            }
        }
        @media screen and (min-width: 993px){
            $class-prefix: col-pc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%
                }
            }
            $class1-prefix: offset-pc-;
            @for $n from 1 through 24{
                &.#{$class1-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%
                }
            }
        }
        @media screen and (min-width: 1201px){
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%
                }
            }
            $class1-prefix: offset-wide-pc-;
            @for $n from 1 through 24{
                &.#{$class1-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%
                }
            }
        }
    }
</style>


