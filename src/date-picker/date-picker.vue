<template>
  <div ref="wrapper" class="lifa-date-picker">
    <lf-popover position="bottom" :pop-class-name="c('popWrapper')" :container="x">
      <lf-input type="text" :value="filterValue"></lf-input>
      <template slot="content">
        <div class="lifa-date-picker-pop">
          <div class="lifa-date-picker-nav">
            <span :class="c('prevYear', 'navItem')" @click="onClickPrevYear"><lf-icon name="leftleft"></lf-icon></span>
            <span :class="c('prevMonth', 'navItem')" @click="onClickPrevMonth"><lf-icon name="left"></lf-icon></span>
            <span :class="c('yearAndMonth')">
              <span @click="onClickYear">{{display.year}}年</span>
              <span @click="onClickMonth">{{display.month+1}}月</span>
            </span>
            <span :class="c('nextMonth', 'navItem')" @click="onClickNextMonth"><lf-icon name="right"></lf-icon></span>
            <span :class="c('nextYear', 'navItem')" @click="onClickNextYear"><lf-icon name="rightright"></lf-icon></span>
          </div>
          <div class="lifa-date-picker-panels">
            <div v-if="mode==='years'" class="lifa-date-picker-content">年</div>
            <div v-else-if="mode === 'months'" class="lifa-date-picker-content">月</div>
            <div v-else class="lifa-date-picker-content">
              <div :class="c('weekdays')">
                <span v-for="i in [1,2,3,4,5,6,0]" :key="i" :class="c('weekday')">{{weekdays[i]}}</span>
              </div>
              <div v-for="item in 6" :class="c('row')" :key="item">
                <span v-for="(day, index) in visibleDays.slice(item*7-7, item*7)" :key="index"
                      :class="[c('cell'), {currentMonth: isCurrentMonth(day)}]" @click="onGetDay(day)">
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
        props: {
          value: {
              type: Date,
              default: () => new Date()
          }
        },
        data () {
            // 展示的年和月根据当前日期来获得
            let [year, month] = helper.getYearMonthDate(this.value)
            return {
                mode: 'days',
                weekdays: ['日','一','二','三','四','五','六'],
                x: undefined,
                display: {year, month}
            }
        },
        mounted () {
          this.x = this.$refs.wrapper
        },
        methods: {
            c(...classNames) {
                return classNames.map(className => `lifa-date-picker-${className}`)
            },
            onClickMonth() {
                this.mode = 'months'
            },
            onClickYear() {
                this.mode = 'years'
            },
            onGetDay(date) {
                // 如果是当前月就可以点击
                if (this.isCurrentMonth(date)) {
                    this.$emit('input', date)
                }
            },
            isCurrentMonth(date) {
                let [year1, month1] = helper.getYearMonthDate(date)
                // 如果是当前选中的年和月等于展示的年和月
                return year1 === this.display.year && month1 === this.display.month
            },
            onClickPrevMonth() {
                // 当前日期
                const oldDate = new Date(this.display.year, this.display.month, 1)
                // 点击上一个月的日期
                const newDate = helper.addMonth(oldDate, -1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
            onClickPrevYear() {
                const oldDate = new Date(this.display.year, this.display.month, 1)
                const newDate = helper.addYear(oldDate, -1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
            onClickNextMonth() {
                const oldDate = new Date(this.display.year, this.display.month, 1)
                const newDate = helper.addMonth(oldDate, 1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
            onClickNextYear() {
                const oldDate = new Date(this.display.year, this.display.month, 1)
                const newDate = helper.addYear(oldDate, 1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            }
        },
        computed: {
            visibleDays () {
                // 界面展示的当前月的日期，所以也根据display来确定
                let date = new Date(this.display.year, this.display.month, 1)
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
            },
            filterValue () {
                const [year, month, day] = helper.getYearMonthDate(this.value)
                return `${year}-${month+1}-${day}`
            }
        }
    }
</script>

<style scoped lang="scss">
  .lifa-date-picker {
    &-nav {
      display: flex;
    }
    &-yearAndMonth {
      margin: auto;
    }
    &-cell, &-weekday, &-navItem {
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    &-cell {
      color: #ddd;
      &.currentMonth {
        color: black;
      }
    }
    /deep/ &-popWrapper {
      padding: 0;
    }
  }
</style>