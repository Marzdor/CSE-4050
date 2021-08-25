import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeVibratoAmount } from "../../../redux/actions/synth";

const VibratoAmount = () => {
  const dispatch = useDispatch();
  const vibratoAmount = useSelector(
    (state) => state.synth.settings.vibratoAmount
  );

  return (
    <BasicSlider
      value={vibratoAmount}
      label="Vibrato Amount"
      onChange={(value) => dispatch(changeVibratoAmount(value))}
    />
  );
};

export default VibratoAmount;
