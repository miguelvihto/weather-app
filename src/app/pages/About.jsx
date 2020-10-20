import React from "react";

import '../styles/pages/_About.scss'

const About = () => {
  return (
    <div className="about">
      <div className="introduction">
        <h1>Hi, Nice to meet you!!</h1>
        <br/>
        <p>Hello, dear person from Internet, its ME , the guy that did this website. Maybe you are wondering why I did this page, and what it is purpose.</p>
        <br/>
        <p>Well , for the "Why I did", only God knows... , and for it purpose, nothing complicated, just to show you a cool way to see the weather-forecast, you know with cool features and cool stuff.
        </p>
        <br/>
        <p>I know, I know, right now is not the coolest thing you can find in Internet, but thats what I want to achieve. A really cool website, and give you a really nice experience while you are visiting this page.</p>
        <br/>
        <p>And thats all, my dear person from Internet, thanks for reading this, and I will really apreciate if you send me your opinion in the form below, it will help to improve this website.</p>
        <br/>
        <h3>Have a nice day!!</h3>
      </div>
      <div className="form__container">
        <h3>Send me your opinion</h3>
        <form action="" className="form">
          <label htmlFor="name" className="form__label">Name</label>
          <input type="text" name="name" className="form__input" placeholder="Write your name"/>
          <label htmlFor="email" className="form__label">Email</label>
          <input type="email" name="email" className="form__input" placeholder="Write your email"/>
          <label htmlFor="opinion" className="form__label">Opinion</label>
          <textarea type="text" name="opinion" className="form__input textarea" placeholder="Write your opinion..."/>
          <button className="form__button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default About;
