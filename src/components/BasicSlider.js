import "rc-slider/assets/index.css";

import React from "react";
import Slider from "rc-slider";
import { sliderStyles } from "../styles/styles";

const BasicSlider = ({
  value,
  label,
  onChange,
  range = { min: 0, max: 100 },
  step = 1,
  ...props
} = {}) => {
  return (
    <div className={sliderStyles.MainContainer}>
      <Slider
        vertical
        min={range.min}
        max={range.max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <p>{value}</p>
      <p>{label}</p>
    </div>
  );
};

export default BasicSlider;
