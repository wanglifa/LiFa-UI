export default {
    firstDayOfMonth(date) {
        let [year, month, day] = getYearMonthDate(date)
        return new Date(year, month, 1)
    },
    lastDayOfMonth(date) {
        let [year, month, day] = getYearMonthDate(date)
        return new Date(year, month + 1, 0)
    },
    getYearMonthDate,
    addMonth(date, n) {
        const [year, month, day] = getYearMonthDate(date)
        const newMonth = month + n
        // 因为date是用户传进来的所以我们不能直接修改，要重新生成一个
        const copy = new Date(date)
        copy.setMonth(newMonth)
        return copy
    },
    addYear(date, n) {
        const [year, month, day] = getYearMonthDate(date)
        const newMonth = year + n
        const copy = new Date(date)
        copy.setFullYear(newMonth)
        return copy
    }
}
function getYearMonthDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return [year, month, day]
}