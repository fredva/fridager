function isWorkday(day) {
  return day >= 1 && day <= 5;
}

function dayOfWeek(year, month, day) {
  const dayIndex = new Date(year, month - 1, day).getDay();
  if (dayIndex === 0) {
    return 7;
  }
  return dayIndex;
}

function countHolidays(year) {
  const jan1st = isWorkday(dayOfWeek(year, 1, 1));
  const may1st = isWorkday(dayOfWeek(year, 5, 1));
  const may17th = isWorkday(dayOfWeek(year, 5, 17));
  const dec24th = isWorkday(dayOfWeek(year, 12, 24));
  const dec25th = isWorkday(dayOfWeek(year, 12, 25));
  const dec26th = isWorkday(dayOfWeek(year, 12, 26));
  const dec31st = isWorkday(dayOfWeek(year, 12, 31));

  return jan1st + may1st + may17th + dec24th + dec25th + dec26th + dec31st;
}

export { isWorkday, dayOfWeek, countHolidays };
