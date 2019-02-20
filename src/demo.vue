<template>
    <div>
       <lf-slides :selected.sync="selected">
           <lf-slides-item name="1">
               <div class="box">1</div>
           </lf-slides-item>
           <lf-slides-item name="2">
               <div class="box">2</div>
           </lf-slides-item>
           <lf-slides-item name="3">
               <div class="box">3</div>
           </lf-slides-item>
       </lf-slides>
    </div>
</template>

<script>
   import LfSlides from './slides.vue'
   import LfSlidesItem from './slides-item.vue'
    export default {
        name: "demo",
        components: {
            LfSlides,
            LfSlidesItem
        },
        data(){
            return {
                selected: '2'
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 400px;
        background: gray;
        border: 1px solid black;
    }

</style>