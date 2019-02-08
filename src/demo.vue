<template>
    <div>
        <g-cascader :source="source" height="200px" :selected="selected"
        @update:selected="onUpdateSelected"
        ></g-cascader>
    </div>
</template>

<script>
    import Button from './button/button.vue'
    import Cascader from  './cascader.vue'
    export default {
        name: "demo",
        components: {
            'g-button': Button,
            'g-cascader': Cascader
        },
        data(){
            return {
                source: [
                    {
                        name: '浙江',
                        children: [
                            {
                                name: '杭州',
                                children: [
                                    {name: '上城'},
                                    {name: '下城'},
                                    {name: '江干'}
                                ]
                            },{
                                name: '嘉兴',
                                children: [
                                    {name: '南湖'},
                                    {name: '秀洲'},
                                    {name: '嘉善'}
                                ]
                            }
                        ]
                    },
                    {
                        name: '福建',
                        children: [
                            {
                                name: '福州',
                                children: [
                                    {name: '鼓楼'},
                                    {name: '台江'},
                                    {name: '苍山'}
                                ]
                            }
                        ]
                    }
                ],
                selected: []
            }
        },
        methods: {
            onUpdateSelected(val){
                this.selected = val
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    body{
        font-size: var(--font-size);
    }

    html{
        --font-size: 14px;
    }

</style>