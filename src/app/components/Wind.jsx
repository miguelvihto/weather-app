import React from "react";

import "../styles/components/_Wind.scss";

import Compass from "../assets/img/Compass2.0.svg";

const Wind = ({ wind_speed }) => {
  return (
    <div className="Wind">
      <img className="Compass" src={Compass} alt="Compass" />
      <div className="wind__animation">
        <svg className="wind1">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind2">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind3">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind4">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind5">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind6">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind7">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind8">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind9">
          <rect width="1" height="1"></rect>
        </svg>
        <svg className="wind10">
          <rect width="1" height="1"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Wind;