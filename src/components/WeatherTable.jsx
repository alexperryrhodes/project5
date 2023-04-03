import React from "react";
import { Link } from "react-router-dom";

function WeatherTable({ weatherJSON }) {

  const listItems =
    weatherJSON &&
      weatherJSON.map((d) => (
        <tr key={d.hour}>
          <td>{d.hour}</td>
          <td>{d.Temperature}° F</td>
          <td>{d.Precipitation}</td>
          <td>{d.UV}</td>
          <td><Link to={d.hour}>Click</Link></td>
        </tr>
      ))
  
  return (
    <div className="weather-table">
      <table>
        <thead>
          <tr>
            <td>Hour</td>
            <td>Temperature</td>
            <td>Precipitation</td>
            <td>UV</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
