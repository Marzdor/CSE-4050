import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeSustainLevel } from "../../../redux/actions/synth";

const Sustain = () => {
  const dispatch = useDispatch();
  const sustainLevel = useSelector(
    (state) => state.synth.settings.sustainLevel
  );

  return (
    <BasicSlider
      value={sustainLevel}
      range={{ min: 0, max: 0.5 }}
      step={0.02}
      label="Sustain"
      onChange={(value) => dispatch(changeSustainLevel(value))}
    />
  );
};

export default Sustain;
