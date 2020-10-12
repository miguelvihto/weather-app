import React, { useState, useEffect } from "react";

import "../styles/components/UVIndex.scss";

const UvIndex = ({ uvindex }) => {
  const [greenActive, setGreenActive] = useState("");
  const [yellowActive, setYellowActive] = useState("");
  const [orangeActive, setOrangeActive] = useState("");
  const [redActive, setRedActive] = useState("");
  const [pinkActive, setPinkActive] = useState("");

  useEffect(() => {
    if (uvindex >= 0 && uvindex < 3) {
      setGreenActive("active");
      setYellowActive("");
      setOrangeActive("");
      setRedActive("");
      setPinkActive("");
    } else if (uvindex >= 3 && uvindex < 6) {
      setGreenActive("");
      setYellowActive("active");
      setOrangeActive("");
      setRedActive("");
      setPinkActive("");
    } else if (uvindex >= 6 && uvindex < 8) {
      setGreenActive("");
      setYellowActive("");
      setOrangeActive("active");
      setRedActive("");
      setPinkActive("");
    } else if (uvindex >= 8 && uvindex < 11) {
      setGreenActive("");
      setYellowActive("");
      setOrangeActive("");
      setRedActive("active");
      setPinkActive("");
    } else if (uvindex >= 11) {
      setGreenActive("");
      setYellowActive("");
      setOrangeActive("");
      setRedActive("");
      setPinkActive("active");
    }
  }, [uvindex]);

  return (
    <div className="Uvi">
      <div className={`Uvi__bar pink ${pinkActive}`}>11+ Extreme</div>
      <div className={`Uvi__bar red ${redActive}`}>8-10 Very High</div>
      <div className={`Uvi__bar orange ${orangeActive}`}>6-7 High</div>
      <div className={`Uvi__bar ${yellowActive} yellow`}>3-5 Medium</div>
      <div className={`Uvi__bar green ${greenActive}`}>1-2 Low</div>
      <h6>UVI: {uvindex}º</h6>
    </div>
  );
};

export default UvIndex;
