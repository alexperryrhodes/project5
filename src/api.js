export async function fetchWeatherData(date) {
    const response = await fetch(
        "http://api.weatherapi.com/v1/history.json?key=2436f386044444adac815931221804&q=Cupertino&dt=" + date
    );
    const json = await response.json();
    return json
}