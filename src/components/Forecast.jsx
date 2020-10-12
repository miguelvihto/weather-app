import React from 'react'
  
  
import IconWeather from "../components/WeatherIcons";
import HumidityBar from "../components/HumidityBar";
import WeekDays from "../components/WeekDays";
import UVI from "../components/UVIndex";
import Wind from "../components/Wind";

import '../styles/components/_Forecast.scss'

const Forecast = ({weather, place}) => {
  const dateBuilder = (startDate, daysToAdd) => {
    const MonthAsString = (monthIndex) => {
      let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return month[monthIndex];
    };

    const DayAsString = (dayIndex) => {
      let weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return weekdays[dayIndex];
    };

    const aryDates = [];

    for (let i = 0; i <= daysToAdd; i++) {
      let currentDate = new Date();
      if (i === 0) {
        aryDates.push(
          `${DayAsString(
            currentDate.getDay()
          )} , ${currentDate.getDate()} ${MonthAsString(
            currentDate.getMonth()
          )} ${currentDate.getFullYear()}`
        );
      } else {
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(
          `${DayAsString(
            currentDate.getDay()
          )} , ${currentDate.getDate()} ${MonthAsString(
            currentDate.getMonth()
          )}`
        );
      }
    }

    return aryDates;
  };
  const startDate = new Date();
  const aryDates = dateBuilder(startDate, 6);

  return (
    <div className="forecast">
            <div className="forecast__summary">
              <div className="location-box">
                <div className="location">{place.formatted_address}</div>
                <div className="date">{aryDates[0]}</div>
              </div>

              <div className="forecast-box">
                <div
                  className={
                    weather.current.temp > 18 ? "temp warm" : "temp cold"
                  }
                >
                  {Math.round(weather.current.temp)}ºc
                  <div className="temp-maxmin">
                    {Math.round(weather.daily[0].temp.max)}ºc /{" "}
                    {Math.round(weather.daily[0].temp.min)}ºc
                  </div>
                </div>
                <div className="forecast-description">
                  {weather.current.weather[0].description}
                  <IconWeather dailyWeather={weather.daily[0]}></IconWeather>
                </div>
                <div className="feelslike">
                  <h3>Feels like</h3>
                  <div
                    className={
                      weather.current.feels_like > 18
                        ? "feelslike-temp warm"
                        : "feelslike-temp cold"
                    }
                  >
                    {Math.round(weather.current.feels_like)}ºc
                  </div>
                </div>
              </div>
            </div>
            <WeekDays
              currentTemp={weather.current.temp}
              dailyWeather={weather.daily}
              aryDates={aryDates}
            ></WeekDays>
            <div className="Humidity-UV">
              <h3>Humidity/UVI</h3>
              <HumidityBar humidity={weather.current.humidity} />
              <UVI uvindex={weather.current.uvi}></UVI>
            </div>
            <div className="Wind-visibility">
              <h3>Wind Speed/Visibility</h3>
              <Wind wind_speed={weather.current.wind_speed}></Wind>
            </div>
          </div>
  )
}
  
export default Forecast