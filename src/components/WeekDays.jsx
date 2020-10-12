import React from "react";

import IconWeather from "./WeatherIcons";

import "../styles/components/Weekdays.scss";

const WeekDays = ({ dailyWeather, aryDates }) => {
  return (
    <div className="Weather__weekdays">
      <div className="day">
        {aryDates[1]}
        <IconWeather dailyWeather={dailyWeather[1]}></IconWeather>
        <div className="day-maxmin">
          {Math.round(dailyWeather[1].temp.max)}ºc /{" "}
          {Math.round(dailyWeather[1].temp.min)}ºc
        </div>
      </div>
      <div className="day">
        {aryDates[2]}
        <IconWeather dailyWeather={dailyWeather[2]}></IconWeather>
        <div className="day-maxmin">
          {Math.round(dailyWeather[2].temp.max)}ºc /{" "}
          {Math.round(dailyWeather[2].temp.min)}ºc
        </div>
      </div>
      <div className="day">
        {aryDates[3]}
        <IconWeather dailyWeather={dailyWeather[3]}></IconWeather>
        <div className="day-maxmin">
          {Math.round(dailyWeather[3].temp.max)}ºc /{" "}
          {Math.round(dailyWeather[3].temp.min)}ºc
        </div>
      </div>

      <div className="day">
        {aryDates[4]}
        <IconWeather dailyWeather={dailyWeather[4]}></IconWeather>
        <div className="day-maxmin">
          {Math.round(dailyWeather[4].temp.max)}ºc /{" "}
          {Math.round(dailyWeather[4].temp.min)}ºc
        </div>
      </div>
      <div className="day">
        {aryDates[5]}
        <IconWeather dailyWeather={dailyWeather[5]}></IconWeather>
        <div className="day-maxmin">
          {Math.round(dailyWeather[5].temp.max)}ºc /{" "}
          {Math.round(dailyWeather[5].temp.min)}ºc
        </div>
      </div>
      <div className="day">
        {aryDates[6]}
        <IconWeather dailyWeather={dailyWeather[6]}></IconWeather>
        <div className="day-maxmin">
          {Math.round(dailyWeather[6].temp.max)}ºc /{" "}
          {Math.round(dailyWeather[6].temp.min)}ºc
        </div>
      </div>
    </div>
  );
};

export default WeekDays;
