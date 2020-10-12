import React from "react";

import "../styles/components/_HumidityBar.scss";

const HumidityBar = ({ humidity }) => {
  return (
    <div className="humidity">
      <div className="humidity__box">
        <div className="percent">
          <svg className="humidity__progress">
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h6>
              {humidity}
              <span>%</span>
            </h6>
          </div>
        </div>
        <h6>Humidity</h6>
      </div>
    </div>
  );
};

export default HumidityBar;