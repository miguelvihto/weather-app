import React from "react";
import {Link} from 'react-router-dom'

import '../styles/pages/_Home.scss'
import HeroImg from '../assets/img/HeroImg2.0.svg'

const Home = () => {
  return (
    <div className="hero">
        <div className="hero__banner">
          <img className="hero__img" src={HeroImg} alt="Main Image"/>
          <div className="hero__text">
            <h2>You are going to see the <strong>weather</strong>,</h2> 
            <br/>
            <h2>as you never see...</h2>
          </div>
        </div>
        <div className="hero__cta">
          <Link to="/weather" className="cta__link">
            Go! See the weather
          </Link>
        </div>
    </div>
  );
};

export default Home;
