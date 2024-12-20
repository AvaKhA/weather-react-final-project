import React from "react";
import FormatDate from "./FormatDate";
import UnitConversion from "./UnitConversion";

export default function WeatherContent(props) {
  return (
    <div class="row first-row">
      <div class="col ">
        <ul className="WeatherInfo">
          <li className="CityName">{props.data.city}</li>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div class="col">
        <div className="TodayTemperature">
          <img src={props.data.icon} alt="weather icon"></img>

          <UnitConversion data={props.data.temperature} />
        </div>
      </div>
      <div class="col">
        <ul className="WeatherInfo">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} m/s</li>
        </ul>
      </div>
    </div>
  );
}
