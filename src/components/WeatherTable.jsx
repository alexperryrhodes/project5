import React from "react";
import { useState, useEffect } from "react";

function WeatherTable({ weather, type }) {

  const listItems =
    type == "raw" ?
    weather &&
      weather.map((d) => (
        <tr key={d.time}>
          <td>{d.time}</td>
          <td>{d.temp_f}° F</td>
          <td>{d.precip_in}</td>
          <td>{d.uv}</td>
        </tr>
      )) :
      weather &&
      <tr>
          <td>{weather[0]}</td>
          <td>{weather[1]}° F</td>
          <td>{weather[2]}</td>
          <td>{weather[3]}</td>
        </tr>
  

  return (
    <div className="weather-table">
      <table>
        <thead>
          <tr>
            <td>Hour</td>
            <td>Temperature</td>
            <td>Precipitation</td>
            <td>UV</td>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
