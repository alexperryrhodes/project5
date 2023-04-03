import React from "react";

function WeatherStat({ weatherJSON, stat }) {
  //console.log("weatherArray", weatherJSON);
  //console.log("stat", stat)

  const arraySize = weatherJSON && weatherJSON.length;
  //console.log("arraySize", arraySize)

  let sum = 0;
  for (let i = 0; i < arraySize; i++) {
    const weatherItem = weatherJSON[i];
    const statValue = weatherItem[stat];
    //console.log(statValue);
    sum = sum + statValue;
  }
  const avg = Math.round((sum / arraySize) * 10) / 10;

  return (
    <div className="stat">
      <div className="statName">
      <p>Average</p>
      <p>{stat}</p>
      </div>
      <p>{avg}</p>
    </div>
  );
}

export default WeatherStat;
