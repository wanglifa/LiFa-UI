<template>
  <div ref="wrapper" class="lifa-date-picker">
    <lf-popover position="bottom" :pop-class-name="c('popWrapper')" :container="x">
      <lf-input type="text"></lf-input>
      <template slot="content">
        <div class="lifa-date-picker-pop">
          <div class="lifa-date-picker-nav">
            <span><lf-icon name="leftleft"></lf-icon></span>
            <span><lf-icon name="left"></lf-icon></span>
            <span @click="onClickYear">2019年</span>
            <span @click="onClickMonth">8月</span>
            <span><lf-icon name="rightright"></lf-icon></span>
            <span><lf-icon name="right"></lf-icon></span>
          </div>
          <div class="lifa-date-picker-panels">
            <div v-if="mode==='years'" class="lifa-date-picker-content">年</div>
            <div v-else-if="mode === 'months'" class="lifa-date-picker-content">月</div>
            <div v-else class="lifa-date-picker-content">
              <div :class="c('weekdays')">
                <span v-for="i in [1,2,3,4,5,6,0]">{{weekdays[i]}}</span>
              </div>
              <div v-for="item in 6" :class="c('row')">
                <span v-for="day in visibleDays.slice(item*7-7, item*7)">
                  {{day.getDate()}}
                </span>
              </div>
            </div>
          </div>
          <div class="lifa-date-picker-actions">
            <button>清除</button>
          </div>
        </div>
      </template>
    </lf-popover>
  </div>
</template>

<script>
    import LfInput from '../input'
    import LfIcon from '../icon'
    import LfPopover from '../popover'
    import helper from './helper'
    export default {
        name: "LiFaDatePicker",
        components: {LfIcon, LfInput, LfPopover},
        data () {
            return {
                mode: 'days',
                value: new Date(),
                weekdays: ['日','一','二','三','四','五','六'],
                x: undefined
            }
        },
        mounted () {
          this.x = this.$refs.wrapper
        },
        methods: {
            c(className) {
              return `lifa-date-picker-${className}`
            },
            onClickMonth() {
                this.mode = 'months'
            },
            onClickYear() {
                this.mode = 'years'
            }
        },
        computed: {
            visibleDays () {
                let date = this.value
                let firstDay = helper.firstDayOfMonth(date)
                let lastDay = helper.lastDayOfMonth(date)
                let [year, month, day] = helper.getYearMonthDate(date)
                // 获取1号是星期几
                let n = firstDay.getDay()
                let arr = []
                // 获取日历显示中的第一天；因为是按照星期一到星期天排的星期天是0，所以如果一号是星期天前面应该有6天
                // （也就是应该减去6天可以得到日历现实的第一天），否则就是n-1天，所以需要再乘以3600 * 24 * 1000得到每天的毫秒数
                let x = firstDay - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
                for(let i = 0; i < 42; i++) {
                    // 因为一共是42天所以每次都在第一天后面加加
                    arr.push(new Date(x + i * 3600 * 24 * 1000 ))
                }
                return arr
            }
        }
    }
</script>

<style scoped lang="scss">
  .lifa-date-picker {
    &-nav {
      background: red;
    }
    /deep/ &-popWrapper {
      padding: 0;
    }
  }
</style>