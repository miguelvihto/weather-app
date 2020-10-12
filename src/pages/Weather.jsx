import React from 'react'

import SearchBar from '../components/SearchBar'
import Forecast from '../components/Forecast'
  
import '../styles/pages/_Weather.scss'

const Weather = ({weather, place}) => {
  return (
    <div className="weather">
      <SearchBar  ></SearchBar>
      <React.Fragment>
      {typeof weather && place === null ? (
        <React.Fragment></React.Fragment>
      ) : (
        weather && (
          <Forecast weather={weather} place={place}></Forecast>
        )
      )}
    </React.Fragment>
    </div>

    
  )
}
  
export default Weather