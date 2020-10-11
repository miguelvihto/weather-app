import React, { useState } from 'react'
  
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
    </div>
  )
}
  
export default Weather