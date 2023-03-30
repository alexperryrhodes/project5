import { useState, useEffect } from "react";
import "./App.css";
import WeatherTable from "./components/WeatherTable";
import WeatherStat from "./components/WeatherStat";

function App() {
  const [weather, setWeather] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/history.json?key=2436f386044444adac815931221804&q=Cupertino&dt=2023-03-28"
      );
      const json = await response.json();
      const day = json.forecast.forecastday[0].hour;
      setWeather(day);
    };
    fetchWeatherData().catch(console.error);
  }, []);

  const timeList = [];
  const tempList = [];
  const precipList = [];
  const uvList = [];
  const formattedJSON = {};

  const formatJSON = (json) => {
    json &&
      json.forEach((item) => {
        timeList.push(item.time);
        tempList.push(item.temp_f);
        precipList.push(item.precip_in);
        uvList.push(item.uv);
        formattedJSON[item.time] = [item.temp_f, item.precip_in, item.uv];
      });
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

    if (searchValue !== "") {
      let filteredData = formattedJSON[searchValue]
      filteredData = [searchValue, ...filteredData]
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(formattedJSON));
    }
  };

  return (
    <div className="App">
      <h1>Weather</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />

      <div className="statGroup">
      <WeatherStat weatherArray={tempList} stat="Temperature"/>
      <WeatherStat weatherArray={precipList} stat="Precipitation"/>
        <WeatherStat weatherArray={uvList} stat="UV"/>
        </div>
      {searchInput.length > 0 ? (
        <WeatherTable weather={filteredResults} type="filtered"/>
      ) : (
        <WeatherTable weather={weather} type="raw"/>
      )}

      {formatJSON(weather)}
    </div>
  );
}

export default App;
