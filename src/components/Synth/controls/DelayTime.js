import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeDelayTime } from "../../../redux/actions/synth";

const DelayTime = () => {
  const dispatch = useDispatch();
  const delayTime = useSelector((state) => state.synth.settings.delayTime);

  return (
    <BasicSlider
      value={delayTime}
      range={{ min: 0, max: 1 }}
      step={0.05}
      label="Delay Time"
      onChange={(value) => dispatch(changeDelayTime(value))}
    />
  );
};

export default DelayTime;
