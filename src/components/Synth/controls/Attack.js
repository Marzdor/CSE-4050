import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeAttackValue } from "../../../redux/actions/synth";

const Attack = () => {
  const dispatch = useDispatch();
  const attackTime = useSelector((state) => state.synth.settings.attackTime);

  return (
    <BasicSlider
      value={attackTime}
      range={{ min: 0, max: 0.5 }}
      step={0.02}
      label="Attack"
      onChange={(value) => dispatch(changeAttackValue(value))}
    />
  );
};

export default Attack;
