import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeReleaseValue } from "../../../redux/actions/synth";

const Release = () => {
  const dispatch = useDispatch();
  const release = useSelector((state) => state.synth.settings.release);

  return (
    <BasicSlider
      value={release}
      range={{ min: 0, max: 0.5 }}
      step={0.02}
      label="Release"
      onChange={(value) => dispatch(changeReleaseValue(value))}
    />
  );
};

export default Release;
