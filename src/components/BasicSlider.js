import "rc-slider/assets/index.css";

import React from "react";
import Slider from "rc-slider";
import { sliderStyles } from "../styles/styles";

const BasicSlider = ({ value, label, onChange, ...props }) => {
  return (
    <div className={sliderStyles.MainContainer}>
      <Slider vertical min={0} max={100} value={value} onChange={onChange} />
      <p>{value}</p>
      <p>{label}</p>
    </div>
  );
};

export default BasicSlider;
