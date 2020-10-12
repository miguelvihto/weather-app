import React from "react";

import "../styles/components/Wind.scss";

import Compass from "../assets/img/Compass2.0.svg";

const Wind = ({ wind_speed }) => {
  return (
    <div className="Wind">
      <img className="Compass" src={Compass} alt="Compass" />
      <div className="wind__animation">
        <svg class="wind1">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind2">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind3">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind4">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind5">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind6">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind7">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind8">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind9">
          <rect width="1" height="1"></rect>
        </svg>
        <svg class="wind10">
          <rect width="1" height="1"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Wind;