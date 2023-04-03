import React from "react";

function WeatherTable({ weatherJSON }) {

  const listItems =
    weatherJSON &&
      weatherJSON.map((d) => (
        <tr key={d.hour}>
          <td>{d.hour}</td>
          <td>{d.Temperature}° F</td>
          <td>{d.Precipitation}</td>
          <td>{d.UV}</td>
          <td>Link</td>
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
            <td>Link</td>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
