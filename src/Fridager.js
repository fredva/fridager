import React from "react";
import Rapport from "./Rapport";
import Statistikk from "./Statistikk";

export default function Fridager() {
  const currentYear = new Date().getFullYear();
  const startYear = 1989
  const endYear = 2089
  const years = [...Array(10)].map((_, i) => i + currentYear);
  return (
    <div>
      <h1>Fridager</h1>
      {years.map(year => (
        <Rapport year={year} />
      ))}
      <Statistikk startYear={startYear} endYear={endYear} />
    </div>
  );
}
