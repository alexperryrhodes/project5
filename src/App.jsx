import { useState, useEffect } from "react";
import WeatherDashboard from "./components/WeatherDashboard";
import DetailView from "./routes/DetailView";
import HomeButton from "./components/HomeButton";
import "./App.css";

import { fetchWeatherData } from "./api";

import { useRoutes } from "react-router-dom";

function App() {
  const [weather, setWeather] = useState(null);
  const [date, setDate] = useState("2023-04-01");

  useEffect(() => {
    async function startFetching() {
      setWeather(null);
      const result = await fetchWeatherData(date);
      if (!ignore) {
        const day = formatJSON(result);
        setWeather(day);
      }
    }
    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [date]);


  const formatJSON = (json) => {
    const hour = json && json.forecast.forecastday[0].hour;
    const formattedJSON = [];

    hour.forEach((item) => {
      const dict = {};
      const date = new Date(item.time);
      const options = { hour: "numeric", minute: "numeric" };

      dict["hour"] = date.toLocaleTimeString("en-US", options);
      dict["Temperature"] = item.temp_f;
      dict["Precipitation"] = item.precip_in;
      dict["UV"] = item.uv;
      dict["Pressure"] = item.pressure_in;
      dict["Wind"] = item.wind_mph;
      dict["Wind_Direction"] = item.wind_dir;
      dict["Wind_Degree"] = item.wind_degree;
      dict["Condition"] = item.condition.text;
      dict["Humidity"] = item.wind_mph;
      dict["Cloud"] = item.cloud;

      //console.log('dict', dict)
      formattedJSON.push(dict);
    });

    //console.log("formattedJSON:", formattedJSON);
    return formattedJSON;
  };


  let element = useRoutes([
    {
      path: "/",
      element: <WeatherDashboard weather={weather} />,
    },
    {
      path: "/:hour",
      element: <DetailView weather={weather} />,
    },
  ]);

  return (<div>
    <HomeButton />
    {element}
  </div>);
}

export default App;
