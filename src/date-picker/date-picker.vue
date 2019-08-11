<template>
  <div ref="wrapper" class="lifa-date-picker">
    <lf-popover position="bottom" :pop-class-name="c('popWrapper')" :container="x" ref="popover"
      @open="onOpen"
    >
      <lf-input type="text" :value="filterValue" @input="onInput" @change="onChange" ref="input"></lf-input>
      <template slot="content">
        <div class="lifa-date-picker-pop" @selectstart.prevent>
          <div class="lifa-date-picker-nav">
            <span :class="c('prevYear', 'navItem')" @click="onClickPrevYear"><lf-icon name="leftleft"></lf-icon></span>
            <span :class="c('prevMonth', 'navItem')" @click="onClickPrevMonth"><lf-icon name="left"></lf-icon></span>
            <span :class="c('yearAndMonth')">
              <span @click="onClickYear">{{display.year}}年</span>
              <span @click="onClickMonth">{{Number(display.month)+1}}月</span>
            </span>
            <span :class="c('nextMonth', 'navItem')" @click="onClickNextMonth"><lf-icon name="right"></lf-icon></span>
            <span :class="c('nextYear', 'navItem')" @click="onClickNextYear"><lf-icon
                name="rightright"></lf-icon></span>
          </div>
          <div class="lifa-date-picker-panels">
            <div class="lifa-date-picker-content">
              <template v-if="mode === 'month'">
                <div :class="c('selectMonth')">
                  <div :class="c('selects')">
                    <select name="" id="" @change="onSelectYear" v-model="display.year">
                      <option v-for="list in currentYear" :value="list" :key="list">{{list}}</option>
                    </select>年
                    <select name="" id="" @change="onSelectMonth" v-model="display.month">
                      <option v-for="item in 12" :value="item-1" :key="item">{{item}}</option>
                    </select>月
                  </div>
                  <div :class="c('returnToDayMode')">
                    <lf-button @click.native="onClickReturnToDayMode">返回</lf-button>
                  </div>
                </div>
              </template>
              <template v-else>
                <div :class="c('weekdays')">
                  <span v-for="i in [1,2,3,4,5,6,0]" :key="i" :class="c('weekday')">{{weekdays[i]}}</span>
                </div>
                <div v-for="item in 6" :class="c('row')" :key="item">
                  <span v-for="(day, index) in visibleDays.slice(item*7-7, item*7)" :key="index"
                        :class="[c('cell'), {currentMonth: isCurrentMonth(day),
                        selected: isSelected(day), today: isToday(day)}]"
                        @click="onGetDay(day)">
                    {{day.getDate()}}
                  </span>
                </div>
              </template>
            </div>
          </div>
          <div class="lifa-date-picker-actions">
            <lf-button style="margin-right: 4px" @click="onClickClear">清除</lf-button>
            <lf-button @click="onClickToday">今天</lf-button>
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
  import LfButton from '../button/button'

  export default {
    name: "LiFaDatePicker",
    components: {LfIcon, LfInput, LfPopover, LfButton},
    props: {
      value: {
        type: Date
      },
      startAndEndDate: {
        type: Array,
        default: () => [new Date(1990, 0, 1), helper.addYear(new Date(), 100)]
      }
    },
    data() {
      // 展示的年和月根据当前日期来获得
      let [year, month] = helper.getYearMonthDate(this.value || new Date())
      return {
        mode: 'days',
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        x: undefined,
        display: {year, month}
      }
    },
    mounted() {
      this.x = this.$refs.wrapper
      console.log('this.startAndEndDate')
      console.log(this.startAndEndDate)
      console.log(this.currentYear)
    },
    methods: {
      onInput(value) {
        let regex = /^\d{4}-\d{2}-\d{2}$/g
        // 如果日期格式匹配就更新面板
        if (value.match(regex)) {
          let [year, month, day] = value.split('-')
          month = month - 1
          this.display = {year, month}
          this.$emit('input', new Date(year, month, day))
        }
      },
      onChange() {
        // 输入完成的时候将当前的日期设置为符合格式的，也就是一开始修改的
        this.$refs.input.setRawValue(this.filterValue)
      },
      onOpen() {
        this.mode = 'year'
      },
      onClickReturnToDayMode(e) {
        e.stopPropagation()
        this.mode = 'year'
      },
      onSelectYear(e) {
        const year = e.target.value
        const d = new Date(year, this.display.month)
        if (d >= this.startAndEndDate[0] && d <= this.startAndEndDate[1]) {
          this.display.year = year
          console.log('aaaa')
        } else {
          e.target.value = this.display.year
        }
      },
      onSelectMonth(e) {
        const month = e.target.value
        const d = new Date(this.display.year, month)
        if (d >= this.startAndEndDate[0] && d <= this.startAndEndDate[1]) {
          this.display.month = month
          console.log('bbb')
        } else {
          e.target.value = this.display.month
        }
      },
      c(...classNames) {
        return classNames.map(className => `lifa-date-picker-${className}`)
      },
      onClickMonth() {
        console.log(this.mode)
        if (this.mode !== 'month') {
          this.mode = 'month'
        } else {
          this.mode = 'day'
        }
      },
      onClickYear() {
        this.mode = 'years'
      },
      onGetDay(date) {
        // 如果是当前月就可以点击
        if (this.isCurrentMonth(date)) {
          this.$emit('input', date)
          this.$refs.popover.close()
        }
      },
      isSelected(date) {
        // 当前选中的年月日等于对应的年月日就高亮
        if (!this.value) return
        let [y, m, d] = helper.getYearMonthDate(date)
        let [y1, m1, d1] = helper.getYearMonthDate(this.value)
        return y === y1 && m === m1 && d === d1
      },
      isCurrentMonth(date) {
        let [year1, month1] = helper.getYearMonthDate(date)
        // 如果是当前选中的年和月等于展示的年和月
        return year1 === Number(this.display.year) && month1 === Number(this.display.month)
      },
      isToday(date) {
        let [y, m, d] = helper.getYearMonthDate(date)
        let [y1, m1, d1] = helper.getYearMonthDate(new Date())
        return y === y1 && m === m1 && d === d1
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
      },
      onClickToday() {
        const today = new Date()
        // 让当前展示的月和年都变成当天对应的
        const [year, month] = helper.getYearMonthDate(today)
        this.display = {year, month}
        this.$emit('update:value', today)
      },
      onClickClear() {
        this.$emit('update:value', undefined)
        this.$refs.popover.close()
      }
    },
    computed: {
      currentYear() {
        return helper.range([this.startAndEndDate[0].getFullYear(), this.startAndEndDate[1].getFullYear() + 1])
      },
      visibleDays() {
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
        for (let i = 0; i < 42; i++) {
          // 因为一共是42天所以每次都在第一天后面加加
          arr.push(new Date(x + i * 3600 * 24 * 1000))
        }
        return arr
      },
      filterValue() {
        if (!this.value) return
        const [year, month, day] = helper.getYearMonthDate(this.value)
        return `${year}-${helper.pad2(month + 1)}-${helper.pad2(day)}`
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";

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
      cursor: not-allowed;

      &.currentMonth {
        color: black;

        &:hover {
          background: $blue;
          cursor: pointer;
          color: white;
        }
      }

      &.selected {
        border: 1px solid $blue;
      }

      &.today {
        background: $gray;
      }
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 6px;
    }

    &-selectMonth {
      width: 224px;
      height: 224px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    &-returnToDayMode {
      margin-top: 8px;
    }

    /deep/ &-popWrapper {
      padding: 0;
    }
  }
</style>