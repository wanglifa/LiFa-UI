<template>
    <div class="lifa-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
        <span class="lifa-pager-nav prev"
              :class="{disabled: currentPage === 1}"
              @click="onClickPage(currentPage-1)"
        >
            <lf-icon name="left"></lf-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page === currentPage">
                <span class="active lifa-pager-item">{{page}}</span>
            </template>
            <template v-else-if="page === '...'">
                <lf-icon class="separator" name="dots">...</lf-icon>
            </template>
            <template v-else>
                <span class="lifa-pager-item other" @click="onClickPage(page)">{{page}}</span>
            </template>
        </template>
        <span class="lifa-pager-nav next"
              :class="{disabled: currentPage === totalPage}"
              @click="onClickPage(currentPage+1)"
        >
            <lf-icon name="right"></lf-icon>
        </span>
    </div>
</template>

<script>
    import LfIcon from  './icon.vue'
    export default {
        name: "LiFaPager",
        data() {
            return {
                page: []
            }
        },
        components: {
          LfIcon
        },
        props: {
            totalPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
            hideIfOnePage: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            unique() {
                let hash = {}
                this.page.map(num=>{
                    hash[num] = true
                })
                return Object.keys(hash).map(num=>Number(num))
            },
            omit() {
                this.page.map((item, index) => {
                    if(this.page[index+1]-this.page[index] > 1 && this.page[index+1]){
                        this.page.splice(index+1,0,'...')
                    }
                })
            },
            onClickPage(page){
                if(page <= 0 || page > this.totalPage){
                    return
                }
                this.$emit('update:current-page',page)
            }
        },
        computed: {
          pages(){
              let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
              this.page = pages.filter(n=>n > 0 && n <= this.totalPage ).sort((a, b) => a - b)
              this.page = this.unique()
              this.omit()
              return this.page
          }
        },
    }
</script>

<style scoped lang="scss">
    @import "var";
    .lifa-pager{
        display: flex;
        align-items: center;
        $width: 20px;
        $height: 20px;
        $font-size: 12px;
        user-select: none;
        &.hide{
            display: none;
        }
        .separator{
            width: $width;
            font-size: 14px;
            margin: 0 4px;
        }
        &-item{
            border: 1px solid #e1e1e1;
            border-radius: $border-radius;
            padding: 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: $font-size;
            min-width: $width;
            height: $height;
            margin: 0 4px;
            cursor: pointer;
            &.active,&:hover{
                border-color: $blue;
                color: $blue;
            }
            &.active{
                cursor: default;
            }
        }
        &-nav{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: $gray;
            height: $height;
            width: $width;
            border-radius: $border-radius;
            font-size: $font-size;
            padding: 4px;
            border: 1px solid $gray;
            margin: 0 4px;
            cursor: pointer;
            &.disabled{
                cursor: not-allowed;
                svg{
                    fill: darken($gray,30%);
                }
            }
        }
    }
</style>