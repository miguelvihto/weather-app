import React, { useEffect, useState } from "react";

import "../styles/components/_WeatherIcons.scss";

const IconsWeather = ({ dailyWeather }) => {
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState([]);

  useEffect(() => {
    setWeatherDescription(dailyWeather.weather[0].main);
    if (weatherDescription === "Thunderstorm") {
      setWeatherIcon(
        <div classNameName="icon thunder-storm">
          <div classNameName="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
    } else if (weatherDescription === "Clear") {
      setWeatherIcon(
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
    } else if (weatherDescription === "Clouds") {
      setWeatherIcon(
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
    } else if (weatherDescription === "Snow") {
      setWeatherIcon(
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
    } else if (weatherDescription === "Drizzle") {
      setWeatherIcon(
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      );
    } else if (weatherDescription === "Rain") {
      setWeatherIcon(
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
    } else {
      setWeatherIcon(<div></div>);
    }
  }, [weatherDescription, dailyWeather]);
  return <React.Fragment>{weatherIcon}</React.Fragment>;
};

export default IconsWeather;