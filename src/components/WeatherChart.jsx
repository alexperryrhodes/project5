import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function WeatherChart({ weatherJSON }) {
  return (
      <div className="lineChart">
          <h3>Hourly Temperature (° F)</h3>
      <LineChart
        width={550}
        height={550}
        data={weatherJSON}
              margin={{ top: 10, right: 5, bottom: 10, left: 5  }}
              padding
      >
        <Line type="monotone" dataKey="Temperature" stroke="#8884d8" />
        <XAxis
          dataKey="hour"
          interval={1}
          angle={45}
          height={150}
          label="Hour"
          dy={25}
              />
              <YAxis />
      </LineChart>
    </div>
  );
}

export default WeatherChart;
