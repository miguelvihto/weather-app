import React, { useState } from 'react'

import IconWeather from "../components/WeatherIcons";
import HumidityBar from "../components/HumidityBar";
import WeekDays from "../components/WeekDays";
import UVI from "../components/UVIndex";
import Wind from "../components/Wind";
  
import '../styles/pages/Weather.scss'

const weatherAPI = {
    key: "5fc20206ce3de44b6ed5e45c90387df7",
    base: "https://api.openweathermap.org/data/2.5/",
};
  
const googleAPI = {
    base: "https://maps.googleapis.com/maps/api/geocode/",
    key: "AIzaSyBCa9rLnc0j6dXR-iIfW9Mwi7TP3lp2Adg",
};

const Weather = () => {
  const [query, SetQuery] = useState("");
  const [weather, SetWeather] = useState(null);
  const [place, SetPlace] = useState(null);

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${googleAPI.base}json?address=${query}&key=${googleAPI.key}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === "OK") {
            SetPlace(result.results[0]);
            console.log(result);

            fetch(
              `${weatherAPI.base}onecall?lat=${result.results[0].geometry.location.lat}&lon=${result.results[0].geometry.location.lng}&exclude={}&units=metric&appid=${weatherAPI.key}`
            )
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
                SetWeather(result);
                SetQuery("");
              });
          } else {
            console.log("Error");
          }
        });
    }
  };

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
    <div className="weather">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Introduce the place..."
          onChange={(e) => SetQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      <div className="Main">
      {typeof weather && place === null ? (
        <div></div>
      ) : (
        weather && (
          <div className="Weather">
            <div className="Weather__summary">
              <div className="location-box">
                <div className="location">{place.formatted_address}</div>
                <div className="date">{aryDates[0]}</div>
              </div>

              <div className="weather-box">
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
                <div className="weather-description">
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
      )}
    </div>
    </div>

    
  )
}
  
export default Weather