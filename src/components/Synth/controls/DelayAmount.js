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
      label="Delay Amount"
      onChange={(value) => dispatch(changeDelayAmount(value))}
    />
  );
};

export default DelayAmount;
