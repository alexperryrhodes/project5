import React from "react";
import { useState } from "react";
import WeatherTable from "./WeatherTable";
import WeatherStat from "./WeatherStat";
import WeatherChart from "./WeatherChart";

const WeatherDashboard = ({ weather }) => {
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        let filteredWeather = weather.filter(function (weatherItem) {
          return weatherItem.hour.startsWith(searchValue);
        });
        setFilteredResults(filteredWeather);
      };


    return ( 
        <div className="App">
        <h1>Hourly Weather</h1>
  
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
  };
  
  export default WeatherDashboard;