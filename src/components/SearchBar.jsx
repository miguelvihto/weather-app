import React, {useState} from 'react'

import '../styles/components/SearchBar.scss'

const weatherAPI = {
  key: "5fc20206ce3de44b6ed5e45c90387df7",
  base: "https://api.openweathermap.org/data/2.5/",
};
  
const geocodeGoogleAPI = {
  base: "https://maps.googleapis.com/maps/api/geocode/",
  key: "AIzaSyBCa9rLnc0j6dXR-iIfW9Mwi7TP3lp2Adg",
};

const autocompleteGoogleApi = {
  base: "https://maps.googleapis.com/maps/api/place/autocomplete/",
  key: "AIzaSyBCa9rLnc0j6dXR-iIfW9Mwi7TP3lp2Adg",
}

const SearchBar = () => {
  const [query, SetQuery] = useState("");
  const [weather, SetWeather] = useState(null);
  const [place, SetPlace] = useState(null);
  const [predictions, SetPredictions] = useState(null)

  const autocomplete = () => {
    fetch(`${autocompleteGoogleApi.base}json?input=${query}&types=(cities)&key=${autocompleteGoogleApi.key}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "OK") {
          SetPredictions(result.predictions)
        }
      })
  }

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${geocodeGoogleAPI.base}json?address=${query}&key=${geocodeGoogleAPI.key}`)
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
    <div className="search-box">
      <input
        type="text"
        list="autocomplete-list"
        className="search-bar"
        placeholder="Introduce the place..."
        onChange={(e) => SetQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <datalist id="autocomplete-list"></datalist>
    </div>
  )
}
  
export default SearchBar