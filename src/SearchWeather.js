import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import WeatherContent from "./WeatherContent";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function handleForecast(response) {
    setWeatherForecast({
      ready: true,
      forecast: response.data,
    });
  }

  function search() {
    const apiKey = "4t9745130oa799ebb6790aa4023f7f9a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrlForecast).then(handleForecast);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div class="container text-center">
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter a city..."
              aria-describedby="button-addon2"
              onChange={handleCityInput}
            ></input>
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </form>
        <WeatherContent data={weatherData} />
        <WeatherForecast data={weatherForecast} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
