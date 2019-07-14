<template>
  <div>
    <lf-popover position="bottom">
      <lf-input type="text"></lf-input>
      <template slot="content">
        <div class="lifa-date-picker-pop">
          <div class="lifa-date-picker-nav">
            <span><lf-icon name="settings"></lf-icon></span>
            <span><lf-icon name="settings"></lf-icon></span>
            <span @click="onClickYear">2019年</span>
            <span @click="onClickMonth">8月</span>
          </div>
          <div class="lifa-date-picker-panels">
            <div v-if="mode==='years'" class="lifa-date-picker-content">年</div>
            <div v-else-if="mode === 'months'" class="lifa-date-picker-content">月</div>
            <div v-else class="lifa-date-picker-content">
              <div v-for="item in 6">
                <span v-for="day in visibleDays.slice(item*7-7, item*7)">
                  {{day.getDate()}}
                </span>
              </div>
            </div>
          </div>
          <div class="lifa-date-picker-actions"></div>
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
                value: new Date()
            }
        },
        mounted () {

        },
        methods: {
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
                let arr = []
                // firstDay.getDate()得到这个月的第一天也就是1，lastDay.getDate()得到最后一天如31
                for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
                    arr.push(new Date(year, month, i))
                }
                let arr1 = []
                // 如果1号是周日那么firstDay.getDay() = 0，前面要加上个月的6天，否则直接减1
                let arr1Length = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
                for (let i = 0; i <= arr1Length; i++) {
                    // 当前月的天数从1号开始往上减就到了上个月，如2月1号减1，就是1月31
                    arr1.push(new Date(year, month, -i))
                }
                arr1.reverse()
                let arr2 = []
                for (let i = 0; i< 42- (arr.length + arr1.length);i++) {
                    // 因为每个月都是从1号开始所以加1
                    arr2.push(new Date(year, month+1, 1+i))
                }
                return [...arr1, ...arr, ...arr2]
            }
        }
    }
</script>

<style scoped>

</style>