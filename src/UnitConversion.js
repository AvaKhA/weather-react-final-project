import React, { useState } from "react";
import "./SearchWeather.css";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="TodayTemperature">
        <span className="TemperatureValue">{Math.round(props.data)}</span>
        <span className="TemperatureUnit">
          ℃|
          <a
            href="#"
            onClick={showFahrenheit}
            class="link-offset-2 link-underline link-underline-opacity-0"
          >
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TodayTemperature">
        <span className="TemperatureValue">
          {Math.round(props.data * 1.8) + 32}
        </span>
        <span className="TemperatureUnit">
          {" "}
          <a
            href="#"
            onClick={showCelsius}
            class="link-offset-2 link-underline link-underline-opacity-0"
          >
            ℃
          </a>
          |℉
        </span>
      </div>
    );
  }
}
