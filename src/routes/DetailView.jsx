import React from "react";
import WeatherDetail from "../components/WeatherDetail";
import { useParams } from "react-router-dom";

const DetailView = ({ weather }) => {
    const {hour} = useParams();
    const details = weather.filter(item => item.hour === hour)[0];

    return ( 
        <WeatherDetail details={details } />
    );
  };
  
  export default DetailView;