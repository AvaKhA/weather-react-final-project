import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <li className="CityName">Tehran</li>
            <li>Saturday 8:00</li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
        <div class="col">
          <div className="TodayTemperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
            ></img>
            <span className="TemperatureValue">18</span>
            <span className="TemperatureUnit">°C</span>
          </div>
        </div>
        <div class="col">
          <ul className="WeatherInfo">
            <li>Precipitation: 1%</li>
            <li>Humidity: 15%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
