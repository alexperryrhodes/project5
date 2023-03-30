import React from "react";
import { useState, useEffect } from "react";

function WeatherStat({ weatherArray, stat }) {
  const arraySize = weatherArray && weatherArray.length;
  let sum = 0;
    for (let i = 0; i < 24; i++) {
    sum = sum + weatherArray[i];
  }
  const avg = Math.round((sum / arraySize) * 10) / 10;

    return (
        < div className="stat" >
            <p>{ stat }</p>
    { avg }</div >);
}

export default WeatherStat;
