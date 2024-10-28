import React from "react";

export default function FormatForecastDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.date.time * 1000);
  let day = days[date.getDay()];

  return <div>{day}</div>;
}
