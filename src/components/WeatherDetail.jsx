

function WeatherDetail({details}) {
    
  console.log(details)


  return (
    <div>
      <h2>Hourly Weather Details</h2>
      <h3>{details && details.hour}</h3>
      <p>Temperature: {details && details.Temperature}° F</p>
      <p>UV: {details && details.UV}</p>
      <p>Pressure: {details && details.Pressure}</p>
      <p>Wind: {details && details.Wind}</p>
      <p>Wind Direction: {details && details.Wind_Direction}</p>
      <p>Wind Degree: {details && details.Wind_Degree}°</p>
      <p>Condition: {details && details.Condition}</p>
      <p>Humidity: {details && details.Humidity}</p>
      <p>Cloud: {details && details.Cloud}%</p>
    </div>
  );
}

export default WeatherDetail;
