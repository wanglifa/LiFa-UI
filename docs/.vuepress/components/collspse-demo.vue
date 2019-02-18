<template>
    <div class="toggle-line">
        <div class="bottom" :class="{active: isActive}">

                <slot name="one"></slot>

            <pre><slot name="two"></slot></pre>
        </div>
        <div class="control" @click="toggle">
            <div v-if="!isActive">
                ▼<span>显示代码</span>
            </div>
            <div v-else>
                ▲<span>隐藏代码</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collspse-demo",
        data(){
            return {
                isActive: false
            }
        },
        methods: {
            toggle(){
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style scoped lang="scss">
    .bottom{
        padding: 0px 24px;
        transition: all .3s linear;
        height: 0;
        overflow: hidden;
        &.active{
            height: 100%;
            transition: all .3s linear;
        }
    }
    .control{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ebebeb;
        font-size: 12px;
        height: 44px;
        border-top: solid 1px #eaeefb;
        box-sizing: border-box;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        cursor: pointer;
        span{
            margin-left: 10px;
        }
        &:hover{
            background-color: #f9fafc;
            &.control,span{
                color: #409eff;
            }
        }
    }
</style>