import React, { useState } from "react";
import FormatForecastDate from "./FormatForecastDate";
import "./Weather.css";

export default function WeatherForecast(props) {
  console.log(props);
  if (props.data.ready) {
    return (
      <div class="row row-cols-1 row-cols-md-5 g-4 p-3">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title ForecastDay">
                <FormatForecastDate date={props.data.forecast.daily[1]} />
              </h5>
              <img
                src={props.data.forecast.daily[1].condition.icon_url}
                class="card-img-top"
                alt={props.data.forecast.daily[1].condition.icon}
              ></img>
              <p class="card-text ForecastTemperature">
                <span className="Max">
                  {Math.round(props.data.forecast.daily[1].temperature.maximum)}
                  °{" "}
                </span>
                {Math.round(props.data.forecast.daily[1].temperature.minimum)}°
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title ForecastDay">
                <FormatForecastDate date={props.data.forecast.daily[2]} />
              </h5>
              <img
                src={props.data.forecast.daily[2].condition.icon_url}
                class="card-img-top"
                alt={props.data.forecast.daily[2].condition.icon}
              ></img>
              <p class="card-text ForecastTemperature">
                <span className="Max">
                  {Math.round(props.data.forecast.daily[2].temperature.maximum)}
                  °{" "}
                </span>
                {Math.round(props.data.forecast.daily[2].temperature.minimum)}°
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title ForecastDay">
                <FormatForecastDate date={props.data.forecast.daily[3]} />
              </h5>
              <img
                src={props.data.forecast.daily[3].condition.icon_url}
                class="card-img-top"
                alt={props.data.forecast.daily[3].condition.icon}
              ></img>
              <p class="card-text ForecastTemperature">
                <span className="Max">
                  {Math.round(props.data.forecast.daily[3].temperature.maximum)}
                  °{" "}
                </span>
                {Math.round(props.data.forecast.daily[3].temperature.minimum)}°
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title ForecastDay">
                <FormatForecastDate date={props.data.forecast.daily[4]} />
              </h5>
              <img
                src={props.data.forecast.daily[4].condition.icon_url}
                class="card-img-top"
                alt={props.data.forecast.daily[4].condition.icon}
              ></img>
              <p class="card-text ForecastTemperature">
                <span className="Max">
                  {Math.round(props.data.forecast.daily[4].temperature.maximum)}
                  °{" "}
                </span>
                {Math.round(props.data.forecast.daily[4].temperature.minimum)}°
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title ForecastDay">
                <FormatForecastDate date={props.data.forecast.daily[5]} />
              </h5>
              <img
                src={props.data.forecast.daily[5].condition.icon_url}
                class="card-img-top"
                alt={props.data.forecast.daily[5].condition.icon}
              ></img>
              <p class="card-text ForecastTemperature">
                <span className="Max">
                  {Math.round(props.data.forecast.daily[5].temperature.maximum)}
                  °{" "}
                </span>
                {Math.round(props.data.forecast.daily[5].temperature.minimum)}°
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
