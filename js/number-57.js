const days_Name = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const Date_To_Day = (dt) => {
    if (typeof dt !== 'string') {
        return 'Argument should be string!'
    }
    // extract the date
    let [day, month, year] = dt.split('/').map((x) => Number(x))
    // check the data are valid or not.
    if (day < 1 || day > 31 || month > 12 || month < 1) {
        return 'Not a valid Date!'
    }
    if (month < 3) {
        year--
        month += 12
    }
    const year_Digits = year % 100
    const century = Math.floor(year / 100)
    const week_Day = (day + Math.floor((month + 1) * 2.6) + year_Digits + Math.floor(year_Digits / 4) + Math.floor(century / 4) + 5 * century) % 7
    return days_Name[week_Day]
}
console.log(Date_To_Day("07/11/2000"))
console.log(Date_To_Day("11/06/2017"))
console.log(Date_To_Day("11/26/2017"))
