import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeDelayAmount } from "../../../redux/actions/synth";

const DelayAmount = () => {
  const dispatch = useDispatch();
  const delayAmountGain = useSelector(
    (state) => state.synth.settings.delayAmountGain
  );

  return (
    <BasicSlider
      value={delayAmountGain}
      range={{ min: 0, max: 0.9 }}
      step={0.05}
      label="Delay Amount"
      onChange={(value) => dispatch(changeDelayAmount(value))}
    />
  );
};

export default DelayAmount;
