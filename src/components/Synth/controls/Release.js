import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeReleaseValue } from "../../../redux/actions/synth";

const Release = () => {
  const dispatch = useDispatch();
  const releaseTime = useSelector((state) => state.synth.settings.releaseTime);

  return (
    <BasicSlider
      value={releaseTime}
      range={{ min: 0, max: 0.5 }}
      step={0.02}
      label="Release"
      onChange={(value) => dispatch(changeReleaseValue(value))}
    />
  );
};

export default Release;
