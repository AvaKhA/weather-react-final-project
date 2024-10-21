import React from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  /*const [city, setCity] = useState(props.defaultCity);*/

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "4t9745130oa799ebb6790aa4023f7f9a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div class="container text-center">
        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter a city..."
              aria-describedby="button-addon2"
            ></input>
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </form>
        <div class="row first-row">
          <div class="col ">
            <ul className="WeatherInfo">
              <li className="CityName">{weatherData.city}</li>
              <li>
                <FormatDate date={weatherData.date} />
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div class="col">
            <div className="TodayTemperature">
              <img src={weatherData.icon} alt="weather icon"></img>
              <span className="TemperatureValue">
                {weatherData.temperature}
              </span>
              <span className="TemperatureUnit">°C</span>
            </div>
          </div>
          <div class="col">
            <ul className="WeatherInfo">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
