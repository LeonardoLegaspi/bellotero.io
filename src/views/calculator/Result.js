import React from "react";

function Result({ value, label }) {
  return (
    <div>
      <div>
        <span>$</span>
        <span>{value}</span>
      </div>
      <p>{label}</p>
    </div>
  );
}

export default Result;
