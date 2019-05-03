import React from "react";

import { countHolidays } from "./datefunctions";

export default function Statistikk({startYear, endYear}) {
  var holidayYearMap = {}
  for (var i = startYear; i <= endYear; i++) {
    let holidays = countHolidays(i);
    if (Object.keys(holidayYearMap).includes(""+holidays)) {
      holidayYearMap[holidays].push(i)
    } else {
      holidayYearMap[holidays] = [i]
    }
  }
  const keysAsNumbers = Object.keys(holidayYearMap).map(s => parseInt(s, 10));
  const bestHolidays = Math.max(...keysAsNumbers);
  const worstHolidays = Math.min(...keysAsNumbers);

  return (
    <div>
      <p>Best years between {startYear} and {endYear} with {bestHolidays} holidays: <br /> {holidayYearMap[bestHolidays].join(", ")} </p>
      <p>Worst years between {startYear} and {endYear} with {worstHolidays} holidays: <br /> {holidayYearMap[worstHolidays].join(", ")} </p>
    </div>
  );
}


