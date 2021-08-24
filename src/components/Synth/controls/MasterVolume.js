import "rc-slider/assets/index.css";

import { useDispatch, useSelector } from "react-redux";

import React from "react";
import Slider from "rc-slider";
import { changeMasterVolume } from "../../../redux/actions/synth";
import { sliderStyles } from "../../../styles/styles";

const MasterVolume = () => {
  const dispatch = useDispatch();
  const masterVolume = useSelector(
    (state) => state.synth.settings.masterVolume
  );

  return (
    <div className={sliderStyles.MainContainer}>
      <Slider
        vertical
        min={0}
        max={100}
        value={masterVolume}
        onChange={(value) => dispatch(changeMasterVolume(value))}
      />
      <p>{masterVolume}</p>
      <p>Master Volume</p>
    </div>
  );
};

export default MasterVolume;
