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
      <div style={{ margin: "10px 0", display: "flex" }}>
        <p style={{ margin: "0 10px 0 0" }}>{label}</p>
        <p style={{ margin: 0 }}>{value}</p>
      </div>
      <Slider
        // vertical
        min={range.min}
        max={range.max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default BasicSlider;
