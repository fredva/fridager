function isWorkday(day) {
    return day >= 1 && day <= 5
}

function dayOfWeek(year, month, day) {
    const dayIndex = new Date(year, month - 1, day).getDay()
    if (dayIndex == 0) {
        return 7
    }
    return dayIndex
}

export { isWorkday, dayOfWeek }