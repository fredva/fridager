import React from "react";

import { countHolidays } from "./datefunctions";

export default function Rapport({ year }) {
  const numberOfHolidays = countHolidays(year);
  return (
    <div>
      <h2>
        {year}: {numberOfHolidays}
      </h2>
    </div>
  );
}
