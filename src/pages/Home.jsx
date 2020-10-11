import React from "react";
import {Link} from 'react-router-dom'

import '../styles/pages/Home.scss'
import HeroImg from '../assets/img/HeroImg2.0.svg'

const Home = () => {
  return (
    <div className="hero">
        <div className="hero__banner">
          <img className="hero__img" src={HeroImg} alt="Main Image"/>
          <h1>You are going to see the <strong>weather</strong>,</h1> 
          <br/>
          <h1>as you never see...</h1>
        </div>
        <div className="hero__cta">
          <Link to="#" className="cta__link">
            Go! See the weather
          </Link>
        </div>
    </div>
  );
};

export default Home;
