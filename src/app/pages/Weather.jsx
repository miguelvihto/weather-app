import React, {useState} from 'react'

import SearchBar from '../components/SearchBar'
import Forecast from '../components/Forecast'
  
import '../styles/pages/_Weather.scss'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [placeData, setPlaceData] = useState(null);



  return (
    <div className="weather">
      <SearchBar storeData={(weather, place) => {
        setWeatherData(weather)
        setPlaceData(place)
      }}></SearchBar>
      <React.Fragment>
      {typeof weatherData && placeData === null ? (
        <React.Fragment></React.Fragment>
      ) : (
        weatherData && (
          <Forecast weather={weatherData} place={placeData}></Forecast>
        )
      )}
    </React.Fragment>
    </div>

    
  )
}
  
export default Weather