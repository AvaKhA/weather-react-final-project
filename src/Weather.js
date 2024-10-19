import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <ul>
              <li className="CityName">Tehran</li>
              <li>Saturday 8:00</li>
            </ul>
          </div>
          <div class="col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
            ></img>
            <span>18</span>
            <span>°C</span>
          </div>
          <div class="col">3 of 2</div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </div>
  );
}
