import { useState, useEffect } from "react";
import "./App.css";
import WeatherTable from "./components/WeatherTable";
import WeatherStat from "./components/WeatherStat";
import { fetchWeatherData } from "./api";
import WeatherChart from "./components/WeatherChart";

function App() {
  const [weather, setWeather] = useState(null);
  const [date, setDate] = useState("2023-04-01");
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function startFetching() {
      setWeather(null);
      //console.log('date oj',date)
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

  //console.log("weather:", weather);

  const formatJSON = (json) => {
    //console.log("json:", json);
    const hour = json && json.forecast.forecastday[0].hour;
    const formattedJSON = [];

    //console.log("hour:", hour);

    hour.forEach((item) => {
      const dict = {};
      const date = new Date(item.time);
      const options = { hour: "numeric", minute: "numeric" };

      dict["hour"] = date.toLocaleTimeString("en-US", options);
      dict["Temperature"] = item.temp_f;
      dict["Precipitation"] = item.precip_in;
      dict["UV"] = item.uv;
      //console.log('dict', dict)
      formattedJSON.push(dict);
    });

    //console.log("formattedJSON:", formattedJSON);
    return formattedJSON;
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    let filteredWeather = weather.filter(function (weatherItem) {
      return weatherItem.hour.startsWith(searchValue);
    });
    //console.log("filt w:", filteredWeather);
    setFilteredResults(filteredWeather);
  };

  function handleSubmit(e) {
    e.preventDefault();
    //console.log('test');
    //console.log('date oj2', date)
  }

  return (
    <div className="App">
      <h1>Hourly Weather</h1>

      <div className="dateArea">
        <form onSubmit={handleSubmit}>
          <label>Pick Date:</label>
          <input
            className="Date"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="searchArea">
        <p>Search by Hour:</p>
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          onChange={(inputString) => searchItems(inputString.target.value)}
        />
      </div>

      <div className="statGroup">
        <WeatherStat weatherJSON={weather} stat="Temperature" />
        <WeatherStat weatherJSON={weather} stat="Precipitation" />
        <WeatherStat weatherJSON={weather} stat="UV" />
      </div>

      <div className="weatherData">
        {searchInput.length > 0 ? (
          <WeatherTable weatherJSON={filteredResults} />
        ) : (
          <WeatherTable weatherJSON={weather} />
        )}

        <WeatherChart weatherJSON={weather} />
      </div>
    </div>
  );
}

export default App;
