import React from "react";
import Rapport from "./Rapport";

export default function Fridager() {
  const currentYear = new Date().getFullYear();
  const years = [...Array(10)].map((_, i) => i + currentYear);
  return (
    <div>
      <h1>Fridager</h1>
      {years.map(year => (
        <Rapport year={year} />
      ))}
    </div>
  );
}
