import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeSustainLevel } from "../../../redux/actions/synth";
import { decimalToPercent } from "../../../helperFunctions/mathHelper";

const Sustain = () => {
  const dispatch = useDispatch();
  const sustainLevel = useSelector(
    (state) => state.synth.settings.sustainLevel
  );

  return (
    <BasicSlider
      value={decimalToPercent(sustainLevel)}
      label="Sustain"
      onChange={(value) => dispatch(changeSustainLevel(value))}
    />
  );
};

export default Sustain;
